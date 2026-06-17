// src/features/orders/components/order-address.tsx

import { OrderAddress } from "../types/order";

type Props = {
    address?: OrderAddress;
};

export function OrderAddressSection({ address }: Props) {

    if (!address) {
        return null;
    }

    return (
        <div className="space-y-4">

            <h2 className="text-2xl font-bold">
                آدرس تحویل
            </h2>

            <div className="rounded-2xl border p-5 space-y-3">

                <p>
                    گیرنده:
                    {" "}
                    {address.receiverName}
                </p>

                <p>
                    تلفن:
                    {" "}
                    {address.phone}
                </p>

                <p>
                    آدرس:
                    {" "}
                    {address.address}
                </p>

            </div>

        </div>
    );
}
