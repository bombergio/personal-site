import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
  }),
});
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string(),
    source: z.string().optional(),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};
