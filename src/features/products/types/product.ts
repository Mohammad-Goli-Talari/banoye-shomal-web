// src/features/products/types/product.ts

export type Product = {
    id: number;

    title: string;
    
    price: number;

    image: string;

    slug: string;

    isAvailable: boolean;

    shortDescription: string;

    description: string;

    ingredients: string[];

    category: string;

    weight?: string;
};