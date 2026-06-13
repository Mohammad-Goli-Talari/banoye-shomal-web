// src/features/payment/components/payment-status.tsx

export type PaymentInfo = {
    orderId: string;

    amount: number;

    status:
    | "pending"
    | "paid"
    | "failed";

    paymentUrl: string;
};
