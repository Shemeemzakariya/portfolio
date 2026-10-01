import { useEffect, useState } from "react";

const words = ["Design", "Create", "Inspire"];
const DURATION = 1200;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    let finished = false;

    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!finished) {
        finished = true;
        setTimeout(() => setLeaving(true), 200);
        setTimeout(onComplete, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] bg-bg transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10">
        Portfolio
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          key={wordIndex}
          className="animate-role-fade-in font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
        >
          {words[wordIndex]}
        </span>
      </div>

      <span className="absolute bottom-10 right-6 font-display text-6xl tabular-nums text-text-primary md:right-10 md:text-8xl lg:text-9xl">
        {String(count).padStart(3, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </div>
  );
}
