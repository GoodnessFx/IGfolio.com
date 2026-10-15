import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Search, 
  LayoutGrid, 
  ListFilter, 
  Lock, 
  Github, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Sparkles,
  Globe,
  Cpu
} from "lucide-react";
import { 
  Project, 
  topFourProjects,
  additionalMainProjects,
  secondaryProjects,
  allCuratedProjects 
} from "../data/projects";

type CategoryFilter = "all" | "website" | "web3" | "other";
type ViewMode = "spotlight" | "matrix";

// ── The Editorial Showcase Row (From User's Screenshot with Underscore Divider) ─
function FeaturedShowcaseRow({ project, num }: { project: Project; num: string }) {
  const href = project.liveUrl || project.githubUrl || "#";
  const hasLink = !!href && href !== "#" && !project.isPrivate;
  const isGitHub = !project.liveUrl && !!project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="group relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-[72px_1fr_auto] gap-y-4 md:gap-x-8 items-start py-10 border-b border-[rgba(255,255,255,0.06)] hover:border-[rgba(207,97,40,0.30)] transition-colors duration-300">
        
        {/* Number Badge */}
        <span className="font-jetbrains text-[var(--text-dim)] text-sm font-medium pt-1 select-none group-hover:text-[var(--accent)] transition-colors">
          {num}
        </span>

        {/* Body Content */}
        <div className="space-y-3.5">
          <div>
            <span className="section-label mb-2 text-xs">{project.category}</span>
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

        {/* Link / Action */}
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
              <span>{isGitHub ? "View repo" : "View live"}</span>
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center group-hover/link:border-[var(--accent)] group-hover/link:bg-[var(--accent-dim)] transition-all duration-300">
                <ArrowUpRight size={14} />
              </span>
            </a>
          ) : null}
        </div>

      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("spotlight");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Pool of all projects below the top 4
  const additionalPool = useMemo(() => {
    return [...additionalMainProjects, ...secondaryProjects];
  }, []);

  const ITEMS_PER_PAGE = 4;

  // Filter projects by category and search
  const filteredAdditional = useMemo(() => {
    let list: Project[] = additionalPool;
    if (activeCategory === "website") {
      list = additionalPool.filter((p) => p.section === "website");
    } else if (activeCategory === "web3") {
      list = additionalPool.filter((p) => p.section === "web3");
    } else if (activeCategory === "other") {
      list = additionalPool.filter((p) => p.section === "other");
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list.filter((p) => {
      const matchName = p.name.toLowerCase().includes(query);
      const matchCategory = p.category?.toLowerCase().includes(query);
      const matchDesc = p.desc.toLowerCase().includes(query);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(query));
      const matchChains = p.chains?.some((c) => c.toLowerCase().includes(query));
      return matchName || matchCategory || matchDesc || matchTags || matchChains;
    });
  }, [additionalPool, activeCategory, searchQuery]);

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredAdditional.length / ITEMS_PER_PAGE);
  const paginatedAdditional = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return filteredAdditional.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAdditional, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const marqueeBrands = [
    "DABZ Global",
    "Blindy Choice",
    "Souledia",
    "Affordable One Stop Cars",
    "Arrisitao App",
    "EasyOwn",
    "Export Trade Africa",
    "Sahn Plumbing",
    "365 Fashion for Africa",
    "Drip Community",
    "VIBRANIUM",
    "SHERLOCK",
    "LockIn",
    "AnyPay",
    "UpNext",
    "Grind",
    "Hamdan Integrated Services",
    "Goodman & Goldsmith",
    "Vibe District",
    "TOBI",
  ];

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      
      {/* Background glow blob */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(207,97,40,0.18) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── Section Header ── */}
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

        {/* ── The First 4 Headline Projects (Exact rows with underscore dividers) ── */}
        <div className="mb-20">
          {topFourProjects.map((project, idx) => {
            const num = (idx + 1).toString().padStart(2, "0");
            return <FeaturedShowcaseRow key={project.name} project={project} num={num} />;
          })}
        </div>

        {/* ── Additional Commercial Websites & Systems Section (Compact & Creative) ── */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)]">
          
          {/* Brand Marquee Ticker */}
          <div className="mb-10 overflow-hidden py-3 border-y border-[rgba(255,255,255,0.06)] bg-[rgba(26,24,22,0.45)] backdrop-blur-md rounded-2xl">
            <div className="flex items-center gap-3 px-4 mb-2 text-[10px] uppercase font-jetbrains tracking-wider text-[var(--text-dim)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Commercial Websites &amp; Systems Catalog · Click to filter</span>
            </div>
            <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
              {[...marqueeBrands, ...marqueeBrands].map((brand, idx) => (
                <button
                  key={`${brand}-${idx}`}
                  onClick={() => {
                    setSearchQuery(brand);
                    const found = allCuratedProjects.find(
                      (p) => p.name.toLowerCase() === brand.toLowerCase()
                    );
                    if (found) setSelectedProject(found);
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-dm-sans bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-border)] hover:bg-[var(--accent-dim)] transition-all shrink-0 cursor-pointer"
                >
                  <Sparkles size={11} className="text-[var(--accent)]" />
                  <span>{brand}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subheading & Metrics */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="section-label mb-2">Extended Catalog</span>
              <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl">
                More client storefronts &amp; full-stack systems.
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] font-dm-sans max-w-xl">
                Explore additional commercial e-commerce websites, emergency services, trade portals, and multi-agent AI tools.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="glass-card px-3.5 py-2 rounded-xl border border-[rgba(255,255,255,0.08)] flex items-center gap-2.5">
                <Globe size={16} className="text-[var(--accent)]" />
                <span className="text-xs font-space-grotesk text-white font-bold">{additionalPool.filter(p => p.section === "website").length} Client Sites</span>
              </div>
              <div className="glass-card px-3.5 py-2 rounded-xl border border-[rgba(255,255,255,0.08)] flex items-center gap-2.5">
                <Cpu size={16} className="text-[var(--accent)]" />
                <span className="text-xs font-space-grotesk text-white font-bold">{additionalPool.filter(p => p.section !== "website").length} Web3 &amp; AI</span>
              </div>
            </div>
          </div>

          {/* Filter Bar & View Toggle */}
          <div className="glass-card p-2 md:p-3 rounded-2xl border border-[rgba(255,255,255,0.08)] mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-dm-sans transition-all shrink-0 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[var(--accent)] text-white font-medium shadow-md shadow-[rgba(207,97,40,0.3)]"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                All Builds ({additionalPool.length})
              </button>
              <button
                onClick={() => setActiveCategory("website")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-dm-sans transition-all shrink-0 cursor-pointer ${
                  activeCategory === "website"
                    ? "bg-[var(--accent)] text-white font-medium shadow-md shadow-[rgba(207,97,40,0.3)]"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Websites &amp; Brands ({additionalPool.filter(p => p.section === "website").length})
              </button>
              <button
                onClick={() => setActiveCategory("web3")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-dm-sans transition-all shrink-0 cursor-pointer ${
                  activeCategory === "web3"
                    ? "bg-[var(--accent)] text-white font-medium shadow-md shadow-[rgba(207,97,40,0.3)]"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Web3 Protocols ({additionalPool.filter(p => p.section === "web3").length})
              </button>
              <button
                onClick={() => setActiveCategory("other")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-dm-sans transition-all shrink-0 cursor-pointer ${
                  activeCategory === "other"
                    ? "bg-[var(--accent)] text-white font-medium shadow-md shadow-[rgba(207,97,40,0.3)]"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                AI &amp; Mobile Apps ({additionalPool.filter(p => p.section === "other").length})
              </button>
            </div>

            {/* Right Tools: Search & Mode Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-56">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
                <input
                  type="text"
                  placeholder="Filter by brand, stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[rgba(20,18,16,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl pl-8 pr-7 py-1.5 text-xs text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] transition-all font-dm-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-white"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              <div className="flex items-center bg-[rgba(20,18,16,0.8)] border border-[rgba(255,255,255,0.08)] rounded-xl p-0.5 shrink-0">
                <button
                  onClick={() => setViewMode("spotlight")}
                  title="Card Deck View"
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "spotlight"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--text-dim)] hover:text-white"
                  }`}
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setViewMode("matrix")}
                  title="Directory Matrix View"
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "matrix"
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "text-[var(--text-dim)] hover:text-white"
                  }`}
                >
                  <ListFilter size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* View Mode A: Spotlight Card Deck (Fixed Height & Paginated) */}
          {viewMode === "spotlight" && (
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${currentPage}-${searchQuery}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {paginatedAdditional.length === 0 ? (
                    <div className="col-span-2 py-12 text-center border border-dashed border-[rgba(255,255,255,0.1)] rounded-2xl">
                      <p className="text-[var(--text-secondary)] font-dm-sans text-sm">
                        No matching projects found for "{searchQuery}".
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("all");
                        }}
                        className="mt-3 text-xs text-[var(--accent)] hover:underline font-dm-sans cursor-pointer"
                      >
                        Clear search filters
                      </button>
                    </div>
                  ) : (
                    paginatedAdditional.map((project) => {
                      const isLive = !!project.liveUrl;
                      const isGitHub = !project.liveUrl && !!project.githubUrl;

                      return (
                        <div
                          key={project.name}
                          className="group glass-card rounded-2xl border border-[rgba(255,255,255,0.07)] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-xl hover:shadow-[rgba(207,97,40,0.06)] relative overflow-hidden"
                        >
                          <div 
                            className="absolute inset-x-0 top-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
                            style={{ background: project.gradient }}
                          />

                          <div>
                            <div className="flex items-center justify-between gap-3 mb-3">
                              <span className="text-[11px] font-jetbrains text-[var(--accent)] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--accent-dim)] border border-[rgba(207,97,40,0.2)]">
                                {project.category}
                              </span>

                              <div className="flex items-center gap-2">
                                {project.isPrivate ? (
                                  <span className="flex items-center gap-1 text-[11px] font-dm-sans text-[var(--text-dim)]">
                                    <Lock size={12} />
                                    Private
                                  </span>
                                ) : isLive ? (
                                  <span className="flex items-center gap-1.5 text-[11px] font-dm-sans text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Live Site
                                  </span>
                                ) : isGitHub ? (
                                  <span className="flex items-center gap-1.5 text-[11px] font-dm-sans text-[var(--text-secondary)]">
                                    <Github size={12} />
                                    Public Repo
                                  </span>
                                ) : null}
                              </div>
                            </div>

                            <h4 
                              onClick={() => setSelectedProject(project)}
                              className="text-xl md:text-2xl font-bold font-space-grotesk text-white group-hover:text-[var(--accent)] transition-colors cursor-pointer flex items-center gap-2"
                            >
                              <span>{project.name}</span>
                              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all text-[var(--accent)] shrink-0" />
                            </h4>

                            <p className="mt-2 text-sm text-[var(--text-secondary)] font-dm-sans leading-relaxed line-clamp-3">
                              {project.desc}
                            </p>
                          </div>

                          <div className="pt-5 mt-4 border-t border-[rgba(255,255,255,0.05)]">
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.tags.slice(0, 4).map((tag) => (
                                <span key={tag} className="tag-pill text-[11px] py-0.5 px-2.5">
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 4 && (
                                <span className="text-[10px] text-[var(--text-dim)] font-jetbrains self-center">
                                  +{project.tags.length - 4}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center justify-between gap-3 pt-1">
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="text-xs text-[var(--text-secondary)] hover:text-white font-dm-sans flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <span>Specs &amp; Details</span>
                                <ChevronRight size={13} />
                              </button>

                              <div className="flex items-center gap-2">
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[rgba(255,255,255,0.25)] transition-colors"
                                    aria-label={`GitHub repo for ${project.name}`}
                                  >
                                    <Github size={14} />
                                  </a>
                                )}
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm-sans font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-all shadow-sm"
                                    aria-label={`Visit live site for ${project.name}`}
                                  >
                                    <span>Visit Site</span>
                                    <ExternalLink size={12} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-xs font-jetbrains text-[var(--text-dim)]">
                    Showing {currentPage * ITEMS_PER_PAGE + 1}–
                    {Math.min((currentPage + 1) * ITEMS_PER_PAGE, filteredAdditional.length)} of {filteredAdditional.length} projects
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                      className="p-2 rounded-xl border border-[rgba(255,255,255,0.08)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(255,255,255,0.2)] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            currentPage === i
                              ? "w-6 bg-[var(--accent)]"
                              : "w-1.5 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]"
                          }`}
                          aria-label={`Go to page ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage >= totalPages - 1}
                      className="p-2 rounded-xl border border-[rgba(255,255,255,0.08)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(255,255,255,0.2)] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      aria-label="Next page"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* View Mode B: Directory Matrix (Scroll-Capped & Dense) */}
          {viewMode === "matrix" && (
            <div className="glass-card rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden">
              <div className="grid grid-cols-[56px_1fr_auto] md:grid-cols-[64px_220px_1fr_160px] gap-4 px-5 py-3.5 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(20,18,16,0.8)] text-[11px] font-jetbrains text-[var(--text-dim)] uppercase tracking-wider">
                <span>#</span>
                <span>Project / Domain</span>
                <span className="hidden md:block">Architecture &amp; Tech Stack</span>
                <span className="text-right">Actions</span>
              </div>

              <div className="max-h-[500px] overflow-y-auto divide-y divide-[rgba(255,255,255,0.04)] no-scrollbar">
                {filteredAdditional.map((project, idx) => {
                  const num = (idx + 5).toString().padStart(2, "0");
                  const isLive = !!project.liveUrl;

                  return (
                    <div
                      key={project.name}
                      className="grid grid-cols-[56px_1fr_auto] md:grid-cols-[64px_220px_1fr_160px] gap-4 px-5 py-4 items-center hover:bg-[rgba(255,255,255,0.02)] transition-colors group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span className="font-jetbrains text-xs text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">
                        {num}
                      </span>

                      <div>
                        <div className="font-space-grotesk font-bold text-white text-[15px] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                          <span>{project.name}</span>
                          {isLive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" title="Live Site" />
                          )}
                        </div>
                        <div className="text-[11px] font-jetbrains text-[var(--text-dim)]">
                          {project.category}
                        </div>
                      </div>

                      <div className="hidden md:block pr-4">
                        <p className="text-xs text-[var(--text-secondary)] font-dm-sans line-clamp-1 mb-1.5">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] font-jetbrains px-2 py-0.5 rounded bg-[rgba(255,255,255,0.03)] text-[var(--text-dim)] border border-[rgba(255,255,255,0.04)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                            title="View Repository"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-dm-sans text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-all shadow-sm"
                          >
                            <span>Live</span>
                            <ArrowUpRight size={13} />
                          </a>
                        ) : project.isPrivate ? (
                          <span className="flex items-center gap-1 text-[11px] font-dm-sans text-[var(--text-dim)] px-2 py-1">
                            <Lock size={12} />
                            Client
                          </span>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(20,18,16,0.9)] text-[11px] font-jetbrains text-[var(--text-dim)]">
                <span>Showing {filteredAdditional.length} additional systems</span>
                <span className="text-[var(--accent)]">● Verified Deployments</span>
              </div>
            </div>
          )}

        </div>

        {/* ── Interactive Project Details Modal / Drawer ── */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[rgba(255,255,255,0.12)] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 z-10"
              >
                <div 
                  className="h-2.5 w-full"
                  style={{ background: selectedProject.gradient }}
                />

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-jetbrains text-[var(--accent)] uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-dim)] border border-[rgba(207,97,40,0.25)]">
                        {selectedProject.category}
                      </span>
                      {selectedProject.liveUrl && (
                        <span className="flex items-center gap-1.5 text-xs font-dm-sans text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Live Production
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-white transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white mb-4">
                    {selectedProject.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-jetbrains uppercase tracking-wider text-[var(--text-dim)]">
                      System Architecture &amp; Delivery
                    </h4>
                    <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-dm-sans">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {selectedProject.chains && selectedProject.chains.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-jetbrains uppercase tracking-wider text-[var(--text-dim)] mb-2">
                        Supported Chains &amp; Networks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.chains.map((chain) => (
                          <span
                            key={chain}
                            className="text-xs font-jetbrains px-3 py-1 rounded-full bg-[rgba(207,97,40,0.08)] text-[var(--accent-light)] border border-[rgba(207,97,40,0.25)]"
                          >
                            {chain}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-xs font-jetbrains uppercase tracking-wider text-[var(--text-dim)] mb-2.5">
                      Core Technologies &amp; Tooling
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="tag-pill text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-center gap-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2.5 px-5 text-xs"
                        >
                          <span>Open Live Project</span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost py-2.5 px-5 text-xs"
                        >
                          <Github size={14} />
                          <span>View Repository</span>
                        </a>
                      )}
                    </div>

                    <a
                      href={`mailto:goodnessiyamah1@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProject.name)}`}
                      className="text-xs text-[var(--accent)] hover:underline font-dm-sans"
                    >
                      Request Architecture Deep Dive →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
