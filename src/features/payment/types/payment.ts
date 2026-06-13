// src/features/payment/types/payment.ts

export type PaymentInfo = {
    orderId: string;

    amount: number;

    status:
    | "pending"
    | "paid"
    | "failed";

    paymentUrl: string;
};

export type VerifyPaymentRequest = {
    authority: string;

    status: string;
};

export type VerifyPaymentResponse = {
    success: boolean;

    orderId: string;
};
