// src/features/payment/components/payment-page-content.tsx

"use client";

import { usePayment } from "../hooks/use-payment";

import { PaymentStatus } from "./payment-status";

type Props = {
    orderId: string;
};

export function PaymentPageContent({ orderId }: Props) {
    const { data , isLoading } = usePayment(orderId);

    if (isLoading) {
        return (
            <p>
                در حال دریافت اطلاعات پرداخت...
            </p>
        );
    }

    if (!data) {
        return (
            <p>
                اطلاعات پرداخت پیدا نشد.
            </p>
        );
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                پرداخت سفارش
            </h1>

            <PaymentStatus
                status={data.status}
            />

            <div className="rounded-2xl border p-5">

                <p>
                    مبلغ:
                    {" "}
                    {data.amount.toLocaleString()}
                    {" "}
                    تومان
                </p>

                <button
                    className="
                        mt-4
                        rounded-xl
                        bg-primary
                        px-5
                        py-3
                        text-white
                    "
                    onClick={() => {
                        window.location.href =
                            data.paymentUrl;
                    }}
                >
                    پرداخت
                </button>

            </div>

        </div>
    );
}
