export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "databases"
  | "ai-ml"
  | "devops"
  | "mobile-design";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategoryId;
  icon: string;
  source?: "devicon" | "simpleicons";
  variant?: "original" | "plain" | "line";
  color?: string;
}

export interface SkillGroup {
  id: SkillCategoryId;
  name: string;
  description: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Interfaces, state, and modern web frameworks.",
  },
  {
    id: "backend",
    name: "Backend",
    description: "APIs, services, and server-side languages.",
  },
  {
    id: "databases",
    name: "Databases",
    description: "SQL, NoSQL, and cloud data platforms.",
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Models, data science, and computer vision.",
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    description: "Deployment, CI/CD, and developer tooling.",
  },
  {
    id: "mobile-design",
    name: "Mobile & Design",
    description: "Cross-platform apps and product design.",
  },
];

const skillList: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "frontend", icon: "react", source: "devicon" },
  { id: "nextjs", name: "Next.js", category: "frontend", icon: "nextjs", source: "devicon" },
  { id: "typescript", name: "TypeScript", category: "frontend", icon: "typescript", source: "devicon" },
  { id: "javascript", name: "JavaScript", category: "frontend", icon: "javascript", source: "devicon" },
  { id: "html5", name: "HTML5", category: "frontend", icon: "html5", source: "devicon" },
  { id: "css3", name: "CSS3", category: "frontend", icon: "css3", source: "devicon" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", icon: "tailwindcss", source: "devicon" },
  { id: "bootstrap", name: "Bootstrap", category: "frontend", icon: "bootstrap", source: "devicon" },
  { id: "redux", name: "Redux", category: "frontend", icon: "redux", source: "devicon" },
  { id: "zustand", name: "Zustand", category: "frontend", icon: "zustand", source: "simpleicons", color: "443F39" },
  { id: "vuejs", name: "Vue.js", category: "frontend", icon: "vuejs", source: "devicon" },
  { id: "angular", name: "Angular", category: "frontend", icon: "angularjs", source: "devicon", variant: "original" },
  { id: "vite", name: "Vite", category: "frontend", icon: "vitejs", source: "devicon" },

  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", icon: "nodejs", source: "devicon" },
  { id: "express", name: "Express", category: "backend", icon: "express", source: "devicon" },
  { id: "python", name: "Python", category: "backend", icon: "python", source: "devicon" },
  { id: "flask", name: "Flask", category: "backend", icon: "flask", source: "devicon" },
  { id: "fastapi", name: "FastAPI", category: "backend", icon: "fastapi", source: "simpleicons", color: "009688" },
  { id: "go", name: "Go", category: "backend", icon: "go", source: "devicon", variant: "original" },
  { id: "rust", name: "Rust", category: "backend", icon: "rust", source: "devicon" },
  { id: "c", name: "C", category: "backend", icon: "c", source: "devicon", variant: "original" },
  { id: "cplusplus", name: "C++", category: "backend", icon: "cplusplus", source: "devicon" },
  { id: "java", name: "Java", category: "backend", icon: "java", source: "devicon" },
  { id: "dart", name: "Dart", category: "backend", icon: "dart", source: "devicon" },

  // Databases
  { id: "postgresql", name: "PostgreSQL", category: "databases", icon: "postgresql", source: "devicon" },
  { id: "mysql", name: "MySQL", category: "databases", icon: "mysql", source: "devicon" },
  { id: "mongodb", name: "MongoDB", category: "databases", icon: "mongodb", source: "devicon" },
  { id: "sqlite", name: "SQLite", category: "databases", icon: "sqlite", source: "devicon" },
  { id: "oracle", name: "Oracle", category: "databases", icon: "oracle", source: "devicon" },
  { id: "supabase", name: "Supabase", category: "databases", icon: "supabase", source: "simpleicons", color: "3FCF8E" },
  { id: "firebase", name: "Firebase", category: "databases", icon: "firebase", source: "devicon" },

  // AI & ML
  { id: "tensorflow", name: "TensorFlow", category: "ai-ml", icon: "tensorflow", source: "devicon" },
  { id: "pytorch", name: "PyTorch", category: "ai-ml", icon: "pytorch", source: "devicon" },
  { id: "pandas", name: "Pandas", category: "ai-ml", icon: "pandas", source: "simpleicons", color: "150458" },
  { id: "numpy", name: "NumPy", category: "ai-ml", icon: "numpy", source: "simpleicons", color: "013243" },
  { id: "opencv", name: "OpenCV", category: "ai-ml", icon: "opencv", source: "simpleicons", color: "5C3EE8" },
  { id: "matlab", name: "MATLAB", category: "ai-ml", icon: "mathworks", source: "simpleicons", color: "0076A8" },

  // DevOps & Tools
  { id: "docker", name: "Docker", category: "devops", icon: "docker", source: "devicon" },
  { id: "aws", name: "AWS", category: "devops", icon: "amazonwebservices", source: "devicon", variant: "original" },
  { id: "heroku", name: "Heroku", category: "devops", icon: "heroku", source: "devicon" },
  { id: "git", name: "Git", category: "devops", icon: "git", source: "devicon" },
  { id: "githubactions", name: "GitHub Actions", category: "devops", icon: "githubactions", source: "simpleicons", color: "2088FF" },
  { id: "npm", name: "npm", category: "devops", icon: "npm", source: "simpleicons", color: "CB3837" },
  { id: "postman", name: "Postman", category: "devops", icon: "postman", source: "devicon" },
  { id: "linux", name: "Linux", category: "devops", icon: "linux", source: "devicon" },
  { id: "jest", name: "Jest", category: "devops", icon: "jest", source: "devicon" },
  { id: "gradle", name: "Gradle", category: "devops", icon: "gradle", source: "simpleicons", color: "02303A" },
  { id: "arduino", name: "Arduino", category: "devops", icon: "arduino", source: "devicon" },

  // Mobile & Design
  { id: "android", name: "Android", category: "mobile-design", icon: "android", source: "devicon" },
  { id: "reactnative", name: "React Native", category: "mobile-design", icon: "reactnative", source: "devicon" },
  { id: "figma", name: "Figma", category: "mobile-design", icon: "figma", source: "devicon" },
];

export const skills: Skill[] = skillList;

export function getSkillsByCategory(categoryId: SkillCategoryId): Skill[] {
  return skills.filter((skill) => skill.category === categoryId);
}

/** @deprecated Use `skills` — kept for any legacy imports */
export const skillCategories = skillGroups.map((group) => ({
  id: group.id,
  name: group.name,
  skills: getSkillsByCategory(group.id).map((s) => s.name),
}));
