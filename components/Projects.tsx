import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    tags: ["React Native", "Firebase", "TypeScript"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and team collaboration features.",
    tags: ["Next.js", "Tailwind", "Chart.js"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Social Media Platform",
    description: "Real-time social networking platform with messaging, posts, and media sharing.",
    tags: ["React", "WebSockets", "MongoDB"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search filters, virtual tours, and mortgage calculators.",
    tags: ["Vue.js", "Express", "MySQL"],
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Online Learning Platform",
    description: "Educational platform with video courses, quizzes, progress tracking, and certification system.",
    tags: ["React", "Django", "Redis"],
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards, time tracking, and team chat.",
    tags: ["Angular", "NestJS", "PostgreSQL"],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Food Delivery App",
    description: "Mobile-first food ordering system with real-time tracking, ratings, and loyalty rewards.",
    tags: ["React Native", "GraphQL", "MongoDB"],
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Video Streaming Platform",
    description: "Netflix-style streaming service with personalized recommendations and adaptive quality.",
    tags: ["Next.js", "AWS", "DynamoDB"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling, telemedicine, and medical records.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    gradient: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Travel Booking System",
    description: "Comprehensive travel platform for flights, hotels, and activities with AI-powered suggestions.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Cryptocurrency Tracker",
    description: "Real-time crypto portfolio tracker with price alerts, news feed, and market analysis.",
    tags: ["React", "Node.js", "WebSockets"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Recipe Sharing App",
    description: "Social cooking platform where users share recipes, meal plans, and cooking videos.",
    tags: ["React Native", "Supabase", "TypeScript"],
    gradient: "from-lime-500/20 to-green-500/20",
  },
  {
    title: "Music Player App",
    description: "Spotify-like music streaming app with playlists, offline mode, and personalized stations.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management tool with budgeting, expense categorization, and insights.",
    tags: ["React", "Express", "SQLite"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Job Board Platform",
    description: "Professional networking and job search platform with resume builder and company reviews.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    gradient: "from-slate-500/20 to-zinc-500/20",
  },
  {
    title: "Weather Dashboard",
    description: "Comprehensive weather app with forecasts, radar maps, and severe weather alerts.",
    tags: ["React", "OpenWeather API", "Redis"],
    gradient: "from-blue-400/20 to-cyan-400/20",
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
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden h-full transition-all duration-300 hover:border-zinc-700">
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
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
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                      <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
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
