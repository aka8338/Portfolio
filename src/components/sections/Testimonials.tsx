import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AnimatedReveal,
  AnimatedStagger,
  AnimatedItem,
} from "@/components/motion/AnimatedReveal";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { cn } from "@/lib/utils";

function authorInitial(author: string) {
  const letter = author.trim().charAt(0).toUpperCase();
  return letter || "?";
}

function ProfileTestimonial({
  testimonial,
  headingId,
}: {
  testimonial: Testimonial;
  headingId?: string;
}) {
  const reducedMotion = useMotionPreference();

  return (
    <motion.article
      className={cn(
        "group relative max-w-3xl overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-card/80 to-background-secondary/30 p-6 backdrop-blur-md sm:p-8",
        "shadow-lg shadow-black/10 transition-shadow duration-500",
        "hover:shadow-xl hover:shadow-accent/5",
      )}
      whileHover={reducedMotion ? {} : { y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        <Quote
          className="mt-1 h-7 w-7 shrink-0 text-accent/60"
          aria-hidden="true"
        />
        <p
          id={headingId}
          className="text-body leading-relaxed text-foreground"
        >
          {testimonial.quote}
        </p>
      </div>

      <footer className="relative mt-8 flex items-center gap-4 pt-2">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-sm font-semibold text-accent-foreground"
          aria-hidden="true"
        >
          {authorInitial(testimonial.author)}
        </div>

        <cite className="not-italic">
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground-muted">
            {testimonial.date && <span>{testimonial.date}</span>}
            {testimonial.date && testimonial.verified && (
              <span aria-hidden="true">·</span>
            )}
            {testimonial.verified && (
              <span className="inline-flex items-center gap-1 text-success">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Verified
              </span>
            )}
          </p>
        </cite>
      </footer>
    </motion.article>
  );
}

function FeedbackCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const reducedMotion = useMotionPreference();
  const rating = testimonial.rating ?? 5;
  const isProject = testimonial.displayAs === "project";

  return (
    <motion.blockquote
      className={cn(
        "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl p-6 sm:p-7",
        "bg-gradient-to-b from-[#174a42] to-[#0c2822]",
        "shadow-lg shadow-black/25",
        "hover:shadow-xl hover:shadow-emerald-950/40",
      )}
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,168,0,0.14),_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="font-serif text-xl leading-snug text-white sm:text-2xl">
          Completed successfully!
        </p>

        <div
          className="mt-3 flex gap-0.5"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: rating }).map((_, i) => (
            <motion.span
              key={i}
              className="inline-flex"
              initial={
                reducedMotion ? {} : { opacity: 0, scale: 0.5, y: 6 }
              }
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: reducedMotion ? 0 : index * 0.05 + i * 0.07,
                type: "spring",
                stiffness: 380,
                damping: 14,
              }}
            >
              <Star
                className="h-4 w-4 fill-[#5cb85c] text-[#5cb85c] sm:h-[18px] sm:w-[18px]"
                aria-hidden="true"
              />
            </motion.span>
          ))}
        </div>
      </div>

      <p
        className={cn(
          "relative mt-5 flex-1 leading-relaxed text-white/90",
          isProject
            ? "text-base sm:text-lg"
            : "text-sm sm:text-[0.95rem]",
        )}
      >
        {isProject ? testimonial.quote : `“${testimonial.quote}”`}
      </p>

      <footer className="relative mt-8 space-y-4">
        <cite className="block not-italic text-sm font-medium text-white/80 sm:text-base">
          {testimonial.author}
        </cite>
        <a
          href={siteConfig.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 font-serif text-lg font-bold tracking-wide text-white transition-colors hover:text-[#5cb85c]"
          aria-label="View Aklilu Beyero's Upwork profile"
        >
          <span>upwork</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
        </a>
      </footer>
    </motion.blockquote>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;

  const profileTestimonials = testimonials.filter((t) => t.type === "profile");
  const feedbackTestimonials = testimonials.filter((t) => t.type === "feedback");

  return (
    <section
      id="testimonials"
      className="relative py-section"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            className="mb-0"
            title="Testimonials"
            subtitle="Endorsements from past clients"
          />
          {feedbackTestimonials.length > 0 && (
            <a
              href={siteConfig.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-12 inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              View my Upwork profile
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="space-y-10">
          {profileTestimonials.length > 0 && (
            <AnimatedReveal variant="fadeUp">
              {profileTestimonials.map((testimonial, index) => (
                <ProfileTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                  headingId={index === 0 ? "testimonials-heading" : undefined}
                />
              ))}
            </AnimatedReveal>
          )}

          {feedbackTestimonials.length > 0 && (
            <AnimatedStagger
              className="grid gap-5 sm:grid-cols-2"
              staggerDelay={0.08}
            >
              {feedbackTestimonials.map((testimonial, index) => (
                <AnimatedItem key={testimonial.id} className="h-full">
                  <FeedbackCard testimonial={testimonial} index={index} />
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          )}
        </div>
      </Container>
    </section>
  );
}
