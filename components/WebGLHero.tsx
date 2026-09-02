import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec2  uMouse;
  uniform vec2  uResolution;
  varying vec2  vUv;

  // ---- noise helpers ----
  vec3 mod289(vec3 x){ return x - floor(x*(1./289.))*289.; }
  vec4 mod289(vec4 x){ return x - floor(x*(1./289.))*289.; }
  vec4 permute(vec4 x){ return mod289(((x*34.)+1.)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1./6., 1./3.);
    const vec4 D = vec4(0., 0.5, 1., 2.);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g  = step(x0.yzx, x0.xyz);
    vec3 l  = 1. - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.,i1.z,i2.z,1.))
    + i.y + vec4(0.,i1.y,i2.y,1.))
    + i.x + vec4(0.,i1.x,i2.x,1.));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j  = p - 49.*floor(p*ns.z*ns.z);
    vec4 x_ = floor(j*ns.z);
    vec4 y_ = floor(j - 7.*x_);
    vec4 x  = x_*ns.x + ns.yyyy;
    vec4 y  = y_*ns.x + ns.yyyy;
    vec4 h  = 1. - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.+1.;
    vec4 s1 = floor(b1)*2.+1.;
    vec4 sh = -step(h, vec4(0.));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.);
    m = m * m;
    return 42. * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
  // ---- end noise ----

  void main(){
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    uv.x *= aspect;

    // mouse influence (subtle pull)
    vec2 mouse = vec2(uMouse.x * aspect, uMouse.y);
    float mouseDist = length(uv - mouse);
    float mouseInfluence = smoothstep(0.6, 0.0, mouseDist) * 0.18;

    float t = uTime * 0.28;

    // layered noise for liquid blob shape
    float n1 = snoise(vec3(uv * 1.4, t));
    float n2 = snoise(vec3(uv * 2.2 + 0.4, t * 1.3));
    float n3 = snoise(vec3(uv * 3.6 - 0.8, t * 0.7));
    float n  = n1 * 0.55 + n2 * 0.30 + n3 * 0.15 + mouseInfluence;

    // blob boundary — centred, offset by noise
    vec2 centre = vec2(aspect * 0.72, 0.5);
    float dist  = length(uv - centre);
    float blob  = smoothstep(0.52 + n * 0.22, 0.18 + n * 0.10, dist);

    // colour: cyan core → violet edge → transparent bg
    vec3 cyan   = vec3(0.024, 0.714, 0.831); // #06b6d4
    vec3 violet = vec3(0.545, 0.361, 0.965); // #8b5cf6
    vec3 deep   = vec3(0.035, 0.035, 0.044); // ~bg-primary

    float colT  = smoothstep(0.0, 1.0, dist / 0.50 + n * 0.15);
    vec3  col   = mix(cyan, violet, clamp(colT, 0., 1.));
    col = mix(col, deep, smoothstep(0.3, 0.7, dist - n * 0.12));

    // inner glow
    float innerGlow = (1.0 - smoothstep(0.0, 0.28, dist)) * 0.55;
    col += vec3(0.04, 0.18, 0.24) * innerGlow;

    float alpha = blob * 0.88;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

interface Props {
  className?: string;
}

export function WebGLHero({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const mouseRef  = useRef({ x: 0.72, y: 0.5 });
  const targetRef = useRef({ x: 0.72, y: 0.5 });

  const cleanup = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Low-end device fallback: skip WebGL if unavailable
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      return; // graceful degradation — CSS gradient fallback will show
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const resolution = new THREE.Vector2(canvas.clientWidth, canvas.clientHeight);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const uniforms = {
      uTime:       { value: 0 },
      uMouse:      { value: new THREE.Vector2(mouseRef.current.x, mouseRef.current.y) },
      uResolution: { value: resolution },
    };

    const mat = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite:  false,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(mesh);

    // Intersection observer — pause when off-screen
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    let lastTime = 0;
    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!visible) return;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!prefersReduced) {
        // Smooth lerp mouse
        mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.04;
        mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.04;
        uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
        uniforms.uTime.value += dt;
      }

      renderer.render(scene, camera);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cleanup();
      io.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      mat.dispose();
      renderer.dispose();
    };
  }, [cleanup]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
