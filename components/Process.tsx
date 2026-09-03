import { motion } from "framer-motion";
import { Search, Palette, Code2, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    label: "Scope",
    subs: [
      "Align on goals and constraints",
      "Map user flows and edge cases",
      "Define deliverables and timeline",
      "Agree on tech stack fit",
    ],
  },
  {
    num: "02",
    icon: Palette,
    label: "Design",
    subs: [
      "Map pages and component hierarchy",
      "Design component states",
      "Plan mobile breakpoints",
      "Establish design tokens",
    ],
  },
  {
    num: "03",
    icon: Code2,
    label: "Build",
    subs: [
      "Scaffold architecture and data layer",
      "Implement features iteratively",
      "Wire up auth, payments, APIs",
      "Smart contract logic + tests",
    ],
  },
  {
    num: "04",
    icon: FlaskConical,
    label: "Test",
    subs: [
      "End-to-end flow testing",
      "Review performance and speed",
      "Security audit (contracts/auth)",
      "Cross-device QA",
    ],
  },
  {
    num: "05",
    icon: Rocket,
    label: "Ship",
    subs: [
      "Deploy to production/mainnet",
      "Configure DNS, CDN, env vars",
      "Handoff docs and walkthrough",
      "Post-launch support window",
    ],
  },
];

// Two rows of tech pills — web2 first, web3 second
const techRow1 = [
  "React", "Vite", "TypeScript", "Next.js", "Node.js",
  "Hono", "Supabase", "PostgreSQL", "Tailwind CSS", "Solidity",
  "Foundry", "OpenZeppelin", "Viem", "wagmi", "Base L2",
];

const marqueeItems = (arr: string[]) => [...arr, ...arr]; // duplicate for seamless loop

export function Process() {
  return (
    <section id="process" className="py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-6"
        >
          <span className="section-label">Execution System</span>
          <h2
            className="font-space-grotesk font-bold text-white leading-[1.1] mb-4"
            style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
          >
            Modern stack.{" "}
          <span className="text-[var(--accent)]">Real execution.</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-dm-sans text-[16px] max-w-xl leading-relaxed">
            Full stack and Web3 foundations, structured into a clear build process that reduces surprises and ships on time.
          </p>
        </motion.div>

        {/* Tech pill marquee rows */}
        <div className="mb-16 space-y-3 -mx-6">
          {/* Row 1 — web2 */}
          <div className="flex overflow-hidden">
            <div className="flex gap-3 animate-marquee whitespace-nowrap px-6">
              {marqueeItems(techRow1).map((t, i) => (
                <span
                  key={`r1-${i}`}
                  className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] text-xs font-jetbrains text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors duration-200 select-none"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--bg-secondary)] p-7 flex flex-col gap-5 hover:bg-[var(--bg-card)] transition-colors duration-300 group"
            >
              {/* Icon + number */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[rgba(207,97,40,0.18)] transition-colors duration-300">
                  <step.icon size={18} />
                </div>
                <span className="font-jetbrains text-[var(--text-dim)] text-xs">{step.num}</span>
              </div>

              {/* Label */}
              <p className="font-space-grotesk font-bold text-white text-lg group-hover:text-[var(--accent)] transition-colors duration-300">
                {step.label}
              </p>

              {/* Sub-steps */}
              <ul className="space-y-2">
                {step.subs.map((s, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[var(--text-secondary)] text-[13px] font-dm-sans leading-snug"
                  >
                    <span className="text-[var(--accent)] mt-0.5 text-[10px] shrink-0">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
