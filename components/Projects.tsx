import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { otherProjects, Project, websiteProjects, web3Projects } from "../data/projects";

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: Project; 
  index: number 
}) => {
  const href = project.liveUrl || project.githubUrl || "#";
  const hasExternalTarget = href !== "#";

  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      href={href}
      target={hasExternalTarget ? "_blank" : undefined}
      rel={hasExternalTarget ? "noopener noreferrer" : undefined}
      className="group relative block bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:-translate-y-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {/* Gradient Thumbnail */}
      <div 
        className="h-[180px] w-full rounded-t-xl"
        style={{ background: project.gradient }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-white font-space-grotesk group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[var(--text-dim)] font-dm-sans">
              <ExternalLink size={12} />
              {project.liveUrl ? "Live Site" : "Project Link"}
            </p>
          </div>
          <ArrowUpRight size={18} className="text-[var(--text-dim)] transition-colors duration-300 group-hover:text-[var(--accent)]" />
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-6 font-dm-sans leading-relaxed min-h-[72px]">
          {project.desc}
        </p>

        <div className="mb-3">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-dim)] font-dm-sans">
            Tech Stack
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tag-pill text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const ProjectGroup = ({
  title,
  intro,
  projects,
  offset = 0,
}: {
  title: string;
  intro: string;
  projects: Project[];
  offset?: number;
}) => (
  <div className="space-y-8">
    <div className="max-w-3xl">
      <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] font-dm-sans">{intro}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.name} project={project} index={offset + i} />
      ))}
    </div>
  </div>
);

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">Selected work</h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-[var(--text-secondary)] font-dm-sans">
            My website work comes first here, followed by Web3 and smart contract builds, then a few other product experiments.
          </p>
        </motion.div>

        <div className="space-y-20">
          <ProjectGroup
            title="Website Development"
            intro="Client-facing websites and product marketing builds, ordered to highlight commercial web development first."
            projects={websiteProjects}
          />

          <ProjectGroup
            title="Web3 & Smart Contracts"
            intro="Smart contract and Web3 product work with Solidity, EVM tooling, and full-stack dApp interfaces."
            projects={web3Projects}
            offset={websiteProjects.length}
          />

          <ProjectGroup
            title="Other Projects"
            intro="Additional AI, product, and research builds that show range beyond websites and Web3."
            projects={otherProjects}
            offset={websiteProjects.length + web3Projects.length}
          />
        </div>
      </div>
    </section>
  );
}
