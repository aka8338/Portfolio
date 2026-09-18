import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { getMotionVariants } from "@/lib/animations";

export function Experience() {
  const reducedMotion = useMotionPreference();
  const variants = getMotionVariants(reducedMotion);

  return (
    <section
      id="experience"
      className="py-section"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I actually did."
        />

        <div className="relative space-y-10">
          <motion.div
            className="absolute bottom-0 left-[7px] top-2 hidden w-px origin-top bg-gradient-to-b from-accent via-accent/50 to-transparent md:block"
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants.lineGrow}
          />

          {experiences.map((role, index) => (
            <AnimatedReveal
              key={role.id}
              as="article"
              variant={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
              delay={index * 0.15}
              className="relative md:pl-10"
            >
              <motion.div
                className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-accent bg-background shadow-[0_0_16px_hsl(var(--accent)/0.6)] md:block"
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reducedMotion ? 0 : index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 260,
                }}
              />

              <motion.div
                className="rounded-xl border border-border bg-card p-6 backdrop-blur-sm md:p-8"
                whileHover={reducedMotion ? {} : { y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3
                      id={index === 0 ? "experience-heading" : undefined}
                      className="text-xl font-semibold text-foreground"
                    >
                      {role.title}
                    </h3>
                    <p className="mt-1 font-medium text-accent">{role.company}</p>
                    <p className="text-sm text-foreground-muted">
                      {role.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-foreground-muted md:text-right">
                    {role.startDate} – {role.endDate}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 text-body text-foreground-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
