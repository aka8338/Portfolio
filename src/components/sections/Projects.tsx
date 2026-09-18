import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectMedia } from "@/components/ui/project-media";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { cn } from "@/lib/utils";

export function Projects() {
  const reducedMotion = useMotionPreference();

  return (
    <section
      id="projects"
      className="py-section"
      aria-labelledby="projects-heading"
    >
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Things I've built — from side projects to production apps."
        />

        <div className="grid gap-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedReveal
                key={project.id}
                as="article"
                variant="scaleIn"
                delay={index * 0.12}
              >
                <motion.div
                  className={cn(
                    "group rounded-2xl border border-border bg-card p-6 backdrop-blur-sm md:p-8",
                    "transition-shadow duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/15",
                  )}
                  whileHover={reducedMotion ? {} : { y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div
                    className={cn(
                      "grid items-center gap-8 lg:grid-cols-2",
                      !isEven && "lg:[&>*:first-child]:order-2",
                    )}
                  >
                    <motion.div
                      whileHover={reducedMotion ? {} : { scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProjectMedia
                        projectTitle={project.title}
                        images={project.images}
                      />
                    </motion.div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          id={index === 0 ? "projects-heading" : undefined}
                          className="text-2xl font-semibold text-foreground"
                        >
                          {project.title}
                        </h3>
                        <Badge variant="accent">{project.category}</Badge>
                      </div>

                      <p className="mt-4 text-body text-foreground-muted">
                        {project.description}
                      </p>

                      <dl className="mt-6 space-y-4 text-sm">
                        {(
                          [
                            ["Challenge", project.challenge],
                            ["Solution", project.solution],
                            ["Outcome", project.outcome],
                          ] as const
                        ).map(([label, value]) => (
                          <div key={label}>
                            <dt className="font-medium text-accent">{label}</dt>
                            <dd className="mt-1 text-foreground-muted">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.liveUrl && (
                          <Button asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {project.liveLinkLabel ?? "Live Demo"}
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              {project.githubLinkLabel ?? "GitHub"}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
