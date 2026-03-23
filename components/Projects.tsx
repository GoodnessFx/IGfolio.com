import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, Project } from "../data/projects";

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: Project; 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:-translate-y-1 shadow-sm"
    >
      {/* Gradient Thumbnail */}
      <div 
        className="h-[180px] w-full rounded-t-xl"
        style={{ background: project.gradient }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-white font-space-grotesk group-hover:text-[var(--accent)] transition-colors">
            {project.name}
          </h3>
          <div className="flex gap-3">
            <a href={project.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[var(--text-dim)] hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[var(--text-dim)] hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-6 font-dm-sans leading-relaxed min-h-[40px]">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tag-pill text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">What I've shipped</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
