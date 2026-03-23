import { motion } from "framer-motion";
import { Code2, Layers, ShieldCheck, Monitor, Smartphone, Zap } from "lucide-react";

const SkillCard = ({ 
  icon: Icon, 
  title, 
  tags, 
  delay 
}: { 
  icon: any; 
  title: string; 
  tags: string[]; 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[var(--bg-card)] border border-[rgba(255,255,255,0.07)] border-t-[3px] border-t-[var(--accent)] p-8 rounded-lg transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1 group"
  >
    <div className="w-10 h-10 bg-[rgba(207,97,40,0.1)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
      <Icon className="text-[var(--accent)]" size={20} />
    </div>
    <h3 className="text-lg font-bold mb-4 text-white font-space-grotesk">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="tag-pill">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "Smart Contract Engineering",
      tags: ["Solidity", "EVM", "Foundry", "Hardhat", "Slither", "OpenZeppelin"],
    },
    {
      icon: Layers,
      title: "DeFi & ERC Standards",
      tags: ["ERC-20", "ERC-721", "ERC-1155", "ERC-4626", "EIP-712", "UUPS Proxy"],
    },
    {
      icon: ShieldCheck,
      title: "Security-First Engineering",
      tags: ["CEI Pattern", "ReentrancyGuard", "RBAC", "ZK Verification", "Oracle Safety", "Audit-Ready"],
    },
    {
      icon: Monitor,
      title: "Frontend & Web3 UI",
      tags: ["React", "TypeScript", "Next.js", "Vite", "Tailwind", "wagmi", "Viem", "RainbowKit"],
    },
    {
      icon: Smartphone,
      title: "Mobile & Backend",
      tags: ["React Native", "Expo", "Node.js", "Hono", "Supabase", "WebSockets"],
    },
    {
      icon: Zap,
      title: "Gas Optimization & Architecture",
      tags: ["Storage Packing", "EIP-1167", "SLOAD Caching", "Unchecked Math", "Clean Code", "Scalable Systems"],
    },
  ];

  const buildingToward = [
    "DeFi Protocol Security",
    "AI Agent Systems",
    "Formal Verification",
    "On-Chain Finance & MEV",
    "Layer 2 Infrastructure",
    "Spatial Computing",
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">What I bring to the table</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-10 border-y border-[rgba(255,255,255,0.05)] overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="text-[11px] font-dm-sans text-[var(--accent)] uppercase tracking-widest whitespace-nowrap">
              BUILDING TOWARD:
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {buildingToward.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-[rgba(255,255,255,0.08)] rounded-full text-xs text-[var(--text-secondary)] hover:border-[var(--accent)] transition-colors duration-300 font-dm-sans"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
