export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  /** When true, render `textValue` instead of animating a count-up number. */
  isText?: boolean;
  textValue?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "scholar" | "mail" | "phone";
}

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shahriarsoudeep.com",
  name: "Shahriar Soudeep",
  initials: "SS",
  roles: ["AI Developer", "AI Engineer", "ML Engineer"],
  location: "Dhaka, Bangladesh",
  tagline:
    "Building production AI systems — from RAG pipelines to published research.",
  email: "soudeep.cse@gmail.com",
  phone: "+880 1635-851841",
  resumeUrl: "/resume.pdf",
  photoUrl:
    "https://res.cloudinary.com/drsmahozy/image/upload/v1788079033/soudeep-AI_pugbhh.jpg",
};

export const bio = `AI Developer at Softvence Agency, building production-grade LLM services, RAG pipelines, and multi-agent systems. Concurrently a Research Assistant at the AMIR Lab under Prof. Dr. M. Firoz Mridha at AIUB, contributing to peer-reviewed research spanning graph neural networks, transformer architectures, and explainable AI. Graduated with a CGPA of 3.79/4.00 in Computer Science & Engineering.`;

export const stats: StatItem[] = [
  { label: "Publications", value: 6 },
  { label: "Production Projects", value: 5, suffix: "+" },
  { label: "Venues Published", value: 0, isText: true, textValue: "IJCAI & IEEE" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/soudeep-cse", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/shahriar-soudeep-2707aa241/",
    icon: "linkedin",
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=bLXwJM0AAAAJ&hl=en",
    icon: "scholar",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
