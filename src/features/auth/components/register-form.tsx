// src/features/auth/components/register-form.tsx

"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema, RegisterSchema } from "../schemas/register-schema"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";

import { useRegister } from "../hooks/use-register";

export function RegisterForm() {
    const {
        register,

        handleSubmit,

        formState: { errors, isSubmitting },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),  
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
        },
    });

    const registerMutation = useRegister();

    const onSubmit = async (
        data: RegisterSchema
    ) => { 
        registerMutation.mutateAsync(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
        >
            <div className="space-y-4 text-center">
                <div className="flex justify-center">
                    <Logo />
                </div>

                <div>
                    <h1 className="text-2xl font-bold">
                        ایجاد حساب کاربری
                    </h1>
                </div>
            </div>

            <div>
                <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium"
                >
                نام
                </label>

                <Input
                id="firstName"
                type="text"
                placeholder="محمد"
                autoComplete="given-name"
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
                type="text"
                placeholder="گلی تالاری"
                autoComplete="family-name"
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
                type="tel"
                placeholder="09119561327"
                autoComplete="tel"
                {...register("phone")}
                />

                {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                </p>
                )}
            </div>

            <div>
                <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
                >
                رمز عبور
                </label>

                <Input
                id="password"
                type="password"
                placeholder="حداقل ۸ کاراکتر"
                autoComplete="new-password"
                {...register("password")}
                />

                {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={
                    isSubmitting ||
                    registerMutation.isPending
                }
            >
                {registerMutation.isPending
                ? "در حال ثبت نام..."
                : "ثبت نام"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                حساب کاربری دارید؟{" "}
                <Link
                    href="/login"
                    className="font-medium text-primary hover:opacity-80"
                >
                    ورود
                </Link>
            </p>
        </form>
    );    
}
