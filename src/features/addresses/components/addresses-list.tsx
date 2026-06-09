// src/features/addresses/components/addresses-list.tsx

"use client";

import { useAddresses } from "../hooks/use-addresses";

import { AddressCard } from "./address-card";

export function AddressesList() {
    const {
        data,
        isLoading,
    } = useAddresses();

    if (isLoading) {
        return (
            <p>
                در حال دریافت آدرس‌ها...
            </p>
        );
    }

    if (!data?.length) {
        return (
            <p>
                هنوز آدرسی ثبت نشده است.
            </p>
        );
    }

    return (
        <div className="space-y-4">

            {data.map((address) => (
                <AddressCard
                    key={address.id}
                    address={address}
                />
            ))}

        </div>
    );
}
