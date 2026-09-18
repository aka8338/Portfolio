import { motion } from "framer-motion";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedReveal,
  AnimatedStagger,
  AnimatedItem,
} from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";

export function About() {
  const reducedMotion = useMotionPreference();

  return (
    <section id="about" className="py-section" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Full-stack developer and AI trainer based in Addis Ababa."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr]">
          <AnimatedReveal variant="slideInLeft">
            <div className="relative mx-auto w-full max-w-[280px]">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 to-accent-secondary/30 blur-2xl"
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? {}
                    : { scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            <motion.img
              src="/Aklilu_Professional_Photo.jpg"
              alt="Portrait of Aklilu Beyero, Full-Stack Developer and AI Trainer"
              width={280}
              height={280}
              loading="lazy"
                className="relative aspect-square w-full rounded-2xl border border-border object-cover shadow-2xl shadow-accent/20"
                whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </AnimatedReveal>

          <AnimatedStagger className="space-y-5 text-body text-foreground-muted">
            <AnimatedItem>
              <p id="about-heading">
                I&apos;m Aklilu Beyero, a full-stack developer and AI trainer
                living in Addis Ababa. I have a degree in Computer Engineering
                from Addis Ababa University, and I&apos;ve been working in
                software for over five years.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p>
                I spent two years at Amplitude Ventures, a venture studio in
                Norway, building web apps with React and Node.js. I also take
                on client work through Upwork and build my own projects on the
                side, including SME management tools, B2B ordering platforms,
                and hotel and hospital management systems.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p>
                Since May 2026 I&apos;ve been training AI models at AfterQuery.
                I review code, write tests, and work across Python, Go, Rust,
                and C/C++. A lot of the work involves reading unfamiliar
                codebases, catching bugs, and figuring out whether a solution
                would hold up in a real project.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p>
                I&apos;m available for full-time roles, contract work, and
                freelance projects. If that sounds like a fit,{" "}
                <a
                  href="#contact"
                  className="font-medium text-accent underline-offset-4 transition-colors hover:text-accent-secondary hover:underline"
                >
                  get in touch
                </a>
                .
              </p>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </Container>
    </section>
  );
}
