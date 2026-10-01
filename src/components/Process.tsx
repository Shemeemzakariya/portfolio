import { process, turnaround } from "../data/content";
import SectionHeader from "./ui/SectionHeader";

export default function Process() {
  return (
    <section id="process" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader eyebrow="Process" title="How we" italic="work together" />

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {process.map((step, i) => (
            <li key={step.title} className="border-t border-stroke pt-6">
              <span className="font-display text-5xl italic text-muted">{i + 1}</span>
              <h3 className="mt-4 font-display text-3xl italic">{step.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-muted md:text-base">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-muted">{turnaround}</p>
      </div>
    </section>
  );
}
