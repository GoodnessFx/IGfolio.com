import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const pct = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 3);
            setValue(Math.round(eased * target));
            if (pct < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="font-space-grotesk font-bold text-white leading-none"
        style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
      >
        <Counter target={value} suffix={suffix} />
      </span>
      <span className="text-[11px] text-[var(--text-dim)] font-dm-sans leading-tight" style={{ letterSpacing: "0.04em" }}>
        {label}
      </span>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "clamp(80px, 10vh, 120px)" }}
    >
      {/* ── Photo panel — right side ── */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[52%] pointer-events-none"
        aria-hidden="true"
      >
        {/* Warm ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 90% at 75% 50%, rgba(207,97,40,0.07) 0%, transparent 72%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute inset-0 flex items-end justify-center md:justify-end pr-0 md:pr-10"
        >
          <div
            className="relative h-[86%] w-[88%] md:w-[76%] max-w-[500px] rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.60), 0 0 0 1px rgba(207,97,40,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Photo */}
            <img
              src="/images/ig.png"
              alt="Goodness Iyamah"
              className="w-full h-full object-cover object-top"
              style={{ filter: "contrast(1.03) brightness(0.95)" }}
            />

            {/* Bottom vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,24,22,0.72) 0%, rgba(26,24,22,0.08) 42%, transparent 68%)",
              }}
            />

            {/* Top edge sheen */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(207,97,40,0.55) 38%, rgba(240,160,112,0.75) 62%, transparent 100%)",
              }}
            />

            {/* Status badge */}
            <div
              className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(26,24,22,0.78)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span
                className="text-[var(--text-secondary)] font-dm-sans"
                style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Available for work
              </span>
            </div>

            {/* Name card */}
            <div
              className="absolute bottom-0 inset-x-0 px-6 py-5"
              style={{
                background: "rgba(22,21,19,0.85)",
                backdropFilter: "blur(18px)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="font-space-grotesk font-bold text-white text-[15px] tracking-tight">
                Goodness Iyamah
              </p>
              <div className="flex items-center gap-2.5 mt-1.5">
                <span className="h-px w-5 bg-[var(--accent)] opacity-80" />
                <span
                  className="text-[var(--text-secondary)] font-dm-sans"
                  style={{ fontSize: "10px", letterSpacing: "0.10em", textTransform: "uppercase" }}
                >
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left fade */}
        <div
          className="absolute inset-y-0 left-0 w-64 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg-primary) 20%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-[600px]">

          {/* Role line — clean, no box, just weighted text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-5 h-px bg-[var(--accent)]" />
            <span
              className="text-[var(--accent)] font-dm-sans font-medium"
              style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              Software Engineer
            </span>
            <span className="text-[var(--text-dim)]" style={{ fontSize: "11px" }}>·</span>
            <span
              className="text-[var(--text-dim)] font-dm-sans"
              style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Web3 &amp; Full Stack
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-space-grotesk font-bold text-white mb-7"
            style={{
              fontSize: "clamp(44px, 6.5vw, 80px)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
          >
            I build software<br />
            <span style={{ color: "var(--accent)" }}>people actually use.</span>
          </motion.h1>

          {/* Sub-headline — human, not a spec list */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="font-dm-sans text-[var(--text-secondary)] mb-11"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "1.7", maxWidth: "480px" }}
          >
            Websites, apps, SaaS products, and smart contracts —
            built clean, shipped fast, and designed to work for real people.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.55 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              View Work
              <ArrowDown size={15} />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FileText size={15} />
              View Résumé
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.55 }}
            className="flex flex-wrap gap-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <Stat value={3}  suffix="+" label="Years of experience"  />
            <Stat value={15} suffix="+" label="Projects shipped"      />
            <Stat value={8}  suffix="+" label="Industries covered"    />
            <Stat value={3}  suffix="+" label="EVM chains deployed"   />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down"
      >
        <span
          className="font-dm-sans"
          style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Scroll
        </span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
