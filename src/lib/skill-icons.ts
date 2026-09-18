import type { Skill } from "@/data/skills";

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/**
 * Verified icon URLs — overrides for broken CDN paths or dark-theme visibility.
 */
const ICON_URL_OVERRIDES: Record<string, string> = {
  tailwind: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  zustand: "/skills/zustand.svg",
  matlab: "/skills/matlab.svg",
  aws: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  jest: `${DEVICON_BASE}/jest/jest-plain.svg`,
  gradle: "https://cdn.simpleicons.org/gradle/23A96A",
  numpy: "https://cdn.simpleicons.org/numpy/4DABCF",
};

export function getSkillIconUrl(skill: Skill): string {
  if (ICON_URL_OVERRIDES[skill.id]) {
    return ICON_URL_OVERRIDES[skill.id];
  }

  if (skill.source === "simpleicons") {
    return `https://cdn.simpleicons.org/${skill.icon}/${skill.color ?? "A8B3C7"}`;
  }

  const variant = skill.variant ?? "original";
  return `${DEVICON_BASE}/${skill.icon}/${skill.icon}-${variant}.svg`;
}
