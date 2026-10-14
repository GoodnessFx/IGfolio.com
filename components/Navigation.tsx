import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work",     id: "projects" },
    { name: "Process",  id: "process"  },
    { name: "Services", id: "services" },
    { name: "About",    id: "about"    },
    { name: "Contact",  id: "contact"  },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── Floating nav wrapper ── */}
      <motion.div
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4"
      >
        {/* ── The capsule container ── */}
        <div
          className={`w-full max-w-5xl flex items-center justify-between gap-4 px-3 py-2 rounded-full transition-all duration-500 ${
            scrolled ? "shadow-lg shadow-black/40" : ""
          }`}
          style={{
            background: "rgba(28, 26, 24, 0.90)",
            backdropFilter: "blur(18px) saturate(1.5)",
            WebkitBackdropFilter: "blur(18px) saturate(1.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 2px 16px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* ── Logo ── */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Back to top"
            className="flex items-center gap-2.5 pl-1 select-none shrink-0"
          >
            {/* IG monogram badge — clean SVG mark */}
            <div
              className="relative w-9 h-9 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(207,97,40,0.18) 0%, rgba(207,97,40,0.06) 100%)",
                border: "1px solid rgba(207,97,40,0.35)",
                boxShadow: "0 0 12px rgba(207,97,40,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Inline SVG IG mark — clean geometric letterforms */}
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
                {/* I — clean vertical bar */}
                <rect x="0" y="0" width="3.5" height="18" rx="1.5" fill="#CF6128"/>
                {/* G — arc open on right with crossbar */}
                <path
                  d="M 8 0 A 9 9 0 0 0 8 18"
                  stroke="#CF6128"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* G crossbar */}
                <rect x="12.5" y="7.5" width="7" height="3" rx="1.25" fill="#CF6128"/>
                {/* G descender */}
                <rect x="16" y="9.5" width="3.5" height="5.5" rx="1.25" fill="#CF6128"/>
                {/* Accent dot — fine detail */}
                <circle cx="1.75" cy="16.5" r="0" fill="#E07840"/>
              </svg>
              {/* Prism sheen overlay */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(240,160,112,0.7) 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Wordmark — hide on small screens */}
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="font-space-grotesk font-bold text-[13px] text-[var(--text-primary)] tracking-tight leading-none">
                Goodness Iyamah
              </span>
              <span className="text-[9px] font-jetbrains uppercase tracking-[0.14em] text-[var(--text-dim)]">
                Full Stack · Web3
              </span>
            </div>
          </motion.button>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.10em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 font-dm-sans"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* ── CTA + mobile toggle ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* CTA button — solid filled pill like reference */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-[0.08em] transition-all duration-200 active:scale-95"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 16px rgba(207,97,40,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-light)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(207,97,40,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(207,97,40,0.35)";
              }}
            >
              Let's Talk
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.10)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-6"
            style={{
              background: "rgba(28,26,24,0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.10)] text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollToSection(link.id)}
                className="nav-link font-space-grotesk font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                style={{ fontSize: "clamp(28px, 8vw, 42px)" }}
              >
                {link.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-[0.08em] text-white active:scale-95 transition-all"
              style={{ background: "var(--accent)", boxShadow: "0 0 20px rgba(207,97,40,0.4)" }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
