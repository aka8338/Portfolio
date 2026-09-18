import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { getMotionVariants, type MotionVariantKey } from "@/lib/animations";
import { useMotionPreference } from "@/components/motion/MotionProvider";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  variant?: MotionVariantKey;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
}

export function AnimatedReveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  as = "div",
  once = true,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useMotionPreference();
  const isInView = useInView(ref, {
    once,
    amount: 0.2,
    margin: "0px 0px -40px 0px",
  });
  const variants = getMotionVariants(reducedMotion);

  const Component =
    as === "section"
      ? motion.section
      : as === "article"
        ? motion.article
        : as === "li"
          ? motion.li
          : motion.div;

  return (
    <Component
      ref={ref as never}
      className={cn(className)}
      initial="hidden"
      animate={reducedMotion || isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ delay: reducedMotion ? 0 : delay }}
    >
      {children}
    </Component>
  );
}

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedStagger({
  children,
  className,
  staggerDelay = 0.1,
}: AnimatedStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useMotionPreference();
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const variants = getMotionVariants(reducedMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={reducedMotion || isInView ? "visible" : "hidden"}
      variants={variants.staggerContainer}
      transition={{ staggerChildren: staggerDelay, delayChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const variants = getMotionVariants(useMotionPreference());

  return (
    <motion.div className={className} variants={variants.staggerItem}>
      {children}
    </motion.div>
  );
}
