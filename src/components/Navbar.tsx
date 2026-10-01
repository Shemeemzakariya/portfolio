import { useEffect, useState } from "react";
import { site, contactHref } from "../data/site";
import { cn } from "../lib/utils";
import { scrollToId } from "../lib/scroll";
import GradientLink from "./ui/GradientLink";

const links = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        aria-label="Main"
        className={cn(
          "inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow",
          scrolled && "shadow-md shadow-black/10",
        )}
      >
        <a
          href="#home"
          onClick={go("home")}
          aria-label={`${site.name} home`}
          className="group h-9 w-9 shrink-0 rounded-full p-[2px] transition-transform duration-300 hover:scale-110 accent-gradient hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]"
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-bg font-display text-[13px] italic">
            {site.monogram}
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={go(l.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm",
              l.id === "home" && "hidden sm:inline-block",
              active === l.id
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:bg-stroke/50 hover:text-text-primary",
            )}
          >
            {l.label}
          </a>
        ))}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <GradientLink href={contactHref} variant="pill">
          Say hi <span aria-hidden>↗</span>
        </GradientLink>
      </nav>
    </header>
  );
}
