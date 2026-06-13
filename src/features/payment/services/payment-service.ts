// src/features/payment/services/payment-service.ts

import { paymentApi } from "../api/payment-api";

import { VerifyPaymentRequest, VerifyPaymentResponse } from "../types/payment";

export const paymentService = {
    async getPayment(orderId: string) {
        const response = await paymentApi.getPayment(orderId);

        return response.data;
    },

    async verifyPayment(data: VerifyPaymentRequest): Promise<VerifyPaymentResponse> {
        const response = await paymentApi.verifyPayment(data);

        return response.data;
    },
};
