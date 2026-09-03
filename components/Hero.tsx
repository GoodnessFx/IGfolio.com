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
    <div className="flex flex-col gap-1.5">
      <span
        className="font-space-grotesk font-bold text-white leading-none"
        style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
      >
        <Counter target={value} suffix={suffix} />
      </span>
      <span
        className="text-[var(--text-dim)] font-dm-sans leading-tight"
        style={{ fontSize: "11px", letterSpacing: "0.04em" }}
      >
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
      className="relative overflow-hidden bg-[var(--bg-primary)]"
      style={{ paddingTop: "80px" }}
    >
      {/* ── Ambient glow — desktop only (doesn't matter on mobile) ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 80% 50%, rgba(207,97,40,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ─────────────────────────────────────────────────────────
          MOBILE layout  — stacked vertically
          DESKTOP layout — side-by-side grid
      ───────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ── DESKTOP: two-col grid ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_44%] md:gap-12 md:items-center md:min-h-[calc(100vh-80px)]">

          {/* Left: text */}
          <div className="py-16">
            <TextContent />
            <StatsRow />
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex items-end self-end pb-0"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                height: "88%",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.60), 0 0 0 1px rgba(207,97,40,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="/images/ig.png"
                alt="Goodness Iyamah"
                className="w-full h-full object-cover object-top"
                style={{ filter: "contrast(1.03) brightness(0.95)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,24,22,0.75) 0%, rgba(26,24,22,0.08) 40%, transparent 65%)",
                }}
              />
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(207,97,40,0.55) 38%, rgba(240,160,112,0.75) 62%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(26,24,22,0.80)",
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
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{
                  background: "rgba(22,21,19,0.88)",
                  backdropFilter: "blur(18px)",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="font-space-grotesk font-bold text-white text-[15px] tracking-tight">
                  Goodness Iyamah
                </p>
                <div className="flex items-center gap-2 mt-1.5">
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
        </div>

        {/* ── MOBILE: stacked layout ── */}
        <div className="md:hidden flex flex-col gap-8 pt-8 pb-16">

          {/* Photo first on mobile — contained, no bleed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full"
          >
            {/* Fixed-height container so photo doesn't go full screen */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: "52vh",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
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
                    "linear-gradient(to top, rgba(26,24,22,0.72) 0%, rgba(26,24,22,0.05) 40%, transparent 62%)",
                }}
              />
              {/* Top sheen */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(207,97,40,0.55) 40%, rgba(240,160,112,0.75) 60%, transparent 100%)",
                }}
              />
              {/* Badge */}
              <div
                className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                style={{
                  background: "rgba(26,24,22,0.82)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span
                  className="text-[var(--text-secondary)] font-dm-sans"
                  style={{ fontSize: "8px", letterSpacing: "0.10em", textTransform: "uppercase" }}
                >
                  Available for work
                </span>
              </div>
              {/* Name card */}
              <div
                className="absolute bottom-0 inset-x-0 px-4 py-3"
                style={{
                  background: "rgba(22,21,19,0.88)",
                  backdropFilter: "blur(16px)",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="font-space-grotesk font-bold text-white text-[13px] tracking-tight">
                  Goodness Iyamah
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 bg-[var(--accent)] opacity-80" />
                  <span
                    className="text-[var(--text-secondary)] font-dm-sans"
                    style={{ fontSize: "9px", letterSpacing: "0.10em", textTransform: "uppercase" }}
                  >
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text below photo on mobile */}
          <div>
            <TextContent />
            <StatsRow />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
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

// ── Text block (shared) ───────────────────────────────────────────────────────
function TextContent() {
  return (
    <>
      {/* Role line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-7"
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
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.75, ease: [0.215, 0.61, 0.355, 1] }}
        className="font-space-grotesk font-bold text-white mb-6"
        style={{
          fontSize: "clamp(38px, 6.5vw, 80px)",
          lineHeight: "1.06",
          letterSpacing: "-0.025em",
        }}
      >
        I build software<br />
        <span style={{ color: "var(--accent)" }}>people actually use.</span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.6 }}
        className="font-dm-sans text-[var(--text-secondary)] mb-10"
        style={{ fontSize: "clamp(14px, 1.8vw, 17px)", lineHeight: "1.72", maxWidth: "480px" }}
      >
        Websites, apps, SaaS products, and smart contracts,
        built clean, shipped fast, and designed to work for real people.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.40, duration: 0.55 }}
        className="flex flex-wrap gap-3 mb-12"
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
    </>
  );
}

// ── Stats row (shared) ────────────────────────────────────────────────────────
function StatsRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.54, duration: 0.55 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <Stat value={3}  suffix="+" label="Years of experience" />
      <Stat value={15} suffix="+" label="Projects shipped"    />
      <Stat value={8}  suffix="+" label="Industries covered"  />
      <Stat value={3}  suffix="+" label="EVM chains deployed" />
    </motion.div>
  );
}
