import { testimonials } from "../data/content";
import SectionHeader from "./ui/SectionHeader";

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader eyebrow="Kind words" title="What clients" italic="say" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-stroke bg-surface/30 p-8">
              <blockquote className="font-display text-2xl italic leading-snug md:text-3xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                {t.name}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
