import { useRef, useState } from "react";
import { projects, type Category, type Project } from "../data/projects";
import { behanceHref } from "../data/site";
import { cn } from "../lib/utils";
import GradientLink from "./ui/GradientLink";
import SectionHeader from "./ui/SectionHeader";

const filters: Array<"All" | Category> = ["All", "Design", "Video", "Web"];
// 7 / 5 / 5 / 7 bento rhythm (literal strings so Tailwind keeps them)
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

function Card({ project, span }: { project: Project; span: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const placeholder = !project.image && !project.video;

  const content = (
    <>
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.image}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div aria-hidden className="accent-gradient absolute inset-0 opacity-[0.06]" />
          <span className="relative font-display text-3xl italic text-muted">Coming soon</span>
        </div>
      )}

      {!placeholder && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      )}

      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-bg/60 px-3 py-1 text-xs text-text-primary backdrop-blur-md">
        {project.category}
      </span>

      {!placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="accent-gradient-animated rounded-full p-[2px]">
            <span className="block rounded-full bg-white px-5 py-2.5 text-sm text-black">
              {project.href ? "View — " : ""}
              <em className="font-display italic">{project.title}</em>
            </span>
          </span>
        </div>
      )}
    </>
  );

  const className = cn(
    "group relative block h-[300px] overflow-hidden rounded-3xl border border-stroke bg-surface sm:h-[380px] md:h-[440px]",
    span,
  );

  const hoverProps = project.video
    ? {
        onMouseEnter: () => videoRef.current?.play().catch(() => {}),
        onMouseLeave: () => {
          const v = videoRef.current;
          if (v) {
            v.pause();
            v.currentTime = 0;
          }
        },
      }
    : {};

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      className={className}
      {...hoverProps}
    >
      {content}
    </a>
  ) : (
    <div className={className} {...hoverProps}>
      {content}
    </div>
  );
}

export default function Works() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italic="projects"
          sub="A selection of my work across design, video, and web."
          action={
            behanceHref ? (
              <GradientLink href={behanceHref} variant="outline">
                View all work
              </GradientLink>
            ) : undefined
          }
        />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                filter === f
                  ? "border-transparent bg-text-primary text-bg"
                  : "border-stroke text-muted hover:text-text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {visible.map((p, i) => (
            <Card key={`${p.title}-${i}`} project={p} span={spans[i % spans.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
