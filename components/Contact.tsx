import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-xs sm:text-sm text-zinc-500 mb-4 tracking-widest uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-zinc-900 border-zinc-800 focus:border-zinc-700 h-11 sm:h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-zinc-900 border-zinc-800 focus:border-zinc-700 h-11 sm:h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-zinc-900 border-zinc-800 focus:border-zinc-700 min-h-[120px] sm:min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 sm:h-12 bg-white text-zinc-950 hover:bg-zinc-200"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl mb-6">Connect with me</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base break-all">hello@example.com</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">X</span>
                </motion.a>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 text-xs sm:text-sm">
                Based worldwide, available for remote work and collaboration.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 sm:mt-32 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs sm:text-sm"
        >
          <p>© 2025 All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
