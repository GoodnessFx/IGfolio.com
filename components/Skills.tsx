import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Zap, Layers, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "JavaScript, TypeScript, React.js, React Native",
  },
  {
    icon: Database,
    title: "Backend & Blockchain",
    description: "Node.js, Solidity, Ethers.js, Hardhat",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, iOS, Android, WAGMI + RainbowKit",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Lazy Loading, Caching",
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Scalable Systems, Clean Code",
  },
  {
    icon: Globe,
    title: "Soft Skills",
    description: "Collaboration, Research, Teamwork, Ownership, Critical Thinking, Learning Mindset",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-zinc-500 mb-4 tracking-widest uppercase">
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-zinc-700">
                <div className="mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl mb-2">{skill.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
