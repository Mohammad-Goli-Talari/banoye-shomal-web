// src/features/profile/schemas/profile-schema.ts

import { z } from "zod";

export const profileSchema = z.object({
    firstName: z
        .string()
        .min(2),

    lastName: z
        .string()
        .min(2),

    phone: z
        .string(),

    email: z
        .string()
        .email()
        .optional()
        .or(z.literal("")),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
