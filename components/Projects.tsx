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
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "OAuth"],
    liveUrl: "https://growth-network.pxxlspace.cv/",
  },
  {
    num: "02",
    category: "WEB3 · EDUCATION",
    name: "ChainCodeCamp",
    desc: "Smart contract security education platform built around a 10-section audit training curriculum, structured after Cyfrin-style, hands-on EVM security teaching. Covers EVM internals, Solidity mastery, Yul/assembly, Foundry testing, and protocol security end to end.",
    tags: ["Next.js", "Supabase", "MDX", "Solidity", "Foundry"],
    liveUrl: "https://chain-code-camp.vercel.app/",
  },
  {
    num: "03",
    category: "CLIENT · PROCUREMENT",
    name: "BuySmart Procurement",
    desc: "Website and digital growth system for a Lagos procurement and logistics company. Built around a certification and proof-of-work angle that shortened the buyer decision cycle — organic traffic to direct inquiry.",
    tags: ["React", "Vite", "Tailwind CSS", "SEO"],
    liveUrl: "https://buysmartprocurement.com/",
  },
  {
    num: "04",
    category: "NONPROFIT · DONATION PLATFORM",
    name: "Prof. R.I.S. Agbede Foundation",
    desc: "Non-profit website with integrated donation flows across Paystack, Flutterwave, and crypto rails — giving the foundation a single trusted place to receive support from NGN, USD, and crypto donors worldwide.",
    tags: ["React", "Paystack", "Flutterwave", "Crypto Wallet"],
    liveUrl: "https://prisafoundation.org/",
  },
  {
    num: "05",
    category: "CLIENT · EXPORT TRADE",
    name: "Hamdan Integrated Services",
    desc: "Production website for an import/export trading company, built to convert organic search traffic into direct buyer inquiries. Clean information architecture, SEO-first structure, and a credibility-first layout.",
    tags: ["React", "Tailwind CSS", "SEO", "Vercel"],
    liveUrl: "http://www.hamdanexport.com/",
  },
  {
    num: "06",
    category: "CLIENT · CORPORATE",
    name: "Goodman & Goldsmith",
    desc: "Company website built and deployed end to end — React frontend through hosting and deployment. Clean brand presentation, professional layout, and production-ready delivery.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.goodmanandgoldsmith.com/",
  },
  {
    num: "07",
    category: "WEB3 · BASE L2 · CAMPUS MARKETPLACE",
    name: "Grind",
    desc: "On-chain escrow campus gig marketplace on Base L2, with cNGN payments and on-chain reputation via GrindScore and GrindDID smart contracts. Every gig completed builds an immutable work history — a verifiable on-chain resume for Nigerian university students.",
    tags: ["Solidity", "Base L2", "cNGN", "wagmi", "React", "TypeScript", "Supabase", "Foundry"],
    liveUrl: "https://grind-server.vercel.app/",
  },
  {
    num: "08",
    category: "E-COMMERCE · FASHION",
    name: "Vibe District",
    desc: "Premium streetwear e-commerce storefront — product showcase, streamlined ordering, and a strong branded shopping experience. Mobile-first, conversion-focused, built for real product movement.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://vibe-district.vercel.app/",
  },
  {
    num: "09",
    category: "ENTERPRISE · POS SYSTEM",
    name: "OLakanmbe Stores POS",
    desc: "Full wholesale POS system for a multi-branch retail operation. Node/Express/PostgreSQL backend, React frontend, multi-role auth (admin, cashier, manager), tiered pricing engine, and cross-branch sales reporting.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Multi-role Auth"],
    isPrivate: true,
  },
  {
    num: "10",
    category: "AI · PERSONAL OPERATOR · PWA",
    name: "TOBI",
    desc: "Personal AI assistant that connects to a user's work and personal life to remember context and actively assist day to day. Developer mode turns it into an in-context coding companion. Persistent memory across sessions, multi-tier LLM routing, and agentic tool-calling.",
    tags: ["React", "Vite", "Hono", "Supabase", "Claude API", "TypeScript"],
    liveUrl: "https://github.com/GoodnessFx/Tobi",
  },
];

// ── Single project row ────────────────────────────────────────────────────────
function ProjectRow({ project, index }: { project: FeaturedProject; index: number }) {
  const href = project.liveUrl ?? "#";
  const hasLink = !!href && href !== "#" && !project.isPrivate;
  const isGitHub = href.includes("github.com");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
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
              {isGitHub ? "View repo" : "View live"}
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
