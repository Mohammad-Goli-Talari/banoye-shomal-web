// src/features/orders/components/order-card.tsx

import { Order } from "../types/order";

import Link from "next/link";

type Props = {
    order: Order;
};

export function OrderCard({ order, }: Props) {
    return (
        <div className="rounded-2xl border p-5">

            <div className="space-y-2">

                <p>
                    سفارش #{order.id}
                </p>

                <p>
                    وضعیت:
                    {" "}
                    {order.status}
                </p>

                <p>
                    مبلغ:
                    {" "}
                    {order.totalPrice.toLocaleString()}
                    {" "}
                    تومان
                </p>

            </div>

            <div className="mt-4">

                <Link
                    href={`/dashboard/orders/${order.id}`}
                    className="
                        inline-flex
                        text-sm
                        font-medium
                        text-primary
                    "
                >
                    مشاهده جزئیات
                </Link>

            </div>

        </div>
    );
}
