import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs sm:text-sm text-zinc-500 mb-4 tracking-widest uppercase">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 tracking-tight">
              Turning ideas into reality
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-400">
              <p>
                I'm a mobile and web developer with a passion for creating exceptional digital experiences. 
                My focus is on writing clean, efficient code that solves real problems.
              </p>
              <p>
                With expertise across the full stack, I specialize in building responsive web applications 
                and native mobile solutions that users love.
              </p>
              <p>
                Every project is an opportunity to push boundaries and deliver work that exceeds expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
