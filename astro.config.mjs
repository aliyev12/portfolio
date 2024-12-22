// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://www.aaliyev.com",
});
