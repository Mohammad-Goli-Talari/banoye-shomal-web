// src/features/products/types/product.ts

export interface Product {
    id: string;

    title: string;
    
    price: number;

    image: string;

    slug: string;

    isAvailable: boolean;
}