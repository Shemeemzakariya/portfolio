/**
 * EDIT THIS FILE FIRST.
 * Everything marked "EDIT" is a placeholder you need to replace before you share the site.
 */
export const site = {
  name: "Shameem Zakariya",
  monogram: "BZ",
  handle: "@Shameemzakariya",
  location: "Kerala, India",
  timezoneNote: "Based in India (IST)",
  replyNote: "Replies within 24h",
  availability: "Available for projects",

  eyebrow: "Portfolio '26",
  roles: ["Designer", "Editor", "Brand Builder", "Web Developer"],
  description: "I design brands, cut stories, and build the sites they live on.",

  // EDIT: your real email
  email: "Binzakofficial@gmail.com",
  // EDIT: WhatsApp number, digits only, with country code (example: 919XXXXXXXXX). Leave "" to use email only.
  whatsapp: "919539279505",

  // EDIT: add your profile URLs. Empty ones are hidden automatically.
  socials: [
    { label: "Behance", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "https://www.instagram.com/shameemzakariya?stkn=a2Z3czQ2b3BqdjE2" },
  ],

  // Optional media (put files in /public)
  heroVideo: "", // e.g. "/reel.mp4" (under 3MB, MP4/WebM). Empty = animated gradient background.
  heroPoster: "", // e.g. "/reel-poster.webp"
  photo: "/shameem.webp", // e.g. "/shameem.webp" for the About section
};

export const contactHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}`
  : `mailto:${site.email}`;

export const behanceHref = site.socials.find((s) => s.label === "Behance")?.href ?? "";
