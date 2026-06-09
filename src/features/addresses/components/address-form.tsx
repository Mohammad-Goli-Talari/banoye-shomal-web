// src/features/addresses/components/address-form.tsx

"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { addressSchema, AddressSchema } from "../schemas/address-schema";

import { Address } from "../types/address";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

type Props = {
    defaultValues?: Partial<Address>;

    onSubmit: (
        data: AddressSchema
    ) => Promise<void>;

    submitText: string;
};

export function AddressForm({
    defaultValues,
    onSubmit,
    submitText,
}: Props) {
    const {
        register,

        handleSubmit,

        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<AddressSchema>({
        resolver: zodResolver(
            addressSchema
        ),

        defaultValues: {
            fullName:
                defaultValues?.fullName ?? "",

            phone:
                defaultValues?.phone ?? "",

            province:
                defaultValues?.province ?? "",

            city:
                defaultValues?.city ?? "",

            address:
                defaultValues?.address ?? "",

            postalCode:
                defaultValues?.postalCode ?? "",    
        },
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div>
                <label className="mb-2 block text-sm font-medium">
                    نام گیرنده
                </label>

                <Input
                    {...register(
                        "fullName"
                    )}
                />

                {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors.fullName
                                .message
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    شماره موبایل
                </label>

                <Input
                    {...register(
                        "phone"
                    )}
                />

                {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors.phone
                                .message
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    استان
                </label>

                <Input
                    {...register(
                        "province"
                    )}
                />

                {errors.province && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors.province
                                .message
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    شهر
                </label>

                <Input
                    {...register(
                        "city"
                    )}
                />

                {errors.city && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors.city
                                .message
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    آدرس
                </label>

                <Input
                    {...register(
                        "address"
                    )}
                />

                {errors.address && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors.address
                                .message
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    کد پستی
                </label>

                <Input
                    {...register(
                        "postalCode"
                    )}
                />

                {errors.postalCode && (
                    <p className="mt-1 text-sm text-red-500">
                        {
                            errors
                                .postalCode
                                .message
                        }
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={
                    isSubmitting
                }
            >
                {submitText}
            </Button>
        </form>
    );
}
