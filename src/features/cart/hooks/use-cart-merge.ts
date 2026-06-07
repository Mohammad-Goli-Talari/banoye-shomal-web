// src/features/cart/hooks/use-cart-merge.ts

"use client";

import { useAppDispatch } from "@/store/hooks";

import { clearCart, mergeCart } from "@/store/slices/cart/cart-slice";

import { cartService } from "../services/cart-service";

import { CartItem } from "@/store/slices/cart/types";

export function useCartMerge() {

    const dispatch =
        useAppDispatch();

    const merge = async (
        guestItems: CartItem[]
    ) => {
        const mergedCart = await cartService.mergeCart(guestItems);

        dispatch(clearCart());

        dispatch(
            mergeCart(
                mergedCart
            )
        );
    };

    return { merge, };
}
