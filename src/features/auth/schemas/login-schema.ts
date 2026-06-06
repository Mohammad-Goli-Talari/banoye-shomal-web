// src/features/auth/schemas/login-schema.ts

import { z } from "zod";

export const loginSchema = z.object({
    phone: z.string().min(11, "شماره موبایل معتبر نیست"),
    password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
