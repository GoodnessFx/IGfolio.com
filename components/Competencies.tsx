import { motion } from "framer-motion";

const TerminalPanel = ({ title, lines, delay }: { title: string; lines: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="terminal-card p-6"
  >
    <div className="text-[var(--accent)] font-bold mb-4 uppercase tracking-widest text-[11px]">
      {title}
    </div>
    <div className="space-y-2 font-mono text-[13px]">
      {lines.map((line, i) => {
        const parts = line.split(" ");
        const label = parts[0];
        const value = parts.slice(1).join(" ");
        return (
          <div key={i} className="flex justify-between items-start gap-4">
            <span className="text-[var(--text-secondary)] shrink-0">{label}</span>
            <span className="text-white text-right">{value}</span>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export function Competencies() {
  const panels = [
    {
      title: "ERC Standards",
      lines: [
        "ERC-20 ......... permit · SafeERC20 · fee-on-transfer",
        "ERC-721 ........ reentrancy protection",
        "ERC-1155 ....... batch operations",
        "ERC-4626 ....... inflation attack prevention",
        "EIP-712 ........ structured data signatures",
      ],
    },
    {
      title: "Security Patterns",
      lines: [
        "CEI Pattern .... Check-Effects-Interactions enforced",
        "ReentrancyGuard  nonReentrant on all state mutations",
        "RBAC ........... Role-Based Access Control",
        "ecrecover ...... address(0) guard on all sig recovery",
        "Oracle Safety .. staleness checks on price feeds",
      ],
    },
    {
      title: "Gas Optimization",
      lines: [
        "Storage Packing  tight variable layout in structs",
        "SLOAD Caching .. local vars for repeated reads",
        "Calldata ........ prefer over memory for read-only",
        "Unchecked Math . overflow-safe arithmetic blocks",
        "EIP-1167 ....... minimal proxy for clone deploy",
      ],
    },
    {
      title: "Toolchain & Deploy",
      lines: [
        "Foundry ........ forge · cast · anvil",
        "Hardhat ........ full test suite integration",
        "Slither ........ static analysis pre-deploy",
        "Deployments .... Sepolia · Mumbai · Base · Polygon",
        "Proxy Patterns . Transparent + UUPS",
      ],
    },
  ];

  return (
    <section id="competencies" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Smart Contracts</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">Security-First. Gas-Optimized. Audit-Ready.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panels.map((panel, i) => (
            <TerminalPanel key={i} {...panel} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
