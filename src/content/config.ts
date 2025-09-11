// @ts-ignore
import { defineCollection, z } from "astro:content";

const events = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        link: z.string().trim().url().optional(),
        band: z.array(z.string()).optional(),
        note: z.string().optional(),
    }),
});

const bands = defineCollection({
    type: "data",
    schema: z.object({
        band: z.string(),
        link: z.string().trim().url().optional(),
        note: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const pages = defineCollection({
    type: "data",
});
export const collections = { events, bands, pages };
