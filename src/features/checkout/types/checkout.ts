// src/features/checkout/types/checkout.ts

import { Address } from "@/features/addresses/types/address";

import { CartItem } from "@/store/slices/cart/types";

export type CheckoutSummary = {
    items: CartItem[];

    address: Address;

    totalPrice: number;

    shippingPrice: number;

    payablePrice: number;
};

export type CreateOrderResponse = {
    orderId: string;

    paymentUrl: string;
};

export type CreateOrderRequest = {
    addressId: string;

    items: {
        productId: string;

        quantity: number;
    }[];
};
