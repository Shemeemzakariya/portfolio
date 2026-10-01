export type Category = "Design" | "Video" | "Web";

export interface Project {
  title: string;
  category: Category;
  /** Path in /public (e.g. "/work/brand-one.webp") or a full URL. WebP recommended. */
  image?: string;
  /** Optional short looping preview (MP4/WebM) that plays on hover. */
  video?: string;
  /** Case study, live site, or Behance page. */
  href?: string;
}

/**
 * HOW TO ADD A PROJECT:
 * Replace a placeholder below with a real one, for example:
 *
 * { title: "Inforium Brand Kit", category: "Design", image: "/work/inforium.webp", href: "https://behance.net/..." },
 *
 * Entries without an image or video show as "Coming soon" tiles.
 * Keep it to 6 projects. Six great beats twenty average.
 */
export const projects: Project[] = [
  { title: "Featured project", category: "Design" },
  { title: "Featured project", category: "Video" },
  { title: "Featured project", category: "Web" },
  { title: "Featured project", category: "Design" },
  { title: "Featured project", category: "Video" },
  { title: "Featured project", category: "Web" },
];
