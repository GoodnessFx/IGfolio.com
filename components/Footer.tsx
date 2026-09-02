import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

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
  { name: "LinkedIn", href: "https://linkedin.com/in/{{LINKEDIN}}", icon: LinkedInIcon },
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
              Full-stack developer and Web3 builder from Lagos, Nigeria, building websites, SaaS products, and smart contracts.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: "https://x.com/IGoodnessIyamah", Icon: XIcon,        label: "X"        },
                { href: "https://github.com/GoodnessFx",  Icon: GitHubIcon,   label: "GitHub"   },
                { href: "https://linkedin.com/in/{{LINKEDIN}}", Icon: LinkedInIcon, label: "LinkedIn" },
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
            Full-stack execution. Product thinking. Web3-native.
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
