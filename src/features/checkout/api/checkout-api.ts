// src/features/checkout/api/checkout-api.ts

import { axiosInstance } from "@/services/axios";

import { CreateOrderResponse } from "../types/checkout";

export const checkoutApi = {
    createOrder(
        addressId: string
    ) {
        return axiosInstance.post<CreateOrderResponse>(
            "/checkout",
            {
                addressId,
            }
        );
    },
};
