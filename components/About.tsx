import { motion } from "framer-motion";

export function About() {
  const coreAttributes = [
    "Security-first engineering mindset",
    "Ships end-to-end — contract to UI",
    "Self-directed researcher & fast learner",
    "Systems thinker: Web3 + Finance + Product",
    "Growth-oriented: protocol, product, market",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">Turning ideas into reality</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-7 space-y-6 text-[var(--text-secondary)] text-[17px] leading-relaxed font-dm-sans">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Smart Contract Engineer and Full-Stack Web3 Developer who ships end-to-end — 
              from zero-day Solidity contracts to production-grade dApp frontends.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Over the past year I've shipped 7 live projects across DeFi escrow, NFT ticketing, 
              on-chain AI trading intelligence, cross-border payments, tokenized talent investment, 
              EVM protocol learning, and AI-adaptive mobile apps.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My first principle is security. CEI patterns, reentrancy guards, ZK verification layers, 
              and formal audit trails aren't afterthoughts — they're the foundation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Currently deepening expertise in DeFi Protocol Security, MEV, Layer 2 infrastructure 
              (Base, Arbitrum, ZK rollups), and AI Agent systems that operate autonomously on-chain.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[var(--text-primary)] font-medium"
            >
              I don't just build features. I build systems that work, protocols that hold, 
              and products that survive contact with reality.
            </motion.p>

            {/* Core Attributes */}
            <div className="pt-8 space-y-4">
              <span className="section-label">Core Attributes</span>
              <ul className="space-y-3">
                {coreAttributes.map((attr, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-[var(--text-primary)] font-medium font-dm-sans"
                  >
                    <span className="text-[var(--accent)] font-bold">›</span>
                    {attr}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="relative bg-[var(--bg-card)] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="h-[500px] w-full relative">
                  <img
                    src="/images/ig.png"
                    alt="Goodness Iyamah"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                <div className="p-8 relative bg-[var(--bg-card)] border-t border-[rgba(255,255,255,0.08)]">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-space-grotesk">Goodness Iyamah</h3>
                    <div className="flex items-center gap-3">
                      <span className="h-[1px] w-8 bg-[var(--accent)]" />
                      <span className="text-[var(--text-secondary)] font-dm-sans text-xs uppercase tracking-wider">
                        Smart Contract Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
