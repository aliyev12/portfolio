// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
// Remove this line
// import partytown from "@astrojs/partytown";

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

// // @ts-check
// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel";
// import sitemap from "@astrojs/sitemap";
// import partytown from "@astrojs/partytown";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [
//     react({
//       experimentalReactChildren: true,
//     }),
//     partytown({
//       config: {
//         forward: ["dataLayer.push"],
//       },
//     }),
//     tailwind({
//       applyBaseStyles: false,
//     }),
//     sitemap(),
//   ],
//   output: "server",
//   adapter: vercel(),
//   site: "https://www.aaliyev.com",
// });
