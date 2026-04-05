import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-secondary)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        warning: "var(--color-warning)",
        escalation: "var(--color-escalation)",
        success: "var(--color-success)",
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "640px",
      },
      spacing: {
        rhythm: "4px",
      },
      boxShadow: {
        "active-glow": "0 0 0 1px var(--color-accent), 0 0 32px -8px rgba(77, 124, 254, 0.45)",
        "evidence": "0 0 0 1px var(--color-border), 0 12px 40px -16px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [],
};

export default config;
