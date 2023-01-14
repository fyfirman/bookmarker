import { z } from "zod";

export const exampleSchema = z.object({
  name: z.string(),
  id: z.union([z.number(), z.string()]),
});

export type Example = z.infer<typeof exampleSchema>;
