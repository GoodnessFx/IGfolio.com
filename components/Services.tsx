import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom websites, marketing pages, and dashboards. React, Vite, TypeScript, Tailwind, clean component architecture and performance first delivery.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
  },
  {
    num: "02",
    title: "App & SaaS Development",
    desc: "Product systems, internal tools, and workflow logic. Supabase/PostgreSQL backends, multi-role auth, real-time features, and SaaS patterns that scale past the MVP.",
    tags: ["Node.js", "Hono", "Supabase", "PostgreSQL", "Auth", "PWA"],
  },
  {
    num: "03",
    title: "Smart Contract & Web3 Dev",
    desc: "Solidity contracts written security first with Foundry tooling. ERC standards, UUPS proxies, DeFi mechanics, and full DApp frontends with wagmi/viem integration.",
    tags: ["Solidity", "Foundry", "OpenZeppelin", "wagmi", "viem", "Base"],
  },
  {
    num: "04",
    title: "E-commerce",
    desc: "Custom storefronts and payment integrations for Nigerian and global markets, Paystack, Flutterwave, WhatsApp ordering flows, and cart experiences that convert.",
    tags: ["Paystack", "Flutterwave", "React", "Storefront", "WhatsApp Commerce"],
  },
  {
    num: "05",
    title: "SEO & Technical Foundations",
    desc: "Semantic HTML structure, metadata strategy, page architecture, Core Web Vitals, and performance audits, the technical foundations that make sites discoverable.",
    tags: ["Semantic HTML", "Meta Strategy", "Core Web Vitals", "Page Architecture"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="section-label">Services</span>
          <h2
            className="font-space-grotesk font-bold text-white leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            What I build.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-6 group"
            >
              {/* Number + arrow */}
              <div className="flex items-start justify-between">
                <span className="font-jetbrains text-[var(--accent)] text-sm font-medium">
                  {service.num}
                </span>
                <div className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[var(--text-dim)] group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)] transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Title + desc */}
              <div className="flex-1 space-y-3">
                <h3 className="font-space-grotesk font-bold text-white text-xl leading-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-dm-sans text-[14px] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(255,255,255,0.04)]">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            className="rounded-2xl p-7 flex flex-col items-start justify-between gap-6 border border-solid border-[rgba(207,97,40,0.30)] bg-[rgba(207,97,40,0.03)] hover:border-[rgba(207,97,40,0.50)] transition-all duration-300 group"
          >
            <div className="space-y-3">
              <p className="font-space-grotesk font-bold text-white text-xl leading-tight">
                Have something specific in mind?
              </p>
              <p className="text-[var(--text-secondary)] font-dm-sans text-[14px] leading-relaxed">
                If your project doesn't fit a category, let's talk. Most interesting work doesn't.
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary text-sm"
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
