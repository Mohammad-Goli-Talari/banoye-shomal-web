// src/features/profile/components/profile-form.tsx

"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { UseProfile } from "../hooks/use-profile";
import { useUpdateProfile } from "../hooks/use-update-profile";

import { profileSchema , ProfileSchema } from "../schemas/profile-schema";

export function ProfileForm() {
    const { data } = UseProfile();

    const updateProfileMutation = useUpdateProfile();

    const { register, handleSubmit, formState: { errors, }, } = useForm<ProfileSchema>({
        resolver: zodResolver(profileSchema),
        values: {
            firstName: data?.firstName ?? "",

            lastName: data?.lastName ?? "",

            phone: data?.phone ?? "",

            email: data?.email ?? "",
        },
    });

    const onSubmit = async ( values: ProfileSchema ) => {
        await updateProfileMutation.mutateAsync(values)
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div>
                <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium"
                >
                    نام
                </label>

                <Input
                    id="firstName"
                    {...register("firstName")}
                />

                {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium"
                >
                    نام خانوادگی
                </label>

                <Input
                    id="lastName"
                    {...register("lastName")}
                />

                {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                >
                    شماره موبایل
                </label>

                <Input
                    id="phone"
                    disabled
                    {...register("phone")}
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                >
                    ایمیل
                </label>

                <Input
                    id="email"
                    {...register("email")}
                />

                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={
                    updateProfileMutation.isPending
                }
            >
                {
                    updateProfileMutation.isPending
                        ? "در حال ذخیره..."
                        : "ذخیره تغییرات"
                }
            </Button>
        </form>
    );
}