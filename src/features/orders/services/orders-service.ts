// src/features/orders/services/orders-service.ts

import { ordersApi } from "../api/orders-api";

export const ordersService = {
    async getOrders() {
        return ordersApi.getOrders();
    },

    async getOrderById(id: string) {
        return ordersApi.getOrderById(id);
    },
};
