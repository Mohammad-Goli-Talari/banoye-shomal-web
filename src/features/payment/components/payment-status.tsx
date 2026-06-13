// src/features/payment/components/payment-status.tsx

type Props = {
    status: 
    | "pending"
    | "paid"
    | "failed";
};

export function PaymentStatus({ status }: Props) {
    if (status === "paid") {
        return (
            <div
                className="
                    rounded-xl
                    border
                    border-green-500
                    bg-green-50
                    p-4
                    text-green-700
                "
            >
                ✅ پرداخت با موفقیت انجام شد.
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div
                className="
                    rounded-xl
                    border
                    border-red-500
                    bg-red-50
                    p-4
                    text-red-700
                "
            >
                ❌ پرداخت ناموفق بود.
            </div>
        );
    }

    return (
        <div
            className="
                rounded-xl
                border
                border-yellow-500
                bg-yellow-50
                p-4
                text-yellow-700
            "
        >
            ⌛ در انتظار پرداخت...
        </div>
    );
}
    