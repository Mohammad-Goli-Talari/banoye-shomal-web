// src/app/(dashboard)/dashboard/addresses/new/page.tsx

"use client";

import { useRouter } from "next/navigation";

import { AddressForm } from "@/features/addresses/components/address-form";

import { useCreateAddress } from "@/features/addresses/hooks/use-create-address";

import { AddressSchema } from "@/features/addresses/schemas/address-schema";

export default function NewAddressPage() {
    const router = useRouter();

    const createAddressMutation = useCreateAddress();

    const handleSubmit = async (
        data: AddressSchema
    ) => {
        await createAddressMutation.mutateAsync(data);

        router.push("/dashboard/addresses");
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    افزودن آدرس جدید
                </h1>

                <p className="mt-2 text-muted-foreground">
                    آدرس تحویل سفارش را ثبت کنید.
                </p>
            </div>

            <div className="rounded-2xl border p-6">
                <AddressForm
                    onSubmit={handleSubmit}
                    submitText="ثبت آدرس"
                />
            </div>
        </div>
    );
}