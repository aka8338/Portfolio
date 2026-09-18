import type { Transition, Variants } from "framer-motion";

export type MotionVariantKey =
  | "fadeUp"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn"
  | "staggerContainer"
  | "staggerItem"
  | "badgePop"
  | "lineGrow"
  | "heroTitle";

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 14,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const badgePop: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
};

export const lineGrow: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 56, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05, y: -3 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.25, ease: "easeOut" as const },
};

export const viewportOnce = {
  once: true,
  amount: 0.2 as const,
  margin: "0px 0px -40px 0px" as const,
};

export const noMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" },
};

export function getMotionVariants(reducedMotion: boolean) {
  if (reducedMotion) {
    const still = noMotionVariants;
    return {
      fadeUp: still,
      fadeIn: still,
      slideInLeft: still,
      slideInRight: still,
      scaleIn: still,
      staggerContainer: still,
      staggerItem: still,
      badgePop: still,
      lineGrow: still,
      heroTitle: still,
    };
  }

  return {
    fadeUp,
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    badgePop,
    lineGrow,
    heroTitle,
  };
}
