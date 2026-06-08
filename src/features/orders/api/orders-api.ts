// src/features/orders/api/orders-api.ts

import { axiosInstance } from "@/services/axios";

import { Order } from "../types/order";

export const ordersApi = {
    async getOrders(): Promise<Order[]> {
        const response = await axiosInstance.get<Order[]>(
            "/orders"
        );

        return response.data;
    },

    async getOrderById(id: string): Promise<Order> {
        const response = await axiosInstance.get<Order>(
            `/orders/${id}`
        );

        return response.data;
    },
};
