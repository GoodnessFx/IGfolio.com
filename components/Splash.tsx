import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onComplete?: () => void;
  duration?: number; // milliseconds
};

export default function Splash({ onComplete, duration = 2500 }: Props) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing systems...");

  const loadingSteps = [
    { threshold: 0, text: "Initializing systems..." },
    { threshold: 20, text: "Loading neural network layers..." },
    { threshold: 40, text: "Fetching smart contract protocols..." },
    { threshold: 60, text: "Optimizing Web3 interface..." },
    { threshold: 80, text: "Finalizing security audit..." },
    { threshold: 100, text: "System Ready." },
  ];

  useEffect(() => {
    const start = Date.now();
    const interval = 30;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      const currentStep = [...loadingSteps].reverse().find((step) => pct >= step.threshold);
      if (currentStep) setLoadingText(currentStep.text);

      if (pct >= 100) {
        clearInterval(id);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, interval);
    return () => clearInterval(id);
  }, [duration, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1E1C1A] text-[#F2F0ED] font-dm-sans"
    >
      <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
      
      <div className="w-full max-w-md px-8 relative z-10">
        <div className="space-y-8">
          {/* Logo / Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold font-space-grotesk tracking-tight mb-2">
              IG<span className="text-[#CF6128]">folio</span>
            </h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A9490]">
              Production Grade Web3 Development
            </div>
          </motion.div>

          {/* Progress Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div className="text-[11px] font-mono text-[#CF6128] animate-pulse">
                {loadingText}
              </div>
              <div className="text-[11px] font-mono text-[#9A9490]">
                {progress}%
              </div>
            </div>

            <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#CF6128]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Terminal Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="text-[9px] font-mono text-[#5A5652] text-center"
          >
            &copy; 2026 GOODNESS IYAMAH. ALL RIGHTS RESERVED.
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
