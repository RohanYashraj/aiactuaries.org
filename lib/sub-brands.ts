export type SubBrandAccent = "sage" | "terracotta" | "gold" | "slate";

export interface SubBrand {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  headline: string;
  description: string;
  url?: string;
  accent: SubBrandAccent;
  /** Optional image URL for the brand (e.g. Unsplash). Used in cards with motion. */
  image?: string;
}

export const subBrands: SubBrand[] = [
  {
    id: "center-of-excellence",
    slug: "center-of-excellence",
    name: "SSS CADS-AI",
    category: "Center of Excellence",
    tagline:
      "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI.",
    headline:
      "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI",
    description:
      "The institutional home for actuarial data science and AI at Sri Sathya Sai, bringing together education, research, and ecosystem-building for the profession.",
    url: "https://edu.aiactuaries.org",
    accent: "gold",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    id: "maestros-ai",
    slug: "maestros-ai",
    name: "Maestros AI",
    category: "AI & Agents",
    tagline: "Agentic AI systems for insurance and actuarial innovation.",
    headline: "Agentic systems for insurance and actuarial innovation",
    description:
      "Prototype and deploy non-traditional, AI-native workflows for underwriting, pricing, forecasting, and internal operations.",
    url: "https://maestrosai.in/",
    accent: "sage",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "tech-actuarial",
    slug: "tech-actuarial",
    name: "Tech Actuarial",
    category: "Actuarial + Data Science",
    tagline: "Traditional actuarial, upgraded with data science and tooling.",
    headline: "Traditional actuarial, upgraded with data science",
    description:
      "End-to-end tech actuarial support—reserving, pricing, capital, reporting—grounded in rigorous methods and supported by modern data pipelines.",
    url: "https://techactuarial.com/",
    accent: "terracotta",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "sutra-blog",
    slug: "sutra-blog",
    name: "Sutra Blog",
    category: "Thought Leadership",
    tagline:
      "Deep dives that keep the math intact but make ideas approachable.",
    headline: "Deep dives without the jargon",
    description:
      "Essays and walkthroughs that turn dense, technical topics into clear, structured narratives—without skipping the details.",
    url: "https://sutra.rohanyashraj.com/",
    accent: "slate",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80",
  },
];
