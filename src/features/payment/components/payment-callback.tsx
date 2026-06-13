// src/features/payment/components/payment-callback.tsx

"use client";

import { useEffect } from "react";

import { useSearchParams } from "next/navigation";

import { useVerifyPayment } from "../hooks/use-verify-payment";

import { PaymentStatus } from "./payment-status";

export function PaymentCallback() {
    const searchParams = useSearchParams();

    const authority = searchParams.get("authority");

    const status = searchParams.get("status");

    const verifyMutation = useVerifyPayment();

    useEffect(() => {

        if (!authority) return;

        verifyMutation.mutate({
            authority,
            status: status ?? "",
        });

    }, [authority, status, verifyMutation]);

    if (verifyMutation.isPending) {
        return (
            <PaymentStatus
                status="pending"
            />
        );
    }

    if (verifyMutation.isSuccess) {
        return (
            <PaymentStatus
                status="paid"
            />
        );
    }

    if (verifyMutation.isError) {
        return (
            <PaymentStatus
                status="failed"
            />
        );
    }

    return null;
}
