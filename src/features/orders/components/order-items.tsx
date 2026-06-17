// src/features/orders/components/order-items.tsx

import { OrderItem } from "../types/order";

import { formatPrice } from "@/lib/format-price";

type Props = {
    items: OrderItem[];
};

export function OrderItems({ items }: Props) {

    return (
        <div className="space-y-4">

            <h2 className="text-2xl font-bold">
                محصولات سفارش
            </h2>

            {items.map((item) => (

                <div
                    key={item.productId}
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        p-4
                    "
                >

                    <div>

                        <h3 className="font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                            تعداد:
                            {" "}
                            {item.quantity}
                        </p>

                    </div>

                    <div className="font-bold">

                        {
                            formatPrice(
                                item.price *
                                item.quantity
                            )
                        }

                        {" "}
                        تومان

                    </div>

                </div>

            ))}

        </div>
    );
}
