import { services } from "../data/content";

const items = services.map((s) => s.title);

/** Slow endless strip of your services, shown between the hero and your work. */
export default function SkillsTicker() {
  return (
    <div aria-hidden className="ticker overflow-hidden border-y border-stroke py-6 md:py-8">
      <div className="ticker-track">
        {[0, 1].map((g) => (
          <ul key={g} className="flex shrink-0 items-center">
            {items.map((t) => (
              <li
                key={t}
                className="flex items-center whitespace-nowrap font-display text-3xl italic text-text-primary/80 md:text-5xl"
              >
                <span>{t}</span>
                <span className="mx-6 text-[#4E85BF] md:mx-10">•</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
