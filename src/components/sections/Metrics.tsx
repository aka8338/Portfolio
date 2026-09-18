import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/data/metrics";
import { Container } from "@/components/layout/Background";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { getMotionVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

function AnimatedValue({
  value,
  reducedMotion,
}: {
  value: string;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(reducedMotion ? numeric : 0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setCount(numeric);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, numeric, reducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const reducedMotion = useMotionPreference();
  const variants = getMotionVariants(reducedMotion);

  return (
    <section
      aria-label="Portfolio metrics"
      className="relative -mt-6 pb-4 pt-2 md:-mt-10"
    >
      <Container>
        <motion.ul
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants.staggerContainer}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.li
                key={metric.id}
                variants={variants.scaleIn}
                transition={{ delay: reducedMotion ? 0 : index * 0.1 }}
              >
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-md md:p-6",
                    "transition-colors duration-500 hover:border-accent/40 hover:bg-card/80",
                  )}
                  whileHover={
                    reducedMotion
                      ? {}
                      : { y: -6, scale: 1.02 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20"
                    aria-hidden="true"
                  />

                  <motion.div
                    className="mb-4 inline-flex rounded-xl border border-accent/20 bg-accent/10 p-2.5 text-accent"
                    whileHover={reducedMotion ? {} : { rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </motion.div>

                  <p className="font-section text-3xl text-gradient md:text-4xl">
                    <AnimatedValue
                      value={metric.value}
                      reducedMotion={reducedMotion}
                    />
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground-muted transition-colors group-hover:text-foreground">
                    {metric.label}
                  </p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-accent-secondary group-hover:w-full"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
