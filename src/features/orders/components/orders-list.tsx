// src/features/orders/components/orders-list.tsx

import { Order } from "../types/order";

import { OrderCard } from "./order-card";

type Props = {
    orders: Order[];
};

export function OrdersList({ orders = [] }: Props) {
    
    const safeOrders = Array.isArray(orders) ? orders : [];

    return (
        <div className="space-y-4">

            {safeOrders.map((order) => (
                <OrderCard
                    key={order.id}
                    order={order}
                />
            ))}

        </div>
    );
}
