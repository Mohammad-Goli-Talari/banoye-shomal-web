// src/features/addresses/components/address-card.tsx

"use client";

import Link from "next/link";

import { Address } from "../types/address";

import { useDeleteAddress } from "../hooks/use-delete-address";

import { Button } from "@/components/ui/button";

type Props = {
    address: Address;
};

export function AddressCard({ address }: Props) {
    const deleteMutation = useDeleteAddress();

    const handleDelete = async () => {
        const confirmed = window.confirm("آیا از حذف این آدرس مطمئن هستید؟");

        if (!confirmed) {
            return;
        }

        await deleteMutation.mutateAsync(
            address.id
        );
    };

    return (
        <div className="rounded-2xl border p-5">

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

                <p>
                    کد پستی:
                    {" "}
                    {address.postalCode}
                </p>

            </div>

            <div className="mt-5 flex gap-3">

                <Button
                    asChild
                    variant="outline"
                >
                    <Link
                        href={`/dashboard/addresses/${address.id}/edit`}
                    >
                        ویرایش
                    </Link>
                </Button>

                <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={
                        deleteMutation.isPending
                    }
                >
                    حذف
                </Button>

            </div>

        </div>
    );
}
    