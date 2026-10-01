export interface Service {
  title: string;
  blurb: string;
  /** EDIT: your real starting prices. Set to "" to hide the price. */
  price: string;
}

export const services: Service[] = [
  {
    title: "Graphic Design",
    blurb: "Posters, social creatives, banners, and print-ready layouts.",
    price: "From $5",
  },
  {
    title: "Logo Making",
    blurb: "A logo mark with colour variations and a simple usage guide.",
    price: "From $10",
  },
  {
    title: "Video Editing",
    blurb: "Reels, promos, and long-form edits with sound and colour.",
    price: "From $10",
  },
  {
    title: "Website Making",
    blurb: "Fast, responsive websites, from one-page portfolios to full builds.",
    price: "From $50",
  },
  {
    title: "Document Making",
    blurb: "Brochures, magazines, decks, and formatted reports.",
    price: "From $3",
  },
  {
    // EDIT: describe exactly what "online services" means for you
    title: "Online Services",
    blurb: "Remote tasks handled online, delivered on time.",
    price: "From $5-20",
  },
  {
    title: "Social Media Handling",
    blurb: "Content planning, design, and posting for your accounts.",
    price: "From $50-500",
  },
];

export const tools = ["Photoshop", "Illustrator", "Premiere Pro", "CapCut", "Lightroom"];

export const process = [
  {
    title: "Brief",
    text: "You share your goal, references, and deadline. I reply with scope and a quote within 24 hours.",
  },
  {
    title: "Create",
    text: "I send progress previews as I go. Revision rounds are included in every project.",
  },
  {
    title: "Deliver",
    text: "You get final files in every format you need, with source files on request.",
  },
];

// EDIT: replace with your real turnaround times
export const turnaround = "Typical turnaround: logos 2–4 days, videos 3–5 days, websites 1–2 weeks.";

export const about = [
  "I'm Shameem, a designer, editor, and web builder from Kerala. I create brands, videos, and websites that look sharp and work properly.",
  "Outside design, I'm building my skills in cybersecurity and ethical hacking. I learn by doing: breaking things, fixing them, and understanding how systems really work.",
  "I'm also drawn to business, digital products, and entrepreneurship. My goal is to combine creative and technical skills with business thinking to build products people actually use, and eventually something of my own.",
];

export const currentlyBuilding = [
  "Cybersecurity",
  "Ethical Hacking",
  "Linux",
  "Networking",
  "Programming",
];

/** Stats stay hidden until you turn them on with real numbers. */
export const stats = {
  enabled: false,
  items: [
    { value: 0, suffix: "+", label: "Projects" },
    { value: 0, suffix: "+", label: "Events branded" },
    { value: 0, suffix: "+", label: "Videos edited" },
  ],
};

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Testimonials stay hidden while this list is empty. Add real ones:
 * { quote: "…", name: "Client name", role: "Organiser, NASA" }
 */
export const testimonials: Testimonial[] = [];

export interface Exploration {
  title: string;
  image: string;
}

/**
 * Optional parallax gallery for logos, posters, and experiments.
 * Stays hidden while empty. Add 4–6 square images:
 * { title: "Logo study", image: "/explore/logo-01.webp" }
 */
export const explorations: Exploration[] = [];
