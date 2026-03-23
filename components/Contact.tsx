import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, XCircle, Loader2, Github, Linkedin } from "lucide-react";

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

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/goodnessiyamah1@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ 
          name, email, message, 
          _subject: "New message from IG Portfolio", 
          _captcha: "false" 
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 2000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 2000);
    }
    setSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/GoodnessFx", label: "GitHub" },
    { icon: XIcon, href: "https://x.com/IGoodnessIyamah", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:goodnessiyamah1@gmail.com", label: "Email" },
  ];

  const roles = [
    "Smart Contract Engineering",
    "Full-Stack Web3",
    "Web / Mobile App Development",
    "Product Building",
    "Developer Advocacy",
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white">Let's build something remarkable.</h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg font-dm-sans">
            Available for remote contracts, full-time roles, and protocol collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side - Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-white group-hover:border-[var(--accent)] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)] mb-1">Email Me</p>
                  <a href="mailto:goodnessiyamah1@gmail.com" className="text-lg font-bold text-white hover:text-[var(--accent)] transition-colors font-space-grotesk">
                    goodnessiyamah1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center text-white group-hover:border-[var(--accent)] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)] mb-1">Location</p>
                  <p className="text-lg font-bold text-white font-space-grotesk">Lagos, Nigeria · Remote-First</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">OPEN TO ROLES IN:</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span key={role} className="px-3 py-1.5 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.05)] rounded text-xs text-[var(--text-secondary)] font-dm-sans">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 flex items-center gap-4">
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
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.07)] p-8 md:p-10 rounded-xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)] ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tobi"
                    className="w-full bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-dm-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)] ml-1">Your Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tobionatade@example.com"
                    className="w-full bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-dm-sans"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)] ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[var(--bg-primary)] border border-[rgba(255,255,255,0.08)] rounded-lg px-5 py-4 text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none font-dm-sans"
                />
              </div>

              <div className="relative">
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-green-500 mb-4 font-dm-sans text-center"
                    >
                      Your message has been delivered to IG 🚀
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  disabled={submitting || submitStatus === "success"}
                  type="submit"
                  className={`w-full py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 font-space-grotesk ${
                    submitStatus === "success"
                      ? "bg-[rgba(34,197,94,0.1)] text-green-500 border border-green-500/50"
                      : submitting 
                      ? "bg-[var(--bg-secondary)] text-[var(--text-dim)] cursor-not-allowed" 
                      : submitStatus === "error"
                      ? "bg-red-500/20 text-red-500 border border-red-500/50"
                      : "btn-ghost"
                  }`}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 size={24} />
                      ✅ Message sent to IG
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <XCircle size={24} />
                      ❌ Failed — try again
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
