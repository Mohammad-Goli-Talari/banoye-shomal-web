// src/features/orders/components/order-status-badge.tsx

import { OrderStatus } from "../types/order";

import { ORDER_STATUS_LABELS } from "../constants/order-status";

type Props = {
    status: OrderStatus;
};

export function OrderStatusBadge({
    status,
}: Props) {

    return (
        <span
            className="
                rounded-full
                border
                px-3
                py-1
                text-sm
            "
        >
            {ORDER_STATUS_LABELS[status]}
        </span>
    );
}
