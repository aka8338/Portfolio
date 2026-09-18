import { testimonials } from "@/data/testimonials";

export const siteConfig = {
  name: "Aklilu Beyero",
  title: "Full-Stack Developer & AI Trainer",
  tagline: "I build web applications and train AI models.",
  description:
    "Full-stack developer and AI trainer based in Addis Ababa. Experience building web apps for startups and clients, and training AI on real software tasks across multiple programming languages.",
  email: "aklilubeyero@gmail.com",
  url: "https://portfolio-aklilu.vercel.app",
  github: "https://github.com/aka8338",
  linkedin: "https://www.linkedin.com/in/aklilu-beyero-3a92b3288/",
  upwork: "https://www.upwork.com/freelancers/~01e20da0fb462692dc",
  resumePath: "/resume.pdf",
} as const;

const baseNavItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  ...(testimonials.length > 0
    ? [{ label: "Testimonials", href: "#testimonials" } as const]
    : []),
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const navItems = baseNavItems;

export const sectionIds = navItems.map((item) => item.href.slice(1));
