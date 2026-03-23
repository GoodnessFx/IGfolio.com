import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[var(--bg-primary)] border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--text-dim)] text-xs font-medium font-dm-sans"
          >
            © 2025 Goodness Iyamah · Lagos, Nigeria
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/GoodnessFx", label: "GitHub" },
                { icon: XIcon, href: "https://x.com/IGoodnessIyamah", label: "X" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:goodnessiyamah1@gmail.com", label: "Email" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-dim)] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
