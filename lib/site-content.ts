export const siteContent = {
  /** Short brand name used in header and footer. */
  siteName: "AI Actuaries",
  /** Full name for taglines and SEO. */
  fullName: "AI Actuaries",
  meta: {
    title: "AI Actuaries",
    description:
      "AI Actuaries. One hub for SSS Center of Excellence in Actuarial Data Science & AI, Maestros AI, Tech Actuarial, and Sutra Blog.",
    /** Set to your production URL for OG images and canonical links (e.g. "https://aiactuaries.org"). */
    baseUrl: "https://aiactuaries.org",
  },
  hero: {
    kicker: "AI Actuaries",
    titlePrefix: "Actuarial Data Science ",
    titleHighlight: "& AI",
    titleSuffix: ".",
    body: "AI Actuaries. One hub for SSS Center of Excellence in Actuarial Data Science & AI, Maestros AI, Tech Actuarial, and Sutra Blog.",
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
    heading: "Four pillars of the AI Actuaries",
    subtext:
      "Each pillar is intentionally scoped—from education, agentic AI and non-traditional solutions to traditional actuarial work, and thought leadership.",
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
      "Education: SSS CADS-AI center & learning pathways",
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
