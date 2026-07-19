import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const journal = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/journal",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        category: z.string().default("General"),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    journal,
};
