// src/features/products/types/product.ts

export type Product = {
    id: string;

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

export type ProductCardItem = Pick<
  Product,
  "id" | "title" | "price" | "image" | "slug" | "isAvailable"
>;

export type CartProduct = Pick<
    Product,
    "id" | "title" | "price" | "image"
>;
