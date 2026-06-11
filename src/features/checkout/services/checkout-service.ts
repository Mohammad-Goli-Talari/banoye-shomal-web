// src/features/checkout/services/checkout-service.ts

import { checkoutApi } from "../api/checkout-api";

import { CreateOrderResponse, CreateOrderRequest } from "../types/checkout";    

export const checkoutService = {
    async createOrder(
        data: CreateOrderRequest
    ): Promise<CreateOrderResponse> {
        const response = await checkoutApi.createOrder(data);

        return response.data;
    },
};
