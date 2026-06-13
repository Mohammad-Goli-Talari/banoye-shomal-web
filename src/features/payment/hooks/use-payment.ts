// src/features/payment/hooks/use-payment.ts

import { useQuery } from "@tanstack/react-query";
import { paymentService } from "../services/payment-service";

export const usePayment = (orderId: string) => {
    return useQuery({
        queryKey: ["payment", orderId],
        queryFn: () => paymentService.getPayment(orderId),

        enabled: !!orderId,
    });
}
