import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2, XCircle } from "lucide-react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.057 23.571a.75.75 0 0 0 .921.921l5.734-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.253-1.387l-.376-.217-3.904 1.004 1.023-3.793-.23-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

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
    value: "{{LINKEDIN}}",
    href: "https://linkedin.com/in/{{LINKEDIN}}",
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
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");

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
    "w-full bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.07)] rounded-xl px-5 py-4 text-white text-sm placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--accent-border)] transition-colors duration-200 font-dm-sans";

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
            <CheckCircle2 size={15} /> Message sent — I'll reply shortly.
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
            Available for full-stack roles, Web3 collaborations, and serious builds.
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
