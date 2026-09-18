export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Academy",
    issuedDate: "Jun 2026",
    credentialUrl: "https://verify.skilljar.com/c/xicm5gx3h9kv",
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic Academy",
    issuedDate: "Jun 2026",
    credentialUrl: "https://verify.skilljar.com/c/7qpxbtsg2263",
  },
  {
    id: "coursera-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    issuedDate: "Mar 2025",
    credentialUrl:
      "https://coursera.org/share/5567abd076bb6af2eb3447e2a21326ae",
  },
  {
    id: "fcc-ml-python",
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    issuedDate: "Feb 2025",
    credentialUrl:
      "https://freecodecamp.org/certification/fcc67969b78-e334-4ee5-a4a6-1b536c63db95/machine-learning-with-python-v7",
  },
];
