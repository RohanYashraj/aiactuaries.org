export const siteContent = {
  /** Short brand name used in header and footer. */
  siteName: "SSSCADSAI",
  /** Full name for taglines and SEO. */
  fullName:
    "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI",
  meta: {
    title: "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI",
    description:
      "Sri Sathya Sai Center of Excellence in Actuarial Data Science & AI. One hub for Maestros AI, Tech Actuarial, Workshops & AI Certification, and Sutra Blog—blending tradition with innovation.",
    /** Set to your production URL for OG images and canonical links (e.g. "https://ssscadsai.com"). */
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  },
  hero: {
    kicker: "Sri Sathya Sai Center of Excellence",
    titlePrefix: "Actuarial Data Science ",
    titleHighlight: "& AI",
    titleSuffix: ".",
    body: "One entry point to four pillars: agentic AI solutions, tech-enabled actuarial services, professional AI workshops, and Sutra Blog—clear, complete explanations of complex topics.",
    primaryCta: {
      label: "Explore the four pillars",
      href: "#brands",
    },
    secondaryCta: {
      label: "See who it\u2019s for",
      href: "#audiences",
    },
  },
  brands: {
    heading: "Four pillars of the Center",
    subtext:
      "Each pillar is intentionally scoped—from agentic AI and non-traditional solutions to traditional actuarial work, education, and thought leadership.",
  },
  audiences: {
    heading: "Who the Center serves",
    subtext:
      "Whether you are exploring AI, running a traditional actuarial function, or building capability, we route you to the right depth of support.",
    items: [
      {
        title: "Professional bodies & Leaders",
        description:
          "Strategic guidance on AI adoption that balances innovation with regulatory rigor and professional standards.",
      },
      {
        title: "Corporate actuarial teams",
        description:
          "Practical tools and workflows to integrate AI into core functions\u2014pricing, reserving, and risk management.",
      },
      {
        title: "Learners",
        description:
          "Structured paths for upskilling, including specialized AI certifications designed specifically for the actuarial context.",
      },
    ] as const,
  },
  capabilities: {
    heading: "How the pillars work together",
    items: [
      "Innovation: agentic AI and non-traditional solutions",
      "Rigor: traditional actuarial + data science",
      "Education: workshops and AI certification",
      "Thought leadership: clear, complete explanations",
    ] as const,
  },
  footer: {
    tagline: "Blending tradition with innovation in the AI era.",
    links: [{ label: "Back to top", href: "#hero" }] as const,
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Members", href: "/members" },
    ] as const,
  },
};
