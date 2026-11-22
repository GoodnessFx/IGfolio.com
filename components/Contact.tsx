import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import {
  MailIcon,
  WhatsAppIcon,
  PhoneIcon,
  XIcon,
  LinkedInIcon,
  GitHubIcon,
} from "./icons/SocialIcons";

// ── Contact rows ──────────────────────────────────────────────────────────────
const contactRows = [
  {
    label: "Email",
    value: "goodnessiyamah1@gmail.com",
    href: "mailto:goodnessiyamah1@gmail.com",
    icon: MailIcon,
  },
  {
    label: "WhatsApp",
    value: "08072027335",
    href: "https://wa.me/2348072027335",
    icon: WhatsAppIcon,
  },
  {
    label: "Direct Call",
    value: "08072027335",
    href: "tel:+2348072027335",
    icon: PhoneIcon,
  },
  {
    label: "X",
    value: "@IGoodnessIyamah",
    href: "https://x.com/IGoodnessIyamah",
    icon: XIcon,
  },
  {
    label: "LinkedIn",
    value: "goodnessiyamah",
    href: "https://linkedin.com/in/goodnessiyamah",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "@GoodnessFx",
    href: "https://github.com/GoodnessFx",
    icon: GitHubIcon,
  },
];

// ── Form ─────────────────────────────────────────────────────────────────────
type Status = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const reset = () => { setName(""); setEmail(""); setMessage(""); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/goodnessiyamah1@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name, email, message,
          _subject: "New message from IG Portfolio",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClass =
    "w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-5 py-4 text-white text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-all duration-200 font-dm-sans";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-jetbrains uppercase tracking-widest text-[var(--text-dim)]">
            Name
          </label>
          <input
            required type="text" value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-jetbrains uppercase tracking-widest text-[var(--text-dim)]">
            Email
          </label>
          <input
            required type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-jetbrains uppercase tracking-widest text-[var(--text-dim)]">
          Message
        </label>
        <textarea
          required rows={4} value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-sm text-green-400 font-dm-sans flex items-center gap-2"
          >
            <CheckCircle2 size={15} /> Message sent, I'll reply shortly.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-sm text-red-400 font-dm-sans flex items-center gap-2"
          >
            <XCircle size={15} /> Something went wrong. Try again or reach out directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : status === "success" ? (
          <><CheckCircle2 size={16} /> Sent</>
        ) : (
          <>Send Message <ArrowUpRight size={16} /></>
        )}
      </button>
    </form>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function Contact() {
  return (
    <section id="contact" className="py-28 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Ambient glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(207,97,40,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="section-label">Contact</span>
          <h2
            className="font-space-grotesk font-bold text-white leading-[1.1] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Ready to build something serious?
          </h2>
          <p className="text-[var(--text-secondary)] font-dm-sans text-[16px] max-w-lg">
            Available for full stack roles, Web3 collaborations, and serious builds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 items-start">

          {/* ── Contact rows ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            {contactRows.map((row, i) => (
              <motion.a
                key={row.label}
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="contact-row group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[var(--text-secondary)] group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)] transition-all duration-300 shrink-0">
                    <row.icon />
                  </div>
                  <div>
                    <p className="text-[11px] font-jetbrains uppercase tracking-widest text-[var(--text-dim)] mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-white font-dm-sans text-sm font-medium group-hover:text-[var(--accent)] transition-colors duration-200">
                      {row.value}
                    </p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-[var(--text-dim)] group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)] transition-all duration-300 shrink-0">
                  <ArrowUpRight size={15} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="glass-card rounded-2xl p-8"
          >
            <p className="font-space-grotesk font-semibold text-white text-lg mb-6">
              Send a message
            </p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
