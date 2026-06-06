// src/features/auth/schemas/register-schema.ts

import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(2, "نام معتبر نیست"),

    lastName: z.string().min(2, "نام خانوادگی معتبر نیست"),

    phone: z.string().min(11, "شماره موبایل معتبر نیست"),

    password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
