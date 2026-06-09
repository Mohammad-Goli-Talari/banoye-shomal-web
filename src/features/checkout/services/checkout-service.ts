// src/features/checkout/api/checkout-service.ts

import { checkoutApi } from "../api/checkout-api";

export const checkoutService = {
    async createOrder(
        addressId: string
    ) {
        const response = await checkoutApi.createOrder(addressId);

        return response.data;
    },
};
