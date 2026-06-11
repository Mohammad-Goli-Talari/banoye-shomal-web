// src/features/checkout/hooks/use-create-order.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { checkoutService } from "../services/checkout-service";

export function useCreateOrder() {
    return useMutation({
        mutationFn:checkoutService.createOrder,

        onSuccess: (data) => {
            window.location.href =
                data.paymentUrl;
        },
    });
}
