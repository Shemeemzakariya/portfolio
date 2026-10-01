import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { site, contactHref } from "../data/site";
import { gsap, prefersReducedMotion } from "../lib/scroll";
import GradientLink from "./ui/GradientLink";

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % site.roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) video.current?.pause();
  }, []);

  useLayoutEffect(() => {
    if (!ready || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3,
      );
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {site.heroVideo ? (
        <video
          ref={video}
          src={site.heroVideo}
          poster={site.heroPoster || undefined}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      ) : (
        <div aria-hidden className="hero-aurora absolute inset-0" />
      )}
      <div aria-hidden className="absolute inset-0 bg-black/20" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">{site.eyebrow}</p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {site.name}
        </h1>

        <p className="blur-in mb-4 text-base text-muted md:text-lg">
          A{" "}
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display italic text-text-primary"
          >
            {site.roles[roleIndex]}
          </span>{" "}
          from {site.location}.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">{site.description}</p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <GradientLink href="#work" variant="solid">
            See Works
          </GradientLink>
          <GradientLink href={contactHref} variant="outline">
            Start a Project
          </GradientLink>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient animate-scroll-down absolute inset-x-0 top-0 h-1/2" />
        </span>
      </div>
    </section>
  );
}
