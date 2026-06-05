// src/features/products/data/products.ts

import { Product } from "../types/product";

export const products: Product[] = [
    {
        id: "1",

        slug: "zeytoon-parvarde",

        title: "زیتون پرورده",

        price: 250000,

        image: "/images/products/zeytoon.webp",

        shortDescription:
        "زیتون پرورده اصیل شمال",

        description:
        "تهیه شده از زیتون مرغوب، رب انار و سبزیجات معطر محلی",

        ingredients: [
        "زیتون",
        "رب انار",
        "گردو",
        "سبزی معطر",
        ],

        category: "ترشیجات",

        isAvailable: false,
    },
];
