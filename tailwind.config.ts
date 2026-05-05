import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#38bdf8",
          hover: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "#d4d4d8",
            "--tw-prose-headings": "#fafafa",
            "--tw-prose-bold": "#fafafa",
            "--tw-prose-links": "#38bdf8",
            "--tw-prose-code": "#fafafa",
            "--tw-prose-quotes": "#a1a1aa",
            "--tw-prose-quote-borders": "#27272a",
            "--tw-prose-hr": "#27272a",
            "--tw-prose-th-borders": "#3f3f46",
            "--tw-prose-td-borders": "#27272a",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
