import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Background";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { getMotionVariants, scaleOnHover } from "@/lib/animations";

const socialLinks = [
  { href: siteConfig.linkedin, label: "LinkedIn profile", icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: "Send email", icon: Mail },
] as const;

export function Hero() {
  const reducedMotion = useMotionPreference();
  const variants = getMotionVariants(reducedMotion);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center pt-24"
      aria-labelledby="hero-heading"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.staggerContainer}
          className="max-w-3xl"
        >
          <motion.p
            variants={variants.staggerItem}
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={variants.heroTitle}
            className="font-hero text-gradient animate-text-shimmer"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={variants.staggerItem}
            className="mt-4 text-xl font-medium text-foreground md:text-2xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            variants={variants.staggerItem}
            className="mt-6 max-w-2xl text-body text-foreground-muted"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={variants.staggerItem}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div {...(reducedMotion ? {} : scaleOnHover)}>
              <Button asChild size="lg" className="shadow-lg shadow-accent/30">
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div {...(reducedMotion ? {} : scaleOnHover)}>
              <Button asChild variant="outline" size="lg">
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={variants.staggerItem}
            className="mt-10 flex items-center gap-3"
          >
            {socialLinks.map(({ href, label, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: reducedMotion ? 0 : 0.8 + index * 0.12,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={reducedMotion ? {} : { y: -5, scale: 1.1 }}
              >
                <Button asChild variant="ghost" size="icon">
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-accent md:bottom-20"
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reducedMotion ? 0 : 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
