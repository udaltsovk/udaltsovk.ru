// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://udaltsovk.ru",
  output: "static",
  integrations: [sitemap(), svelte()],
});
