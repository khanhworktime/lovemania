import { z } from "zod";

export const profileValidator = z.object({
  name: z.string().min(1),
  birthday: z.date().nullable(),
  gender: z.string(),
  bio: z.string().min(1),
  location: z.string().min(1),
  interests: z.array(z.string()),
});

export type Profile = z.infer<typeof profileValidator>;
