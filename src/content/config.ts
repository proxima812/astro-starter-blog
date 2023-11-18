import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default(["Прочее"]),
      authors: z.array(z.string()).default(["Пользователь"]),
      categories: z.array(z.string()).default(["Другое"]),
      // Transform string to Date object
      pubDate: z.coerce.date().optional(),
      // updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { posts };
