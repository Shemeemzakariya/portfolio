import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  italic: string;
  sub?: string;
  action?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, italic, sub, action }: Props) {
  return (
    <Reveal className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</span>
        </div>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {title} <em className="italic">{italic}</em>
        </h2>
        {sub && <p className="mt-4 max-w-md text-sm text-muted md:text-base">{sub}</p>}
      </div>
      {action && <div className="hidden md:block">{action}</div>}
    </Reveal>
  );
}
