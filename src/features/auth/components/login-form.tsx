 // src/features/auth/components/login-form.tsx

"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "../schemas/login-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";

import { useLogin } from "../hooks/use-login";

export function LoginForm() {
    const {
        register,

        handleSubmit,

        formState: { errors, isSubmitting },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
            password: "",
        },
    });

    const loginMutation = useLogin();

    const onSubmit = async (
        data: LoginSchema
    ) => {
        await loginMutation.mutateAsync(data);
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
                        ورود به حساب کاربری
                    </h1>
                </div>
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
                    placeholder="رمز عبور"
                    autoComplete="current-password"
                    {...register("password")}
                />

                {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:opacity-80"
                >
                    رمز عبور را فراموش کرده‌اید؟
                </Link>
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={
                    isSubmitting || 
                    loginMutation.isPending
                }
            >
                {loginMutation.isPending
                ? "در حال ورود..."
                : "ورود"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                حساب کاربری ندارید؟{" "}
                <Link
                    href="/register"
                    className="font-medium text-primary hover:opacity-80"
                >
                    ثبت نام
                </Link>
            </p>
        </form>
    );
}
