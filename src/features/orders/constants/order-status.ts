// src/features/orders/constants/order-status.ts

export const ORDER_STATUS_LABELS = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    processing: "در حال آماده‌سازی",
    shipped: "ارسال شده",
    delivered: "تحویل شده",
    cancelled: "لغو شده",
} as const;
