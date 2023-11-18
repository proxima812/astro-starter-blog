import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/config/settings";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  integrations: [tailwind(), sitemap(), mdx(), react()],
});
