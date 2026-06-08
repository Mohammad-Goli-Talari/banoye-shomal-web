// src/features/orders/types/order.ts

export type OrderStatus = 
    | "pending"
    | "paid"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";

export type OrderItem = {
    productId: string;

    title: string;

    image: string;

    price: number;

    quantity: number;
};

export type Order = {
    id: string;

    createdAt: string;

    totalPrice: number;

    status: OrderStatus;

    items: OrderItem[];

    address?: OrderAddress;
};

export type OrderAddress = {
    receiverName: string;

    phone: string;

    address: string;
};
