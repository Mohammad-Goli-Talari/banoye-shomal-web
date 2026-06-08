// src/features/orders/components/order-details.tsx

"use client";

import { useOrder } from "../hooks/use-orders";
 
type Props = {
    orderId: string;
};

export function OrderDetails({ orderId, }: Props) {
    const { data, isLoading, } = useOrder(orderId);

    if (isLoading) {
        return (
            <p>
                در حال دریافت اطلاعات...
            </p>
        );
    }

        if (!data) {
            return (
                <p>
                    سفارش پیدا نشد.
                </p>
            );
        }

        return (
        <div className="space-y-6">

            <div className="rounded-2xl border p-5">

                <h2 className="font-bold">
                    اطلاعات سفارش
                </h2>

                <div className="mt-4 space-y-2">

                    <p>
                        شماره سفارش:
                        {" "}
                        {data.id}
                    </p>

                    <p>
                        وضعیت:
                        {" "}
                        {data.status}
                    </p>

                    <p>
                        مبلغ:
                        {" "}
                        {data.totalPrice.toLocaleString()}
                    </p>

                </div>

            </div>

        </div>
    );
}
