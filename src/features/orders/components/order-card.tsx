// src/features/orders/components/order-card.tsx

import { Order } from "../types/order";

import Link from "next/link";

import { ORDER_STATUS_LABELS } from "../constants/order-status";

import { formatPrice } from "@/lib/format-price";

type Props = {
    order: Order;
};

export function OrderCard({ order, }: Props) {
    return (
        <Link
            href={`/orders/${order.id}`}
            className="
                block
                rounded-2xl
                border
                p-5
                transition
                hover:shadow-md
            "
        >

            <div className="flex items-center justify-between">

                <span className="font-bold">
                    سفارش #{order.id}
                </span>

                <span className="text-sm">
                    {
                        ORDER_STATUS_LABELS[
                            order.status
                        ]
                    }
                </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

                <span>
                    {new Date(
                        order.createdAt
                    ).toLocaleDateString("fa-IR")}
                </span>

                <span className="font-bold text-primary">
                    {formatPrice(
                        order.totalPrice
                    )}
                    {" "}
                    تومان
                </span>

            </div>

        </Link>
    );
}
