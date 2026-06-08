// src/app/(dashboard)/dashboard/orders/page.tsx

import { OrdersList } from "@/features/orders/components/orders-list";

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <h1>سفارش های من</h1>

            <OrdersList />

        </div>
    );
}
