export interface ProjectDetail {
  overview: string;
  context: string;
  challenge: string;
  targetAudience: string;
  strategy: string;
  creativeDirection: string;
  deliverables: string[];
  resultsPlaceholder: string;
  reflection: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "SOCIAL MEDIA" | "CAMPAIGNS" | "CONTENT" | "BRANDING" | "DIGITAL MARKETING";
  categoryLabel: string;
  year: string;
  description: string;
  isSample: boolean;
  thumbnail: string;
  heroImage: string;
  accentColor: string;
  tags: string[];
  details: ProjectDetail;
}

export const projectsData: Project[] = [
  {
    id: "social-media-strategy",
    title: "PROJECT 01 — SOCIAL MEDIA STRATEGY",
    subtitle: "A modern identity and content rhythm for contemporary brands.",
    category: "SOCIAL MEDIA",
    categoryLabel: "Social Media Marketing",
    year: "2024",
    description: "A sample social media direction designed to establish a consistent brand identity and create more engaging audience interactions.",
    isSample: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#F4A340",
    tags: ["Social Strategy", "Content Grid", "Brand Voice", "Audience Engagement"],
    details: {
      overview: "A comprehensive social media strategy tailored for a lifestyle label, prioritizing visual hierarchy, community engagement, and narrative consistency.",
      context: "In saturated digital channels, consumer brands struggle to maintain brand recognition while posting daily content.",
      challenge: "Transitioning a fragmented social presence into a cohesive, recognizable digital flagship experience across Instagram and LinkedIn.",
      targetAudience: "Design-conscious millennials and Gen Z professionals seeking authentic visual identity and meaningful brand conversations.",
      strategy: "Established a 3-pillar content framework (Educate, Inspire, Engage) paired with a high-contrast editorial aesthetic.",
      creativeDirection: "Minimalist layout structures featuring saffron orange highlights, high-definition product photography, and Swiss grid typography.",
      deliverables: [
        "12-Week Content Calendar Framework",
        "Custom Instagram Feed & Story Templates",
        "Brand Tone of Voice Style Guide",
        "Community Engagement Protocols"
      ],
      resultsPlaceholder: "[ADD VERIFIED RESULTS — e.g. +140% Organic Reach & +65% Engagement Rate Placeholder]",
      reflection: "Consistency in visual tone and strategic storytelling dramatically improves brand recall even before paid acquisition kicks in."
    }
  },
  {
    id: "brand-campaign-concept",
    title: "PROJECT 02 — BRAND CAMPAIGN",
    subtitle: "Creative campaign architecture centered around authentic storytelling.",
    category: "CAMPAIGNS",
    categoryLabel: "Campaign Strategy",
    year: "2024",
    description: "A sample campaign concept built around a clear message, a consistent visual identity, and audience-focused communication.",
    isSample: true,
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a3121699497?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1542744094-3a3121699497?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#E87924",
    tags: ["Campaign Direction", "Copywriting", "Multi-Channel Launch", "Visual Positioning"],
    details: {
      overview: "An integrated brand campaign design connecting emotional storytelling with multi-platform digital rollouts.",
      context: "Emerging brands often fail to translate their core mission into compelling marketing copy during product launch phases.",
      challenge: "Building a launch narrative that captures interest within the first 3 seconds while driving targeted web traffic.",
      targetAudience: "Urban professionals and trendsetters looking for premium quality with clear brand values.",
      strategy: "Developed the headline anchor 'Designed for the Driven' with synchronized multi-channel asset distribution.",
      creativeDirection: "Bold oversized typography juxtaposed with cinematic dark backgrounds and warm saffron accents.",
      deliverables: [
        "Core Campaign Manifesto & Headlines",
        "Digital Billboard & Display Mockups",
        "Targeted Social Ad Asset Suite",
        "Landing Page Conversion Copy"
      ],
      resultsPlaceholder: "[ADD VERIFIED RESULTS — e.g. +85% Click-Through Rate & +2.4x Campaign Impressions Placeholder]",
      reflection: "A strong narrative line simplifies visual decision-making across all downstream marketing channels."
    }
  },
  {
    id: "content-creation-direction",
    title: "PROJECT 03 — CONTENT CREATION",
    subtitle: "Short-form content systems engineered for modern algorithms.",
    category: "CONTENT",
    categoryLabel: "Content Marketing",
    year: "2024",
    description: "A sample content concept exploring short-form storytelling, visual consistency, and content designed for digital audiences.",
    isSample: true,
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#F4A340",
    tags: ["Short-form Video", "Content Boards", "Editorial Layouts", "Visual Storytelling"],
    details: {
      overview: "A modular content creation framework built for rapid, high-impact social media assets and short-form video storyboards.",
      context: "Algorithms reward high-frequency publishing, placing immense pressure on brand content quality and production speed.",
      challenge: "Maintaining high creative standards without burning out production resources or diluting brand aesthetics.",
      targetAudience: "Mobile-first audiences accustomed to fast-paced, visually dynamic storytelling on short-form video platforms.",
      strategy: "Created reusable content templates, micro-video scripting templates, and hook-driven editorial copy guidelines.",
      creativeDirection: "Vibrant visual hooks, expressive typography overlays, dynamic motion rhythms, and curated color stories.",
      deliverables: [
        "10 Short-Form Video Concept Scripts",
        "Modular Carousel Slide System",
        "Visual Hook Matrix & Headline Archive",
        "Asset Library Folder Architecture"
      ],
      resultsPlaceholder: "[ADD VERIFIED RESULTS — e.g. +310% Video Completion Rate & +90% Shareability Placeholder]",
      reflection: "Modularity in design enables rapid content iteration while keeping brand identity rock-solid."
    }
  },
  {
    id: "digital-growth-concept",
    title: "PROJECT 04 — DIGITAL GROWTH CONCEPT",
    subtitle: "Data-informed audience targeting matched with creative marketing funnels.",
    category: "DIGITAL MARKETING",
    categoryLabel: "Digital Marketing Strategy",
    year: "2024",
    description: "A sample marketing concept demonstrating how content planning, audience research, and performance analysis can work together.",
    isSample: true,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    accentColor: "#E87924",
    tags: ["Funnel Architecture", "SEO Fundamentals", "Analytics Integration", "Growth Loops"],
    details: {
      overview: "An end-to-end digital growth framework aligning top-of-funnel awareness content with mid-funnel lead nurturing.",
      context: "Marketing campaigns often fail when traffic generation is disconnected from downstream lead conversion pathing.",
      challenge: "Building a cohesive user journey from first social impression to email capture and long-term brand advocacy.",
      targetAudience: "Founders, e-commerce shoppers, and decision-makers seeking trustworthy digital solutions.",
      strategy: "Mapped customer intent stages to targeted content pieces, optimizing meta descriptions, organic keywords, and lead magnets.",
      creativeDirection: "Editorial dashboard aesthetics, clean quantitative visualizations, and frictionless call-to-action touchpoints.",
      deliverables: [
        "Full-Funnel Content Mapping Architecture",
        "On-Page SEO Optimization Guideline",
        "Lead Magnet Concept & Copy",
        "Key Performance Metrics Dashboard Spec"
      ],
      resultsPlaceholder: "[ADD VERIFIED RESULTS — e.g. +55% Conversion Efficiency & Lower CAC Placeholder]",
      reflection: "Blending data analytics with intuitive creative design is the ultimate multiplier for digital growth."
    }
  }
];
