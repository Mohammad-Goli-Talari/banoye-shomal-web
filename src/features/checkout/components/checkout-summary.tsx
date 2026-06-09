// src/features/checkout/components/checkout-summary.tsx

type Props = {
    itemsPrice: number;

    shippingPrice: number;

    payablePrice: number;
};

export function CheckoutSummary({
    itemsPrice,
    shippingPrice,
    payablePrice,
}: Props) {
    return (
        <div className="rounded-2xl border p-5">

            <h2 className="mb-5 text-xl font-bold">
                خلاصه سفارش
            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">
                    <span>
                        جمع کالاها
                    </span>

                    <span>
                        {itemsPrice.toLocaleString()}
                        {" "}
                        تومان
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>
                        هزینه ارسال
                    </span>

                    <span>
                        {shippingPrice.toLocaleString()}
                        {" "}
                        تومان
                    </span>
                </div>

                <hr />

                <div className="flex justify-between font-bold">
                    <span>
                        مبلغ قابل پرداخت
                    </span>

                    <span>
                        {payablePrice.toLocaleString()}
                        {" "}
                        تومان
                    </span>
                </div>

            </div>

        </div>
    );
}
