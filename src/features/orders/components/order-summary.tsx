// src/features/orders/components/order-summary.tsx

import { Order } from "../types/order";

import { formatPrice } from "@/lib/format-price";

type Props = {
    order: Order;
};

export function OrderSummary({ order }: Props) {

    const totalItems  = order.items.reduce(
        (total, item) => total + item.quantity, 0
    );

    return (
        <div className="space-y-4">

            <h2 className="text-2xl font-bold">
                خلاصه سفارش
            </h2>

            <div className="rounded-2xl border p-5 space-y-3">

                <p>
                    تاریخ ثبت:
                    {" "}
                    {
                        new Date(
                            order.createdAt
                        ).toLocaleDateString("fa-IR")
                    }
                </p>

                <p>
                    تعداد اقلام:
                    {" "}
                    {totalItems}
                </p>

                <p className="font-bold">

                    مبلغ نهایی:
                    {" "}

                    {
                        formatPrice(
                            order.totalPrice
                        )
                    }

                    {" "}
                    تومان

                </p>

            </div>

        </div>
    );
}
