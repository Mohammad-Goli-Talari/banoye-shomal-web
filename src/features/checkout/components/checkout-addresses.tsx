// src/features/checkout/components/checkout-addresses.tsx

"use client";

import { Address } from "@/features/addresses/types/address";

type Props = {
    addresses: Address[];

    selectedAddressId: string;
    
    onSelect: (
        addressId: string 
    ) => void;
};

export function CheckoutAddresses({
    addresses,
    selectedAddressId,
    onSelect,
}: Props) {
    if (!addresses.length) {
        return (
            <p>
                هیچ آدرسی ثبت نشده است.
            </p>
        );
    }

    return (
        <div className="space-y-4">

            <h2 className="text-xl font-bold">
                انتخاب آدرس
            </h2>

            {addresses.map((address) => {

                const isSelected =
                    selectedAddressId ===
                    address.id;

                return (
                    <label
                        key={address.id}
                        className={`
                            block
                            cursor-pointer
                            rounded-2xl
                            border
                            p-4
                            transition
                            ${
                                isSelected
                                    ? "border-primary"
                                    : ""
                            }
                        `}
                    >
                        <input
                            type="radio"
                            name="address"
                            checked={isSelected}
                            onChange={() =>
                                onSelect(
                                    address.id
                                )
                            }
                            className="hidden"
                        />

                        <div className="space-y-2">

                            <p>
                                {address.fullName}
                            </p>

                            <p>
                                {address.phone}
                            </p>

                            <p>
                                {address.province}
                                {" - "}
                                {address.city}
                            </p>

                            <p>
                                {address.address}
                            </p>

                        </div>

                    </label>
                );
            })}

        </div>
    );
}
