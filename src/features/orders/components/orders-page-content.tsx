// src/features/orders/components/orders-page-content.tsx

"use client";

import { useOrders } from "../hooks/use-orders";

import { OrdersList } from "./orders-list";

import { OrdersEmpty } from "./orders-empty";

export function OrdersPageContent() {
    const { data: orders = [], isLoading } = useOrders();

    if (isLoading) {
        return (
            <p>
                در حال دریافت سفارش‌ها...
            </p>
        );
    }

    if (orders.length === 0) {
        return (
            <OrdersEmpty />
        );
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                سفارش‌های من
            </h1>

            <OrdersList orders={orders} />

        </div>
    );
}
