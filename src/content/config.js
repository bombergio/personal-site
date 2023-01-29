import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
  }),
});
export const collections = {
  'blog': blogCollection,
};
