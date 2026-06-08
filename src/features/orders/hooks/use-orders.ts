// src/features/orders/hooks/use-orders.ts

import { useQuery } from "@tanstack/react-query";

import { ordersService } from "../services/orders-service";

export function useOrders() {
    return useQuery({
        queryKey: ["orders"],

        queryFn: () => ordersService.getOrders(),
    });
}

export function useOrder(id: string) {
    return useQuery({
        queryKey: ["orders", id],

        queryFn: () => ordersService.getOrderById(id),

        enabled: !!id,
    });
}
