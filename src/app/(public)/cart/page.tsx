// src/app/(public)/cart/page.tsx

import { Container } from "@/components/ui/container";

import { CartList } from "@/features/cart/components/cart-list";

import { OrderSummary } from "@/features/cart/order-summary";

export default function CartPage() {
    return (
        <Container>

            <div className="py-10">

                <h1 className="mb-8 text-3xl font-bold">
                    سبد خرید
                </h1>

                <div className="grid gap-8 lg:grid-cols-3">

                    <div className="lg:col-span-2">

                        <CartList />

                    </div>

                    <OrderSummary />

                </div>

            </div>

        </Container>
    );
}
