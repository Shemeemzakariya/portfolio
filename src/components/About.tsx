import { about, currentlyBuilding } from "../data/content";
import { site } from "../data/site";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader eyebrow="About" title="A little" italic="about me" />

        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            {site.photo ? (
              <img
                src={site.photo}
                alt={site.name}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl border border-stroke object-cover"
              />
            ) : (
              <div className="accent-gradient rounded-3xl p-[2px]">
                <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-surface">
                  <span className="font-display text-8xl italic text-text-primary/80">{site.monogram}</span>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <p className="mb-3 mt-10 text-sm text-muted">Currently building</p>
            <ul className="flex flex-wrap gap-3">
              {currentlyBuilding.map((t) => (
                <li key={t} className="rounded-full border border-stroke px-4 py-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
