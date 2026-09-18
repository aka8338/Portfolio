export type TestimonialType = "profile" | "feedback";
export type FeedbackDisplay = "quote" | "project";

export interface Testimonial {
  id: string;
  type: TestimonialType;
  quote: string;
  author: string;
  date?: string;
  verified?: boolean;
  rating?: number;
  displayAs?: FeedbackDisplay;
  source: "Upwork" | "LinkedIn" | "Client";
}

/** Upwork profile testimonials and post-project client feedback. */
export const testimonials: Testimonial[] = [
  {
    id: "upwork-tomas-g",
    type: "profile",
    quote:
      "I had the pleasure of working with Aklilu Beyero, a talented developer skilled in React Native, React JS, Node JS, Python, Flask, and Machine Learning. He consistently delivered high-quality work, communicated clearly, and solved complex problems efficiently. Highly recommended for any project.",
    author: "Tomas G.",
    date: "Jul 2025",
    verified: true,
    source: "Upwork",
  },
  {
    id: "upwork-review-live-app",
    type: "feedback",
    quote:
      "Aklilu did a great job. He is highly motivated and worked as a full stack developer maintaining a live application. He communicated well and delivered reliably. Highly recommended.",
    author: "Jakob W.",
    date: "Jun 2026",
    rating: 5,
    source: "Upwork",
  },
  {
    id: "upwork-review-dedicated",
    type: "feedback",
    quote:
      "Aklilu Beyero is the most dedicated and skilled freelancer I've had the pleasure of working with. His work consistently demonstrates a high level of professionalism and technical skill.",
    author: "Thomas Garben",
    rating: 5,
    source: "Upwork",
  },
  {
    id: "upwork-review-mern",
    type: "feedback",
    quote: "Thank you",
    author: "Robin Ayers",
    rating: 5,
    displayAs: "project",
    source: "Upwork",
  },
  {
    id: "upwork-review-ai-agents",
    type: "feedback",
    quote:
      "Aklilu did a great job as a Full-stack developer on our AI Agents Development project. He worked with React, Supabase, and Express to build reliable and efficient features.",
    author: "Jakob W.",
    date: "Oct 2025",
    rating: 5,
    source: "Upwork",
  },
];
