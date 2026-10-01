import { useEffect, useRef, useState } from "react";
import { stats } from "../data/content";
import { prefersReducedMotion } from "../lib/scroll";

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setN(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1200, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  if (!stats.enabled) return null;
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:grid-cols-3 md:px-10 lg:px-16">
        {stats.items.map((s) => (
          <div key={s.label} className="border-t border-stroke pt-6">
            <p className="font-display text-6xl italic md:text-7xl">
              <Count to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
