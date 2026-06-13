// src/features/auth/hooks/use-login.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { authService } from "../services/auth-service";

import { AuthResponse, LoginRequest } from "../types/auth";

import { useAppDispatch } from "@/store/hooks";

import { setUser } from "@/store/slices/auth/auth-slice";

import { setTokens } from "@/lib/utils/token-storage";

import { useCart } from "@/features/cart/hooks/use-cart";

import { useCartMerge } from "@/features/cart/hooks/use-cart-merge";

import { appToast } from "@/lib/toast";

export function useLogin() {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const { items } = useCart();

    const { merge } = useCartMerge();

    return useMutation<
        AuthResponse,
        Error,
        LoginRequest
    >({
        mutationFn: (
            data: LoginRequest
        ) => authService.login(data),

        onSuccess: async (data) => {

            dispatch(
                setUser(data.user)
            );

            setTokens(
                data.accessToken,
                data.refreshToken
            );

            if (items.length > 0) {
                await merge(items);
            }

            appToast.success(
                "ورود با موفقیت انجام شد"
            );

            router.push("/");
        },
        
        onError: () => {
            appToast.error(
                "خطا در ورود"
            );
        }
    });
}
