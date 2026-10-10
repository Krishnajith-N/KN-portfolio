export interface SocialLink {
  name: string;
  url: string;
  placeholderText: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  logoText: string;
  role: string;
  experienceYears: string;
  availabilityText: string;
  location: string;
  email: string;
  emailPlaceholder: string;
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    highlightWord: string;
    supportingCopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    introParagraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  approach: Array<{
    step: string;
    title: string;
    description: string;
    details: string;
  }>;
  experienceTimeline: Array<{
    period: string;
    title: string;
    organization: string;
    description: string;
  }>;
  skillCategories: SkillCategory[];
  socials: SocialLink[];
  philosophy: {
    heading: string;
    statement: string;
    subtext: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Krishnendhu N",
  logoText: "KN.",
  role: "Digital Marketer & Creative Strategist",
  experienceYears: "1 Year Professional Experience",
  availabilityText: "OPEN TO COLLABORATIONS",
  location: "India / Remote Worldwide",
  email: "krishnendhun20@gmail.com", // Editable placeholder email
  emailPlaceholder: "[ADD PROFESSIONAL EMAIL]",
  hero: {
    headlineLine1: "MAKING BRANDS",
    headlineLine2: "MATTER IN THE",
    headlineLine3: "DIGITAL WORLD.",
    highlightWord: "MATTER",
    supportingCopy: "I'm Krishnendhu — a digital marketer blending creative storytelling, thoughtful strategy, and content that connects brands with people.",
    ctaPrimary: "EXPLORE MY WORK ↗",
    ctaSecondary: "LET'S CONNECT",
  },
  about: {
    heading: "A LITTLE ABOUT ME.",
    introParagraphs: [
      "Hey, I'm Krishnendhu N.",
      "I'm a digital marketer who enjoys turning ideas into meaningful digital experiences. I combine creative thinking, content, and marketing strategy to help brands communicate clearly and build stronger connections with their audiences.",
      "With one year of experience, I'm continuously exploring new ways to create better content, understand audiences, and make digital campaigns more effective."
    ],
    quote: "Good marketing isn't just about being seen. It's about giving people a reason to remember you.",
    quoteAuthor: "Krishnendhu N"
  },
  approach: [
    {
      step: "01",
      title: "UNDERSTAND",
      description: "Understand the brand, audience, goals, and competitive landscape.",
      details: "In-depth audience research, trend listening, competitor benchmark mapping, and establishing a core strategic position before touching design."
    },
    {
      step: "02",
      title: "CREATE",
      description: "Turn insights into engaging content, campaigns, and digital experiences.",
      details: "Crafting multi-channel campaign architectures, high-converting social media content assets, and narrative-driven brand voice frameworks."
    },
    {
      step: "03",
      title: "OPTIMIZE",
      description: "Learn from performance, identify opportunities, and improve the next campaign.",
      details: "Analyzing engagement metrics, iterating visual formats based on feedback loops, and refining conversion touchpoints for continuous growth."
    }
  ],
  experienceTimeline: [
    {
      period: "Present (1 Year Exp.)",
      title: "Digital Marketing Specialist",
      organization: "Creative Strategy & Freelance Collaborations",
      description: "Leading content strategy, social media campaigns, visual branding direction, and audience engagement strategies for emerging brands."
    },
    {
      period: "Focus Area",
      title: "Campaign Direction & Social Growth",
      organization: "Brand Communications",
      description: "Specializing in short-form content creation, brand storytelling, digital campaign execution, and performance-minded organic marketing."
    }
  ],
  skillCategories: [
    {
      title: "STRATEGY & CAMPAIGNS",
      skills: ["Social Media Marketing", "Content Strategy", "Campaign Planning", "Audience Research", "Brand Communication"]
    },
    {
      title: "CREATIVE & MARKETING",
      skills: ["Content Creation", "Creative Direction", "SEO Fundamentals", "Digital Marketing Analytics", "Copywriting"]
    }
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/krishnendhu-n/",
      placeholderText: "[ADD LINKEDIN URL]",
      iconName: "Linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_krishnendhu_05_/?hl=en",
      placeholderText: "[ADD INSTAGRAM URL]",
      iconName: "Instagram"
    },
    {
      name: "Behance",
      url: "https://behance.net",
      placeholderText: "[ADD BEHANCE URL]",
      iconName: "Globe"
    },
    {
      name: "Email",
      url: "mailto:krishnendhun20@gmail.com",
      placeholderText: "[ADD PROFESSIONAL EMAIL]",
      iconName: "Mail"
    }
  ],
  philosophy: {
    heading: "WHAT I BELIEVE",
    statement: "Good marketing isn't just about being seen. It's about giving people a reason to remember you.",
    subtext: "I focus on work that balances visual beauty with analytical strategy — ensuring every campaign leaves a lasting impact on real people."
  }
};
