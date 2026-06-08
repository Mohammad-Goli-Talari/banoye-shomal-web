// src/features/orders/components/orders-list.tsx

"use client";

import { useOrders } from "../hooks/use-orders";

import { OrderCard } from "./order-card";

export function OrdersList() {
    const { data, isLoading} = useOrders();

    if (isLoading) {
        return <p>در حال دریافت سفارش‌ها...</p>
    }

    if (!data?.length) {
        return (
            <p>
                هنوز سفارشی ثبت نشده است.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            
            {data.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
            
        </div>
    );
}
