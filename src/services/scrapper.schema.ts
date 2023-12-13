import { z } from "zod";

export const seoDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  icoUrl: z.string(),
  ogImage: z.string(),
});

export type SeoData = z.infer<typeof seoDataSchema>;
