// src/features/payment/api/payment-api.ts

import { axiosInstance } from "@/services/axios";

import { PaymentInfo, VerifyPaymentRequest, VerifyPaymentResponse } from "../types/payment";

export const paymentApi=  {
    getPayment(orderId: string) {
        return axiosInstance.get<PaymentInfo>(`/payments/${orderId}`);
    },

    verifyPayment(data: VerifyPaymentRequest) {
        return axiosInstance.post<VerifyPaymentResponse>(
            "/payments/verify", 
            data
        );
    },

};
