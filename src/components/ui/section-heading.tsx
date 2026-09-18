import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getMotionVariants } from "@/lib/animations";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useMotionPreference();
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const variants = getMotionVariants(reducedMotion);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      initial="hidden"
      animate={reducedMotion || isInView ? "visible" : "hidden"}
      variants={variants.fadeUp}
    >
      <h2 className="font-section text-foreground">{title}</h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-body text-foreground-muted"
          variants={variants.staggerItem}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
