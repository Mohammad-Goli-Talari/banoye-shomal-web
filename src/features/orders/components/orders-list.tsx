// src/features/orders/components/orders-list.tsx

import { Order } from "../types/order";

import { OrderCard } from "./order-card";

// orders: Order[];
type Props = {
    orders?: Order[];
};

// { orders }
export function OrdersList({ orders = [] }: Props) {

    return (
        <div className="space-y-4">

            {orders.map((order) => (
                <OrderCard
                    key={order.id}
                    order={order}
                />
            ))}

        </div>
    );
}
