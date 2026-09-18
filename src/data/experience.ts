export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "afterquery-ai-trainer",
    title: "AI Trainer",
    company: "AfterQuery",
    location: "Remote",
    startDate: "May 2026",
    endDate: "Present",
    bullets: [
      "Review AI model outputs on real code — accuracy, logic, and whether the solution actually works.",
      "Read through existing codebases, write tests, and debug issues across different languages and project setups.",
      "Work with build tools like npm, Make, CMake, Cargo, and Gradle when evaluating or fixing code.",
      "Troubleshoot CI/CD pipelines and dev environment problems that show up in training tasks.",
      "Handle tasks in Python, Go, Rust, and C/C++ — not just one stack.",
    ],
    technologies: [
      "Python",
      "Go",
      "Rust",
      "C/C++",
      "npm",
      "CMake",
      "Make",
      "Cargo",
      "Gradle",
      "CI/CD",
      "Testing",
      "Code Review",
    ],
  },
  {
    id: "upwork-fullstack",
    title: "Full-Stack Developer",
    company: "Upwork",
    location: "Addis Ababa, Ethiopia · Remote",
    startDate: "Feb 2025",
    endDate: "Present",
    bullets: [
      "Build full-stack apps for clients — usually React up front, Node.js on the backend.",
      "Set up APIs, databases, and whatever else a project needs to actually ship.",
      "Work directly with clients on requirements, code reviews, and fixing bugs along the way.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "JavaScript",
      "Python",
    ],
  },
  {
    id: "amplitude-ventures",
    title: "Full Stack Engineer",
    company: "Amplitude Ventures AS",
    location: "Remote",
    startDate: "May 2024",
    endDate: "Jun 2026",
    bullets: [
      "Spent two years building web apps and backend systems for a venture studio based in Norway.",
      "Worked across React, Node.js, Express, and MongoDB — features, APIs, and infrastructure.",
      "Helped keep the technical side solid while the team moved quickly on new ideas.",
    ],
    technologies: [
      "React.js",
      "AngularJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Software Infrastructure",
    ],
  },
  {
    id: "icog-intern",
    title: "AI Engineer Intern",
    company: "iCog Labs",
    location: "Addis Ababa, Ethiopia",
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    bullets: [
      "Interned at an AI lab in Addis, helping the team with experiments and small product tasks.",
      "Used Python, TensorFlow, NumPy, and Pandas in day-to-day ML work.",
      "Got a good look at how research ideas turn into something you can actually use.",
    ],
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Machine Learning"],
  },
  {
    id: "eeu-electrical",
    title: "Electrical Engineer",
    company: "Ethiopian Electric Utility",
    location: "Addis Ababa, Ethiopia",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    bullets: [
      "Helped plan infrastructure projects and kept the technical documentation in order.",
      "Collected field data from sites and organized it for the engineering team.",
      "Worked with other departments on reports and day-to-day coordination.",
    ],
    technologies: [
      "Documentation",
      "Data Collection",
      "Project Planning",
      "Engineering",
    ],
  },
  {
    id: "abyssinia-fullstack",
    title: "Full Stack Developer",
    company: "Abyssinia Software Technology plc",
    location: "Addis Ababa, Ethiopia",
    startDate: "Oct 2024",
    endDate: "Jan 2025",
    bullets: [
      "Built full-stack features for client web apps — both the UI and the backend.",
      "Wrote REST APIs with Node.js and Express.",
      "Designed MySQL database schemas with Sequelize and joined code reviews with the team.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Redux.js",
      "SQL",
    ],
  },
];
