// src/features/addresses/components/edit-address-page-content.tsx

"use client";

import { useRouter } from "next/navigation";

import { AddressForm } from "./address-form";

import { useAddress } from "../hooks/use-address";

import { useUpdateAddress } from "../hooks/use-update-address";

import { AddressSchema } from "../schemas/address-schema";

type Props = {
    id: string;
};

export function EditAddressPageContent({
    id,
}: Props) {
    const router = useRouter();

    const {
        data,
        isLoading,
    } = useAddress(id);

    const updateMutation =
        useUpdateAddress();

    const handleSubmit = async (
        formData: AddressSchema
    ) => {
        await updateMutation.mutateAsync({
            id,
            data: formData,
        });

        router.push(
            "/dashboard/addresses"
        );
    };

    if (isLoading) {
        return (
            <p>
                در حال دریافت اطلاعات...
            </p>
        );
    }

    if (!data) {
        return (
            <p>
                آدرس پیدا نشد.
            </p>
        );
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                ویرایش آدرس
            </h1>

            <div className="rounded-2xl border p-6">

                <AddressForm
                    defaultValues={data}
                    onSubmit={handleSubmit}
                    submitText="ذخیره تغییرات"
                />

            </div>

        </div>
    );
}
