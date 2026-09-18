import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMotionPreference } from "@/components/motion/MotionProvider";

export function Background() {
  const reducedMotion = useMotionPreference();

  const floatTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 8, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary" />
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 15%, transparent 75%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-glow blur-[140px]"
        animate={reducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-glow-secondary blur-[100px]"
        animate={reducedMotion ? {} : { y: [0, -30, 0], x: [0, 15, 0] }}
        transition={floatTransition}
      />
      <motion.div
        className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-glow blur-[90px]"
        animate={reducedMotion ? {} : { y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ ...floatTransition, duration: 10, delay: 1 }}
      />
      <motion.div
        className="absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-glow-secondary blur-[80px] opacity-60"
        animate={reducedMotion ? {} : { y: [0, -15, 0] }}
        transition={{ ...floatTransition, duration: 7, delay: 2 }}
      />
    </div>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "main";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-content px-6 md:px-8", className)}
    >
      {children}
    </Component>
  );
}
