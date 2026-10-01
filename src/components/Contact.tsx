import { useLayoutEffect, useRef } from "react";
import { site } from "../data/site";
import { gsap, prefersReducedMotion } from "../lib/scroll";
import GradientLink from "./ui/GradientLink";

const MARQUEE = "LET'S WORK TOGETHER • ";

export default function Contact() {
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !track.current) return;
    const tween = gsap.to(track.current, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    return () => {
      tween.kill();
    };
  }, []);

  const socials = site.socials.filter((s) => s.href);

  return (
    <section id="contact" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <div aria-hidden className="hero-aurora absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-black/60" />

      <div className="relative">
        <div aria-hidden className="overflow-hidden whitespace-nowrap">
          <div ref={track} className="flex w-max">
            {[0, 1].map((g) => (
              <span
                key={g}
                className="font-display text-[14vw] italic leading-none text-text-primary/10 md:text-[10vw]"
              >
                {MARQUEE.repeat(5)}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1200px] px-6 text-center md:mt-16 md:px-10 lg:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Have a project in mind? <em className="italic">Let's talk.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted md:text-base">
            Tell me what you need and your deadline. I'll reply with scope and a quote.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GradientLink href={`mailto:${site.email}`} variant="solid">
              {site.email}
            </GradientLink>
            {site.whatsapp && (
              <GradientLink href={`https://wa.me/${site.whatsapp}`} variant="outline">
                Message on WhatsApp
              </GradientLink>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center gap-5 border-t border-stroke px-6 pt-6 text-sm text-muted md:mt-24 md:flex-row md:justify-between md:px-10 lg:px-16">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>{site.handle}</li>
          </ul>

          <p className="flex items-center gap-2 text-center">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {site.availability} · {site.timezoneNote} · {site.replyNote}
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted/70">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </section>
  );
}
