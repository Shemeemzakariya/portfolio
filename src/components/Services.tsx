import { services, tools } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Services"
          title="What I can"
          italic="build for you"
          sub="Clear deliverables, fair starting prices, and fast replies."
        />

        <ul className="divide-y divide-stroke border-y border-stroke">
          {services.map((s) => (
            <li
              key={s.title}
              className="group grid grid-cols-1 gap-2 px-2 py-6 transition-colors hover:bg-surface/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
            >
              <h3 className="font-display text-3xl italic md:col-span-5 md:text-4xl">{s.title}</h3>
              <p className="max-w-md text-sm text-muted md:col-span-5 md:text-base">{s.blurb}</p>
              {s.price && (
                <span className="text-sm text-text-primary md:col-span-2 md:text-right">{s.price}</span>
              )}
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <p className="mb-4 text-sm text-muted">Tools I work with</p>
          <ul className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-stroke bg-surface/50 px-5 py-2.5 text-sm transition-colors hover:border-[#4E85BF]"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
