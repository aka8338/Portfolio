import {
  Award,
  Briefcase,
  Calendar,
  Code2,
  FolderKanban,
  type LucideIcon,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";

const totalSkills = skills.length;

export interface Metric {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
}

export const metrics: Metric[] = [
  {
    id: "projects",
    label: "Projects Delivered",
    value: "20+",
    icon: FolderKanban,
  },
  {
    id: "years",
    label: "Years of Experience",
    value: "5+",
    icon: Calendar,
  },
  {
    id: "experience",
    label: "Work Experiences",
    value: `${experiences.length}+`,
    icon: Briefcase,
  },
  {
    id: "skills",
    label: "Technical Skills",
    value: `${totalSkills}+`,
    icon: Code2,
  },
  {
    id: "certifications",
    label: "Certifications",
    value: "7+",
    icon: Award,
  },
];
