import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FocusTab {
  id: string;
  label: string;
  category: string;
  headline: string;
  description: string;
  features: { title: string; desc: string }[];
}

const tabs: FocusTab[] = [
  {
    id: "fullstack",
    label: "Full-Stack Product",
    category: "FULL-STACK PRODUCT",
    headline: "End-to-end products built to scale.",
    description:
      "From dashboard to database — React frontends, Node/Hono APIs, Supabase backends, and SaaS systems architected to grow past the MVP.",
    features: [
      {
        title: "Product depth",
        desc: "Auth flows, role-based access, real-time updates, and dashboards that handle real data.",
      },
      {
        title: "Full-stack range",
        desc: "React + TypeScript UI, Hono/Node API layer, Supabase/PostgreSQL — owned end-to-end.",
      },
      {
        title: "SaaS architecture",
        desc: "Multi-tenant patterns, subscription logic, billing hooks, and clean component structure.",
      },
    ],
  },
  {
    id: "website",
    label: "Business Website",
    category: "BUSINESS WEBSITE",
    headline: "Sites that convert, not just look good.",
    description:
      "Marketing sites, company pages, and landing experiences built for clarity, speed, and SEO — not just aesthetics.",
    features: [
      {
        title: "Brand clarity",
        desc: "Clean hierarchy, intentional layout, and content structure that communicates instantly.",
      },
      {
        title: "SEO structure",
        desc: "Semantic HTML, meta strategy, page architecture, and performance-first foundations.",
      },
      {
        title: "Conversion",
        desc: "Clear CTAs, trust signals, responsive polish — built around actual business goals.",
      },
    ],
  },
  {
    id: "web3",
    label: "Web3 / Smart Contract",
    category: "WEB3 · SMART CONTRACT",
    headline: "On-chain systems that hold under pressure.",
    description:
      "Solidity contracts written security-first — CEI patterns, reentrancy guards, audit-ready structure. DApp frontends with wagmi/viem.",
    features: [
      {
        title: "Contract security",
        desc: "CEI enforcement, ReentrancyGuard, RBAC, oracle safety, and Slither static analysis pre-deploy.",
      },
      {
        title: "EVM breadth",
        desc: "ERC-20/721/1155/4626, UUPS proxies, Foundry test suites, Base/Polygon/Arbitrum deployments.",
      },
      {
        title: "DApp integration",
        desc: "wagmi v2 + viem, wallet connection flows, on-chain reads/writes, and clean UX over complex state.",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    category: "E-COMMERCE",
    headline: "Storefronts built to move product.",
    description:
      "Custom storefronts and payment integrations — Paystack, Flutterwave, WhatsApp-first ordering, and cart experiences for Nigerian and global markets.",
    features: [
      {
        title: "Payment rails",
        desc: "Paystack (NGN), Flutterwave (multi-currency), crypto wallet integrations, and refund flows.",
      },
      {
        title: "Product experience",
        desc: "Clean catalogue layouts, fast filtering, variable options, and cart-to-checkout without friction.",
      },
      {
        title: "Market fit",
        desc: "WhatsApp ordering, mobile-first layout, and conversion patterns that work for Nigerian shoppers.",
      },
    ],
  },
];

export function Focus() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="focus" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Choose the build</span>
            <h2
              className="font-space-grotesk font-bold text-white leading-[1.1]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              See the focus.
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] font-dm-sans text-[15px] max-w-xs md:text-right leading-relaxed">
            Quick view of how I approach different project types.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-3 lg:gap-6">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`group relative text-left px-5 py-4 rounded-xl border transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${
                  active === tab.id
                    ? "border-[var(--accent-border)] bg-[rgba(207,97,40,0.06)]"
                    : "border-[rgba(255,255,255,0.05)] bg-transparent hover:border-[rgba(255,255,255,0.10)]"
                }`}
              >
                <span
                  className={`block font-space-grotesk font-semibold text-sm transition-colors duration-200 ${
                    active === tab.id
                      ? "text-white"
                      : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                  }`}
                >
                  {tab.label}
                </span>
                {active === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card rounded-2xl p-8 lg:p-10 h-full"
              >
                <span className="section-label">{current.category}</span>

                <h3
                  className="font-space-grotesk font-bold text-white mb-4 leading-[1.15]"
                  style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}
                >
                  {current.headline}
                </h3>

                <p className="text-[var(--text-secondary)] font-dm-sans text-[15px] leading-relaxed mb-10 max-w-xl">
                  {current.description}
                </p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {current.features.map((f) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 hover:border-[var(--accent-border)] transition-colors duration-300"
                    >
                      <p className="font-space-grotesk font-semibold text-white text-sm mb-2">
                        {f.title}
                      </p>
                      <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed font-dm-sans">
                        {f.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
