import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

interface FeaturedProject {
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  isPrivate?: boolean;
}

const featured: FeaturedProject[] = [
  {
    num: "01",
    category: "COMMUNITY · PLATFORM",
    name: "Growth Network",
    desc: "Operating system for small business growth — one platform combining software, design, automation, and operations. Client dashboard with live project tracking, social media scheduling, growth analytics, and CRM. Built on Supabase with row-level security and full multi-tenant isolation.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "OAuth"],
    liveUrl: "https://github.com/GoodnessFx/Growth-Network",
  },
  {
    num: "02",
    category: "WEB3 · EDUCATION",
    name: "ChainCodeCamp",
    desc: "Smart contract security education platform — structured path from EVM internals through Solidity mastery, Yul/assembly, Foundry testing, and protocol security. Built for developers who want to ship production-grade on-chain systems, not just pass tutorials.",
    tags: ["HTML", "JavaScript", "Vercel", "EVM", "Solidity", "Foundry"],
    liveUrl: "https://chain-code-camp.vercel.app/",
  },
  {
    num: "03",
    category: "CLIENT WORK · PROCUREMENT",
    name: "BuySmart Procurement",
    desc: "Client site with growth and social campaign support. Built to present procurement services clearly, drive direct enquiry conversion, and maintain a credible digital presence for enterprise outreach.",
    tags: ["React", "Tailwind CSS", "Vercel", "SEO"],
    liveUrl: "https://buysmartprocurement.com/",
  },
  {
    num: "04",
    category: "NONPROFIT · DONATION PLATFORM",
    name: "Prof. R.I.S. Agbede Foundation",
    desc: "Donation platform for a Nigeria-based educational foundation. Paystack for NGN giving, Flutterwave for USD international donations, and crypto wallet integration — built to remove friction from cross-border charitable giving across multiple currencies.",
    tags: ["React", "TypeScript", "Vite", "Paystack", "Flutterwave", "Crypto Wallet"],
    liveUrl: "https://professor-r-i-s-agbede-foundation.vercel.app/",
  },
  {
    num: "05",
    category: "E-COMMERCE · FASHION",
    name: "Vibe District",
    desc: "Premium streetwear e-commerce storefront — product showcase, streamlined ordering, and a strong branded shopping experience. Mobile-first, conversion-focused, built for real product movement.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://vibe-district.vercel.app/",
  },
  {
    num: "06",
    category: "WEB3 · BASE L2 · CAMPUS MARKETPLACE",
    name: "Grind",
    desc: "On-chain gig marketplace for Nigerian university students on Base L2. GrindEscrow locks cNGN until gig completion, GrindScore builds an immutable on-chain reputation from real work history, and GrindDID handles decentralised identity. Live streaming via LiveKit, Paystack fiat on-ramp.",
    tags: ["Solidity", "Base L2", "cNGN", "wagmi", "React", "Node.js", "Supabase", "LiveKit", "Paystack", "Foundry"],
    liveUrl: "https://github.com/GoodnessFx/Grind",
  },
  {
    num: "07",
    category: "BLOCKCHAIN · ANALYTICS · WEB3",
    name: "CryptoSkope",
    desc: "Institutional-grade crypto intelligence platform on Next.js 14. Real-time on-chain tracking via ethers.js, whale alert system for large-scale transfers, market sentiment analysis, and a professional portfolio tracker with USD valuations across the Theta Network ecosystem.",
    tags: ["Next.js 14", "ethers.js", "TypeScript", "TanStack Query", "Tailwind CSS", "Recharts", "shadcn/ui"],
    liveUrl: "https://github.com/GoodnessFx/CryptoSkope",
  },
  {
    num: "08",
    category: "ENTERPRISE · POS SYSTEM",
    name: "OLakanmbe Stores POS",
    desc: "Full wholesale POS system for a multi-branch retail operation. Node/Express/PostgreSQL backend, React frontend, multi-role auth (admin, cashier, manager), tiered pricing engine, and cross-branch sales reporting.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Multi-role Auth", "Reporting"],
    isPrivate: true,
  },
  {
    num: "09",
    category: "AI · PERSONAL OPERATOR · PWA",
    name: "TOBI",
    desc: "Personal AI operator with persistent memory — knows your projects, goals, and context across every session without being re-briefed. Multi-tier LLM routing, agentic tool-calling, proactive reminders in your own voice, and a dev mode built for engineers. Ships as a PWA with offline support.",
    tags: ["React", "TypeScript", "PWA", "ChromaDB", "Claude API", "SQLite", "Vite"],
    liveUrl: "https://github.com/GoodnessFx/Tobi",
  },
];

// ── Single project row ────────────────────────────────────────────────────────
function ProjectRow({ project, index }: { project: FeaturedProject; index: number }) {
  const href = project.liveUrl ?? "#";
  const hasLink = !!href && href !== "#" && !project.isPrivate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-[72px_1fr_auto] gap-y-4 md:gap-x-8 items-start py-10 border-b border-[rgba(255,255,255,0.05)] hover:border-[rgba(207,97,40,0.22)] transition-colors duration-300">

        {/* Number */}
        <span className="font-jetbrains text-[var(--text-dim)] text-sm font-medium pt-1 select-none">
          {project.num}
        </span>

        {/* Body */}
        <div className="space-y-4">
          <div>
            <span className="section-label mb-2">{project.category}</span>
            <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl group-hover:text-[var(--accent)] transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          <p className="text-[var(--text-secondary)] font-dm-sans text-[15px] leading-relaxed max-w-2xl">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>

        {/* Link */}
        <div className="flex items-center pt-1">
          {project.isPrivate ? (
            <span className="flex items-center gap-2 text-[var(--text-dim)] text-xs font-dm-sans">
              <Lock size={13} />
              Client work
            </span>
          ) : hasLink ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 text-sm font-dm-sans group/link whitespace-nowrap"
              aria-label={`View ${project.name}`}
            >
              {href.includes("github.com") ? "View repo" : "View live"}
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.10)] flex items-center justify-center group-hover/link:border-[var(--accent)] group-hover/link:bg-[var(--accent-dim)] transition-all duration-300">
                <ArrowUpRight size={14} />
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section id="projects" className="py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4"
        >
          <div>
            <span className="section-label">Selected Projects</span>
            <h2
              className="font-space-grotesk font-bold text-white leading-[1.1]"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Selected build experience.
            </h2>
          </div>

          <a
            href="mailto:goodnessiyamah1@gmail.com?subject=Project%20Details%20Request"
            className="btn-ghost self-start md:self-auto whitespace-nowrap"
          >
            Request Project Details
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div>
          {featured.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
