// src/features/checkout/api/checkout-api.ts

import { axiosInstance } from "@/services/axios";

import { CreateOrderResponse, CreateOrderRequest } from "../types/checkout";

export const checkoutApi = {
    createOrder(
        data: CreateOrderRequest
    ) {
        return axiosInstance.post<CreateOrderResponse>(
            "/orders", 
            data
        );
    },
};
