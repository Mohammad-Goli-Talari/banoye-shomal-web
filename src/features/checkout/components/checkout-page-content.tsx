// src/features/checkout/components/checkout-page-content.tsx

"use client";

import { useState } from "react";

import { useAddresses } from "@/features/addresses/hooks/use-addresses";

import { CheckoutAddresses } from "./checkout-addresses";

import { useAppSelector } from "@/store/hooks";

import { CheckoutSummary } from "./checkout-summary";

import { useRouter } from "next/navigation";

import { CheckoutSubmit } from "./checkout-submit";

import { useCreateOrder } from "../hooks/use-create-order";

export function CheckoutPageContent() {
    
    const {
        data: addresses = [],
        isLoading,
    } = useAddresses();

    const [ selectedAddressId, setSelectedAddressId ] = useState("");

    const router = useRouter();

    const createOrderMutation = useCreateOrder();

    const cartItems = useAppSelector(
        (state) => state.cart.items
    );

    const itemsPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const shippingPrice = itemsPrice > 0 ? 50000 : 0;

    const payablePrice = itemsPrice + shippingPrice;

    const handleCreateOrder = async () => {

        if (!selectedAddressId) {
            return;
        }

        const result = await createOrderMutation.mutateAsync(selectedAddressId);

        router.push(`/payment/${result.orderId}`);
    };

    if (isLoading) {
        return (
            <p>
                در حال دریافت آدرس‌ها...
            </p>
        );
    }

    return (
        <div className="space-y-8">

            <h1 className="text-3xl font-bold">
                نهایی کردن سفارش
            </h1>

            <CheckoutAddresses
                addresses={addresses}
                selectedAddressId={
                    selectedAddressId
                }
                onSelect={
                    setSelectedAddressId
                }
            />

            <CheckoutSummary
                itemsPrice={itemsPrice}
                shippingPrice={shippingPrice}
                payablePrice={payablePrice}
            />

            <CheckoutSubmit
                isPending={
                    createOrderMutation.isPending
                }
                disabled={
                    !selectedAddressId
                }
                onSubmit={
                    handleCreateOrder
                }
            />

        </div>
    );
}
