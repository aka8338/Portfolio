import { useState } from "react";
import { motion } from "framer-motion";
import {
  skillGroups,
  getSkillsByCategory,
  type Skill,
  type SkillGroup,
} from "@/data/skills";
import { getSkillIconUrl } from "@/lib/skill-icons";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { getMotionVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

function SkillIcon({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const reducedMotion = useMotionPreference();

  if (failed) {
    return (
      <span
        className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-sm font-bold text-accent"
        aria-hidden="true"
      >
        {skill.name.charAt(0)}
      </span>
    );
  }

  return (
    <motion.img
      src={getSkillIconUrl(skill)}
      alt=""
      width={32}
      height={32}
      loading="lazy"
      className="relative h-8 w-8 object-contain"
      aria-hidden="true"
      onError={() => setFailed(true)}
      whileHover={reducedMotion ? {} : { scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
    />
  );
}

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const reducedMotion = useMotionPreference();

  return (
    <motion.li
      className="group relative list-none"
      initial={reducedMotion ? {} : { opacity: 0, y: 16, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: reducedMotion ? 0 : index * 0.03,
        type: "spring",
        stiffness: 320,
        damping: 22,
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-2.5 rounded-xl p-3 transition-colors duration-300 hover:bg-white/[0.04]"
        whileHover={reducedMotion ? {} : { y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        title={skill.name}
      >
        <div
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-xl",
            "bg-[#141c28] shadow-inner shadow-black/25",
            "transition-all duration-300",
            "group-hover:bg-[#1a2535] group-hover:shadow-md group-hover:shadow-accent/10",
          )}
        >
          <SkillIcon skill={skill} />
        </div>
        <span className="max-w-[5.5rem] text-center text-xs font-medium leading-tight text-foreground-muted transition-colors group-hover:text-foreground sm:text-sm">
          {skill.name}
        </span>
      </motion.div>
    </motion.li>
  );
}

function SkillCategoryCard({
  group,
  categoryIndex,
  headingId,
}: {
  group: SkillGroup;
  categoryIndex: number;
  headingId?: string;
}) {
  const reducedMotion = useMotionPreference();
  const variants = getMotionVariants(reducedMotion);
  const categorySkills = getSkillsByCategory(group.id);

  return (
    <motion.article
      className={cn(
        "group/card relative overflow-hidden rounded-2xl",
        "bg-[#0d1219]/85 p-6 backdrop-blur-md sm:p-8",
        "shadow-lg shadow-black/25",
        "transition-colors duration-500 hover:bg-[#101820]/95",
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants.fadeUp}
      transition={{ delay: reducedMotion ? 0 : categoryIndex * 0.08 }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/6 blur-3xl"
        aria-hidden="true"
      />

      <header className="mb-6">
        <h3
          id={headingId}
          className="text-lg font-semibold text-foreground sm:text-xl"
        >
          {group.name}
        </h3>
        <p className="mt-1.5 text-sm text-foreground-muted sm:text-base">
          {group.description}
        </p>
      </header>

      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
        {categorySkills.map((skill, index) => (
          <SkillTile key={skill.id} skill={skill} index={index} />
        ))}
      </ul>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent/80 to-accent-secondary/80 group-hover/card:w-full"
        transition={{ duration: 0.55, ease: "easeOut" }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-section" aria-labelledby="skills-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-gradient-to-r from-accent/4 via-transparent to-accent-secondary/4 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies I use across full-stack development, AI training, and client work."
        />

        <AnimatedReveal variant="fadeUp">
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <SkillCategoryCard
                key={group.id}
                group={group}
                categoryIndex={index}
                headingId={index === 0 ? "skills-heading" : undefined}
              />
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
