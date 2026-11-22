import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { XIcon, GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

const navLinks = [
  { name: "Work",     id: "projects" },
  { name: "Process",  id: "process"  },
  { name: "Services", id: "services" },
  { name: "About",    id: "about"    },
  { name: "Contact",  id: "contact"  },
];

const connectLinks = [
  { name: "Email",    href: "mailto:goodnessiyamah1@gmail.com" },
  { name: "WhatsApp", href: "https://wa.me/2348072027335"       },
  { name: "Direct Call", href: "tel:+2348072027335"            },
  { name: "X",        href: "https://x.com/IGoodnessIyamah",   icon: XIcon        },
  { name: "LinkedIn", href: "https://linkedin.com/in/goodnessiyamah", icon: LinkedInIcon },
  { name: "GitHub",   href: "https://github.com/GoodnessFx",   icon: GitHubIcon   },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 pb-12 border-b border-[rgba(255,255,255,0.05)]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-sm"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-space-grotesk font-bold text-3xl tracking-tight text-[var(--accent)]"
              aria-label="Back to top"
            >
              IG
            </button>
            <p className="text-[var(--text-secondary)] font-dm-sans text-sm leading-relaxed">
              Full stack developer and Web3 builder from Lagos, Nigeria, building websites, SaaS products, and smart contracts.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: "https://x.com/IGoodnessIyamah", Icon: XIcon,        label: "X"        },
                { href: "https://github.com/GoodnessFx",  Icon: GitHubIcon,   label: "GitHub"   },
                { href: "https://linkedin.com/in/goodnessiyamah", Icon: LinkedInIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[var(--text-dim)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-[10px] font-jetbrains uppercase tracking-[0.16em] text-[var(--accent)] mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 font-dm-sans"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <p className="text-[10px] font-jetbrains uppercase tracking-[0.16em] text-[var(--accent)] mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 font-dm-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[var(--text-dim)] font-dm-sans">
            © 2026 Goodness Iyamah. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)] font-dm-sans text-center">
            Full stack execution. Product thinking. Web3 native.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[var(--text-dim)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
