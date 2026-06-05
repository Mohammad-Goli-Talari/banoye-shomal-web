// src/features/cart/components/order-summary.tsx

"use client"

import { useAppSelector } from "@/store/hooks";

import { 
    selectCartItemsCount,
    selectCartSubtotal,
} from "@/store/slices/cart/selectors";

import { formatPrice } from "@/lib/format-price";

import { Button } from "@/components/ui/button";

export function OrderSummary() {
    const itemsCount = useAppSelector(selectCartItemsCount);

    const subtotal = useAppSelector(selectCartSubtotal);

    return (
        <aside className="rounded-2xl border p-6">

            <h2 className="mb-4 font-bold">
                خلاصه سفارش
            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>تعداد اقلام</span>

                    <span>{itemsCount}</span>

                </div>

                <div className="flex justify-between">

                    <span>جمع کل</span>

                    <span>
                        {formatPrice(subtotal)} تومان
                    </span>

                </div>

                <div className="flex justify-between">

                    <span>ارسال</span>

                    <span>رایگان</span>

                </div>

            </div>

            <Button
                className="mt-6 w-full"
            >
                ادامه خرید
            </Button>

        </aside>
    );
}
