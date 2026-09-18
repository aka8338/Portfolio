import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";

export function Certifications() {
  const reducedMotion = useMotionPreference();

  if (certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="py-section"
      aria-labelledby="certifications-heading"
    >
      <Container>
        <SectionHeading
          title="Certifications"
          subtitle="Formal training in machine learning and AI — with credentials to back it up."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <AnimatedReveal
              key={cert.id}
              variant="scaleIn"
              delay={index * 0.1}
            >
              <motion.article
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 backdrop-blur-sm transition-shadow duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
                whileHover={reducedMotion ? {} : { y: -4 }}
              >
                <h3
                  id={index === 0 ? "certifications-heading" : undefined}
                  className="text-lg font-semibold text-foreground"
                >
                  {cert.title}
                </h3>
                <p className="mt-2 text-accent">{cert.issuer}</p>
                <p className="mt-1 text-sm text-foreground-muted">
                  Issued {cert.issuedDate}
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </motion.article>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
