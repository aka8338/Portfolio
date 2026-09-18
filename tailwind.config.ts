/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          secondary: "hsl(var(--accent-secondary))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        success: "hsl(var(--success))",
        error: "hsl(var(--error))",
        ring: "hsl(var(--ring))",
        glow: "hsl(var(--glow))",
        "glow-secondary": "hsl(var(--glow-secondary))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.25rem, 4vw + 1rem, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        section: [
          "clamp(2rem, 2.5vw + 1rem, 2.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        body: [
          "clamp(1rem, 0.25vw + 0.9rem, 1.125rem)",
          { lineHeight: "1.7" },
        ],
      },
      spacing: {
        section: "clamp(5rem, 8vw, 7.5rem)",
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backdropBlur: {
        nav: "12px",
      },
    },
  },
  plugins: [],
};
