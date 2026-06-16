// src/features/orders/components/order-details.tsx

"use client";

import { useOrder } from "../hooks/use-orders";

import { ORDER_STATUS_LABELS } from "../constants/order-status";

import { formatPrice } from "@/lib/format-price";

type Props = {
    id: string;
};

export function OrderDetailsPageContent({ id, }: Props) {
    const { data: order, isLoading, } = useOrder(id);

    if (isLoading) {
        return (
            <p>
                در حال دریافت سفارش...
            </p>
        );
    }

        if (!order) {
            return (
                <p>
                    سفارش پیدا نشد.
                </p>
            );
        }

        return (
        <div className="space-y-8">

            <h1 className="text-3xl font-bold">
                جزئیات سفارش
            </h1>

            <div className="rounded-2xl border p-5 space-y-3">

                <p>
                    شماره سفارش:
                    {" "}
                    {order.id}
                </p>

                <p>
                    وضعیت:
                    {" "}
                    {
                        ORDER_STATUS_LABELS[
                            order.status
                        ]
                    }
                </p>

                <p>
                    مبلغ:
                    {" "}
                    {formatPrice(
                        order.totalPrice
                    )}
                    {" "}
                    تومان
                </p>

            </div>

        </div>
    );
}
