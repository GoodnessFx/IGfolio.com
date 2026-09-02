import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

// ── Core featured projects from the brief ────────────────────────────────────
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
    category: "COMMUNITY · GROWTH",
    name: "Growth Network",
    desc: "Nigeria-focused builder community and resource network connecting developers, creatives, and founders across Africa's tech ecosystem. Built to lower the barrier to entry for anyone serious about shipping real products.",
    tags: ["React", "TypeScript", "Supabase", "Community"],
    isPrivate: true,
  },
  {
    num: "02",
    category: "WEB3 · EDUCATION",
    name: "ChainCodeCamp",
    desc: "Smart contract security education platform — interactive curriculum, concept glossary, and structured learning flow for developers entering EVM development. Built to be the resource I wished existed when learning Solidity.",
    tags: ["HTML", "JavaScript", "Interactive Learning", "Vercel"],
    liveUrl: "https://chain-code-camp.vercel.app/",
  },
  {
    num: "03",
    category: "CLIENT WORK · PROCUREMENT",
    name: "BuySmart Procurement",
    desc: "Client site with growth and social campaign support. Built to present procurement services clearly, support direct enquiry conversion, and maintain a credible digital presence for enterprise outreach.",
    tags: ["React", "Tailwind", "Vercel", "SEO"],
    isPrivate: true,
  },
  {
    num: "04",
    category: "NONPROFIT · DONATION PLATFORM",
    name: "Prof. R.I.S. Agbede Foundation",
    desc: "Full donation platform for a Nigeria-based educational foundation. Integrated Paystack for NGN giving, Flutterwave for USD international donations, and crypto wallet support. Built to remove friction from cross-border charitable giving.",
    tags: ["React", "TypeScript", "Vite", "Paystack", "Flutterwave", "Crypto Wallet"],
    liveUrl: "https://professor-r-i-s-agbede-foundation.vercel.app/",
  },
  {
    num: "05",
    category: "E-COMMERCE · FASHION",
    name: "Vibe District",
    desc: "Premium streetwear e-commerce storefront built to showcase products, streamline ordering, and deliver a strong branded online shopping experience. Mobile-first, conversion-focused layout.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://vibe-district.vercel.app/",
  },
  {
    num: "06",
    category: "ENTERPRISE · POS SYSTEM",
    name: "OLakanmbe Stores POS",
    desc: "Full wholesale POS system for a multi-branch retail operation. Node/Express/PostgreSQL backend with a React frontend, multi-role authentication (admin, cashier, manager), tiered pricing engine, and multi-branch sales reporting across locations.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Multi-role Auth", "Reporting"],
    isPrivate: true,
  },
  {
    num: "07",
    category: "AI · PWA · DEVELOPER TOOL",
    name: "TOBI",
    desc: "Developer-first personal AI companion app with a dev/personal mode toggle. Built as a PWA for offline-capable access. Work in progress — designed around fast iteration and context-aware assistance.",
    tags: ["React", "TypeScript", "PWA", "AI", "Vite"],
    liveUrl: "https://github.com/GoodnessFx/Tobi",
  },
];

// ── Single project row ────────────────────────────────────────────────────────
function ProjectRow({ project, index }: { project: FeaturedProject; index: number }) {
  const href = project.liveUrl ?? "#";
  const hasLink = href !== "#" && !project.isPrivate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
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
              <span key={tag} className="tag-pill">
                {tag}
              </span>
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
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 text-sm font-dm-sans group/link"
              aria-label={`View ${project.name}`}
            >
              View live
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover/link:border-[var(--accent)] group-hover/link:bg-[var(--accent-dim)] transition-all duration-300">
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
        {/* Header */}
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

        {/* Project list */}
        <div>
          {featured.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
