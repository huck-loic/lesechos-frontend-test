import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: "var(--font-sans), sans-serif" },
          serif: { value: "var(--font-serif), serif" },
        },
      },
    },
  },

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
