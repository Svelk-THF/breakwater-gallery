// Defines the shape every artist entry must follow.
 
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
 
const artists = defineCollection({
  // Astro 6+ requires an explicit loader — glob() replaces the old type: "content".
  loader: glob({ pattern: "**/*.md", base: "./src/content/artists" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      photo: image(), // headshot used on both the card and the artist page
      excerpt: z.string(), // short blurb for the home page card
      website: z.string().url().optional(),
      workImages: z.array(image()).default([]), // the "{{Artist name}}'s work" grid
      featured: z.boolean().default(true), // set false to hide from the home grid without deleting the page
    }),
});
 
export const collections = { artists };
 