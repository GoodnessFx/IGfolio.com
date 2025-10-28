import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  demo?: string;
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Ruguard",
    description: "Security and risk management intelligence suite.",
    tags: ["React", "Tailwind"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    demo: "https://stalwart-zabaione-668b8b.netlify.app/",
  },
  {
    title: "G&G Procurement Service",
    description:
      "Leading procurement firm delivering strategic solutions, business development, and learning & development services across industries.",
    tags: ["React", "Tailwind", "Netlify"],
    gradient: "from-slate-700/40 to-zinc-900/40",
    demo: "https://helpful-gaufre-d1f4aa.netlify.app/",
    image: "/gg-procurement.jpg",
  },
  {
    title: "LockIn Web",
    description: "Platform for disciplined growth with focus tracking and analytics.",
    tags: ["React", "Tailwind"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    demo: "https://elaborate-sopapillas-8e17af.netlify.app/",
  },
  {
    title: "Tersor Concept",
    description: "Concept site showcasing innovative product design and branding.",
    tags: ["React", "Tailwind"],
    gradient: "from-purple-500/20 to-pink-500/20",
    demo: "https://gregarious-semifreddo-5d54f6.netlify.app/",
  },
  {
    title: "TrustCore",
    description: "Core banking and trust services interface prototype.",
    tags: ["React", "Tailwind"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    demo: "https://soft-taffy-8ff284.netlify.app/",
  },
  {
    title: "LIinkUp",
    description: "Social directory and connection hub.",
    tags: ["React", "Tailwind"],
    gradient: "from-indigo-500/20 to-blue-500/20",
    demo: "https://heartfelt-cupcake-160ed3.netlify.app/",
  },
  {
    title: "ProtocolPedia",
    description: "Knowledge base for web protocols and tooling.",
    tags: ["React", "Tailwind"],
    gradient: "from-green-500/20 to-emerald-500/20",
    demo: "https://sprightly-bubblegum-214dfc.netlify.app/",
  },
  {
    title: "Easy Build",
    description: "Quick scaffolding and build workflow demos.",
    tags: ["React", "Tailwind"],
    gradient: "from-orange-500/20 to-red-500/20",
    demo: "https://animated-fudge-b170c4.netlify.app/",
  },
  {
    title: "PassMint",
    description: "Credential and pass minting mockups.",
    tags: ["React", "Tailwind"],
    gradient: "from-rose-500/20 to-pink-500/20",
    demo: "https://stupendous-ganache-69d0b6.netlify.app/",
  },
  {
    title: "UpNext",
    description: "Roadmap and upcoming release showcase.",
    tags: ["React", "Tailwind"],
    gradient: "from-red-500/20 to-orange-500/20",
    demo: "https://prismatic-semolina-06ce40.netlify.app/",
  },
  {
    title: "SellForce",
    description: "Sales enablement and pipeline visualizations.",
    tags: ["React", "Tailwind"],
    gradient: "from-sky-500/20 to-blue-500/20",
    demo: "https://stately-marshmallow-e7e230.netlify.app/",
  },
  {
    title: "GlowUp",
    description: "Brand elevation and UI polish demos.",
    tags: ["React", "Tailwind"],
    gradient: "from-violet-500/20 to-purple-500/20",
    demo: "https://amazing-gelato-73aef8.netlify.app/",
  },
  {
    title: "AnyPay",
    description: "Payments experience prototypes.",
    tags: ["React", "Tailwind"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    demo: "https://resilient-quokka-e132a4.netlify.app/",
  },
  {
    title: "OffGrid",
    description: "Decentralized systems and offline-first demos.",
    tags: ["React", "Tailwind"],
    gradient: "from-lime-500/20 to-green-500/20",
    demo: "https://spectacular-sorbet-776fe2.netlify.app/",
  },
  {
    title: "Dapplify",
    description: "DApp interface patterns and libraries.",
    tags: ["React", "Tailwind"],
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    demo: "https://illustrious-arithmetic-5f5f9b.netlify.app/",
  },
  {
    title: "Recall",
    description: "Knowledge recall and spaced repetition demo.",
    tags: ["React", "Tailwind"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    demo: "https://darling-heliotrope-3ad90e.netlify.app/",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-zinc-500 mb-4 tracking-widest uppercase">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Featured projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.8) }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => {
                if (project.demo) {
                  window.open(project.demo, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-zinc-700">
                <div
                  className={`h-40 sm:h-48 relative overflow-hidden ${
                    project.image ? "bg-center bg-cover" : "bg-gradient-to-br"
                  } ${project.image ? "" : project.gradient}`}
                  style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-900/50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg sm:text-xl leading-tight">{project.title}</h3>
                    <div className="flex gap-1 opacity-100 flex-shrink-0 ml-2">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                          aria-label="View source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="p-2 rounded-lg opacity-40 cursor-not-allowed" aria-hidden>
                          <Github className="w-4 h-4" />
                        </span>
                      )}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                          aria-label="Open live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="p-2 rounded-lg opacity-40 cursor-not-allowed" aria-hidden>
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-zinc-800 rounded-full text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
