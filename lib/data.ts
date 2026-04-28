export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  status: "Live" | "In Progress" | "Concept";
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "foundation" | "modern" | "tools";
}

export interface NavLink {
  label: string;
  href: string;
}

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A web application for tracking and managing personal expenses. It allows users to monitor income and expenses, view balance, and improve financial control.",
    tech: ["MERN Stack", "Tailwind CSS"],
    github: "https://github.com/Shukirlayev/expenseTracker",
    demo: "https://expense-tracker-xi-one-55.vercel.app/",
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "Awwards Clone",
    description:
      "Modern portfolio website built with scroll-based animations, clip-path transitions, and 3D hover effects. Developed using a component-based architecture with reusable UI structure.",
    tech: ["GSAP", "Tailwind CSS", "React.js"],
    github: "https://github.com/Shukirlayev/awwards",
    demo: "https://awwards-beige.vercel.app/",
    status: "Live",
    featured: false,
  },
  {
    id: 3,
    title: "CodeFlow AI Landing Page",
    description:
      "A landing page created for an AI product. Built with modern UI, responsive design, and a marketing-focused structure.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Shukirlayev/Modern-ux-ui-website/",
    demo: "https://codeflow-sage.vercel.app/",
    status: "Live",
    featured: false,
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description:
      "A landing page designed for SaaS products. Simple, fast-loading, and optimized for conversion.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Shukirlayev/SaaS-Landing-Page",
    demo: "https://saas-landingpage-eosin.vercel.app/",
    status: "Live",
    featured: false,
  },
  {
    id: 5,
    title: "HooBank Landing Page",
    description:
      "A landing page built for banking and fintech services. Features a modern UI and user-friendly interface.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Shukirlayev/HooBank",
    demo: "https://hoobankuz.vercel.app/",
    status: "Live",
    featured: false,
  },
  {
    id: 6,
    title: "Travelend Landing Page",
    description:
      "A travel platform landing page featuring tour listings, booking UI, and visually appealing design.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Shukirlayev/travelend-website",
    demo: "https://travelend-website.vercel.app/",
    status: "Live",
    featured: false,
  }
];
// ─── Skills ────────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Foundation
  { name: "HTML5",       category: "foundation" },
  { name: "CSS3",        category: "foundation" },
  { name: "JavaScript",  category: "foundation" },
  // Modern
  { name: "TypeScript",  category: "modern" },
  { name: "React",       category: "modern" },
  { name: "Next.js",     category: "modern" },
  { name: "Tailwind CSS",category: "modern" },
  { name: "Framer Motion", category: "modern" },
  // Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "Figma",       category: "tools" },
];

// ─── Social Links ───────────────────────────────────────────────────────────────
export const socialLinks = {
  github:   "https://github.com/shukirlayev",
  email:    "shukirlayevs@gmail.com",
  telegram: "https://t.me/Shukirlayev",
};
