import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Background";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined;

const contactEndpoint =
  formspreeEndpoint ||
  `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)
      ?.value;
    if (honeypot) return;

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setStatusMessage("");

    const payload = contactEndpoint.includes("formsubmit.co")
      ? {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New portfolio message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }
      : {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean | string;
      } | null;

      if (
        !response.ok ||
        result?.success === false ||
        result?.success === "false"
      ) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setStatusMessage("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  };

  const contactLinks = [
    {
      href: `mailto:${siteConfig.email}`,
      label: siteConfig.email,
      icon: Mail,
    },
    {
      href: siteConfig.linkedin,
      label: "LinkedIn",
      icon: Linkedin,
    },
  ] as const;

  return (
    <section
      id="contact"
      className="py-section"
      aria-labelledby="contact-heading"
    >
      <Container>
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Drop me a message."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <AnimatedReveal variant="slideInLeft" className="space-y-6">
            <h3 id="contact-heading" className="sr-only">
              Contact information
            </h3>
            <ul className="space-y-4">
              {contactLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="inline-flex items-center gap-3 text-body text-foreground-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedReveal>

          <AnimatedReveal variant="slideInRight" delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
              noValidate
              whileHover={{ borderColor: "hsl(var(--accent) / 0.3)" }}
            >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-sm text-error"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  required
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-sm text-error"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {statusMessage && (
                <p
                  role="status"
                  className={cn(
                    "text-sm",
                    status === "success" ? "text-success" : "text-error",
                  )}
                >
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </div>
            </motion.form>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
