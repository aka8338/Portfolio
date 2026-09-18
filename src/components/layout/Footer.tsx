import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Background";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";

export function Footer() {
  const reducedMotion = useMotionPreference();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatedReveal as="section" variant="fadeUp">
      <footer className="border-t border-border py-8">
        <Container className="flex items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            {siteConfig.name} &copy; {new Date().getFullYear()}
          </p>
          <motion.div
            whileHover={reducedMotion ? {} : { y: -4, scale: 1.1 }}
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </Container>
      </footer>
    </AnimatedReveal>
  );
}
