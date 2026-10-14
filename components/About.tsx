import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const stats = [
  { value: "4+",  label: "Years"       },
  { value: "15+", label: "Projects"    },
  { value: "3",   label: "Core stacks" },
  { value: "5",   label: "Build types" },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(207,97,40,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: stat block + quote ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] transition-colors duration-300 p-7 flex flex-col gap-1"
                >
                  <span className="font-space-grotesk font-bold text-white text-4xl leading-none text-[var(--accent)]">
                    {s.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-dim)] font-dm-sans mt-2">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="glass-card rounded-2xl p-8">
              <p className="font-space-grotesk font-bold text-white text-xl md:text-2xl leading-[1.35]">
                "I build for the end result, working software in the hands of real users, not just impressive demos."
              </p>
              <div className="mt-6 h-px w-12 bg-[var(--accent)] opacity-60" />
            </div>

            {/* CV link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex"
            >
              <FileText size={16} />
              View CV
            </a>
          </motion.div>

          {/* ── Right: bio ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">About Me</span>
              <h2
                className="font-space-grotesk font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
              >
                I'm IG, full stack developer and Web3 builder.
              </h2>
            </div>

            <div className="space-y-5 text-[var(--text-secondary)] font-dm-sans text-[16px] leading-relaxed">
              <p>
                I'm a full stack developer and smart contract engineer based in Lagos, Nigeria. I build across the full product surface, React frontends, Node/Hono APIs, Supabase backends, and Solidity contracts deployed on EVM chains.
              </p>
              <p>
                My work spans websites, SaaS products, e-commerce storefronts, and Web3 protocols, connected by the same discipline: clean architecture, product thinking, and shipping things real users actually touch.
              </p>
              <p>
                I'm also the founder of <span className="text-white font-medium">Growth Network</span>, where I work on connecting builders with resources and opportunities across Africa's tech ecosystem.
              </p>
              <p className="text-[var(--text-primary)] font-medium">
                I think in systems. I care about the quality of what ships, not just the speed of what gets pushed.
              </p>
            </div>

            {/* Attribute pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Systems thinker",
                "Security first",
                "Product minded",
                "Web3 native",
                "Lagos, Nigeria",
                "Remote-ready",
              ].map((attr) => (
                <span
                  key={attr}
                  className="px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] text-xs font-dm-sans text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  {attr}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
