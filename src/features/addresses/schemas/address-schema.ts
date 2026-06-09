// src/features/addresses/schemas/address-schema.ts

import { z } from "zod";

export const addressSchema = z.object({
    fullName: z.string().min(3, "نام گیرنده معتبر نیست"),

    phone: z
        .string()
        .min(11, "شماره موبایل معتبر نیست"),

    province: z
        .string()
        .min(2, "استان را وارد کنید"),

    city: z
        .string()
        .min(2, "شهر را وارد کنید"),

    address: z
        .string()
        .min(10, "آدرس کامل را وارد کنید"),

    postalCode: z
        .string()
        .min(10, "کد پستی معتبر نیست"),
});

export type AddressSchema = z.infer<typeof addressSchema>;
