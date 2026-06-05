// src/store/slices/cart/types.ts

import { CartProduct } from "@/features/products/types/product";

export type CartItem = CartProduct & {
    quantity: number;
};
