import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { explorations, type Exploration } from "../data/content";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/scroll";

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "rotate-1", "-rotate-2"];

function Inner() {
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const colA = useRef<HTMLDivElement>(null);
  const colB = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Exploration | null>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: "bottom bottom",
        pin: pin.current,
        pinSpacing: false,
      });
      const scrub = { trigger: section.current, start: "top bottom", end: "bottom top", scrub: true };
      gsap.fromTo(colA.current, { y: 0 }, { y: -160, ease: "none", scrollTrigger: scrub });
      gsap.fromTo(colB.current, { y: 120 }, { y: -280, ease: "none", scrollTrigger: scrub });
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const left = explorations.filter((_, i) => i % 2 === 0);
  const right = explorations.filter((_, i) => i % 2 === 1);

  const renderCard = (item: Exploration, i: number) => (
    <button
      key={item.image}
      type="button"
      onClick={() => setOpen(item)}
      aria-label={`Open ${item.title}`}
      className={`aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface transition-transform duration-500 hover:rotate-0 ${tilts[i % tilts.length]}`}
    >
      <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
    </button>
  );

  return (
    <section id="explorations" ref={section} className="relative bg-bg md:min-h-[300vh]">
      <div ref={pin} className="z-10 flex flex-col items-center justify-center px-6 py-16 text-center md:h-screen">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">Explorations</p>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          Visual <em className="italic">playground</em>
        </h2>
        <p className="mt-4 max-w-md text-sm text-muted md:text-base">
          Logos, posters, and experiments made between client work.
        </p>
      </div>

      <div className="z-20 mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 pb-24 md:absolute md:inset-x-0 md:top-0 md:gap-40 md:px-10 md:pb-[40vh] md:pt-[80vh]">
        <div ref={colA} className="flex flex-col items-center gap-12 md:gap-56">
          {left.map(renderCard)}
        </div>
        <div ref={colB} className="flex flex-col items-center gap-12 md:gap-56">
          {right.map(renderCard)}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
        >
          <img src={open.image} alt={open.title} className="max-h-full max-w-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}

export default function Explorations() {
  return explorations.length > 0 ? <Inner /> : null;
}
