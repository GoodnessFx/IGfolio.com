import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onComplete?: () => void;
  duration?: number;
};

const steps = [
  { threshold: 0,   text: "Initializing…"         },
  { threshold: 25,  text: "Loading stack…"         },
  { threshold: 50,  text: "Compiling contracts…"   },
  { threshold: 75,  text: "Connecting chains…"     },
  { threshold: 95,  text: "Ready."                 },
];

export default function Splash({ onComplete, duration = 2200 }: Props) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState(steps[0].text);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      const current = [...steps].reverse().find((s) => pct >= s.threshold);
      if (current) setText(current.text);

      if (pct >= 100) {
        clearInterval(id);
        setTimeout(() => onComplete?.(), 400);
      }
    }, 24);
    return () => clearInterval(id);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "#1E1C1A" }}
    >
      <div className="w-full max-w-xs px-8 space-y-8">

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h1 className="font-space-grotesk font-bold text-4xl tracking-tight" style={{ color: "#CF6128" }}>
            IG
          </h1>
          <p className="text-[10px] font-jetbrains uppercase tracking-[0.2em] text-[var(--text-dim)]">
            Full Stack Dev · Web3 · Smart Contracts
          </p>
        </motion.div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-jetbrains text-[var(--accent)] tabular-nums">
              {text}
            </span>
            <span className="text-[11px] font-jetbrains text-[var(--text-dim)] tabular-nums">
              {progress}%
            </span>
          </div>

          <div className="relative h-px w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #CF6128 0%, #E07840 100%)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08 }}
            />
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.4 }}
          className="text-[9px] font-jetbrains text-[var(--text-dim)] text-center"
        >
          © 2026 GOODNESS IYAMAH
        </motion.p>
      </div>
    </motion.div>
  );
}
