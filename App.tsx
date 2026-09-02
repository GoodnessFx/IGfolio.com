import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

import Splash      from "./components/Splash";
import { Navigation } from "./components/Navigation";
import { Hero }    from "./components/Hero";
import { Focus }   from "./components/Focus";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { About }   from "./components/About";
import { Contact } from "./components/Contact";
import { Footer }  from "./components/Footer";

// ── Cursor glow blob ─────────────────────────────────────────────────────────
function CursorGlow() {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const x = useSpring(rawX, { stiffness: 80, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 80, damping: 22, mass: 0.6 });
  const visible = useRef(false);

  useEffect(() => {
    // Only render on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      if (!visible.current) visible.current = true;
      rawX.set(e.clientX - 200);
      rawY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed z-[1] top-0 left-0 w-[400px] h-[400px] rounded-full"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(207,97,40,0.06) 0%, rgba(207,97,40,0.02) 50%, transparent 72%)",
          filter: "blur(2px)",
        }}
      />
    </motion.div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
          {/* Noise texture */}
          <div className="bg-noise" aria-hidden="true" />

          {/* Cursor glow */}
          <CursorGlow />

          {/* Navigation */}
          <Navigation />

          {/* Sections */}
          <main>
            <Hero />
            <Focus />
            <Projects />
            <Process />
            <Services />
            <About />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
