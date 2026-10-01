import type { MouseEvent, ReactNode } from "react";
import { cn, isExternal } from "../../lib/utils";
import { scrollToId } from "../../lib/scroll";

type Variant = "solid" | "outline" | "pill";

interface Props {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const inner: Record<Variant, string> = {
  solid:
    "bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary px-7 py-3.5 text-sm",
  outline:
    "border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent px-7 py-3.5 text-sm",
  pill: "bg-surface text-text-primary px-3 py-1.5 text-xs backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm",
};

export default function GradientLink({ href, variant = "outline", children, className }: Props) {
  const external = isExternal(href);
  const onClick = href.startsWith("#")
    ? (e: MouseEvent) => {
        e.preventDefault();
        scrollToId(href.slice(1));
      }
    : undefined;

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105",
        className,
      )}
    >
      <span
        aria-hidden
        className="accent-gradient-animated absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        className={cn(
          "relative inline-flex items-center gap-2 rounded-full transition-colors duration-300",
          inner[variant],
        )}
      >
        {children}
      </span>
    </a>
  );
}
