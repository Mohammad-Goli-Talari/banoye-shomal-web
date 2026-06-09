// src/features/checkout/hooks/use-create-order.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { checkoutService } from "../services/checkout-service";

export function useCreateOrder() {
    return useMutation({
        mutationFn: (
            addressId: string
        ) =>
            checkoutService.createOrder(
                addressId
            ),
    });
}
