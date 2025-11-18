import { useEffect, useState } from "react";

type Props = {
  duration?: number; // milliseconds
};

export default function Splash({ duration = 3000 }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = 40;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(id);
    }, interval);
    return () => clearInterval(id);
  }, [duration]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white">
      <div className="w-full max-w-2xl px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-emerald-400 mb-6">Iyamah Goodness (IG)</h1>
          <div className="text-sm text-zinc-400 mb-3">Welcome to IG Work of Art</div>
          <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-emerald-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-zinc-400">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
