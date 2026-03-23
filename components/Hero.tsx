import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef, useMemo } from "react";
import { projects } from "../data/projects";

// X (formerly Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Counter = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-3xl md:text-4xl font-bold text-white font-space-grotesk">
        {count}{value.includes("+") ? "+" : value.includes("%") ? "%" : ""}
      </span>
      <span className="text-[11px] uppercase tracking-widest text-[var(--text-dim)] mt-1 font-dm-sans">
        {label}
      </span>
    </div>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const projectsCount = projects.length;
  const chainsCount = useMemo(() => {
    const allChains = projects.flatMap(p => p.chains || []);
    return new Set(allChains).size || 3; // Fallback to 3 if none found
  }, []);

  const headline = "With a Passion to build what is needed";
  const words = headline.split(" ");

  const socialLinks = [
    { icon: Github, href: "https://github.com/GoodnessFx", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XIcon, href: "https://x.com/IGoodnessIyamah", label: "X" },
    { icon: Mail, href: "mailto:goodnessiyamah1@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[var(--bg-primary)]">
      <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] font-dm-sans tracking-[0.15em] text-[var(--accent)] mb-6 uppercase">
            Smart Contract Engineer · EVM · Solidity · DeFi
          </span>
        </motion.div>

        <h1 className="text-[clamp(42px,6.5vw,82px)] leading-[1.1] mb-8 font-space-grotesk font-bold text-white max-w-4xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className={`inline-block mr-[0.3em] ${
                word.toLowerCase() === "needed" ? "text-[var(--accent)]" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[17px] text-[var(--text-secondary)] max-w-[600px] mb-12 leading-relaxed font-dm-sans"
        >
          Developing seamless Web3 solutions with precision, performance, and purpose — 
          <span className="block mt-4 italic text-[var(--text-primary)]">
            "To see how much of a footprint I can leave behind on Earth before I leave."
          </span>
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12 w-full max-w-2xl">
          <Counter value={`${projectsCount}+`} label="Projects Shipped" />
          <Counter value={`${chainsCount}+`} label="Chains Deployed" />
          <Counter value="6" label="Industries Disrupted" />
          <Counter value="100%" label="Security-First" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a href="/IG_Cv.pdf" download className="btn-ghost">
            <Download size={18} />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-white hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-40 flex flex-col items-center cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
