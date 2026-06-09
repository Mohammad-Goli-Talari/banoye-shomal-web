// src/features/checkout/components/checkout-submit.tsx

"use client";

import { Button } from "@/components/ui/button";

type Props = {
    isPending: boolean;

    disabled: boolean;

    onSubmit: () => void;
};

export function CheckoutSubmit({
    isPending,
    disabled,
    onSubmit,
}: Props) {
    return (
        <Button
            className="w-full"
            disabled={
                disabled ||
                isPending
            }
            onClick={onSubmit}
        >
            {isPending
                ? "در حال ثبت سفارش..."
                : "ثبت سفارش"}
        </Button>
    );
}
