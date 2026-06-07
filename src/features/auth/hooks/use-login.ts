// src/features/auth/hooks/use-login.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { authService } from "../services/auth-service";

import { AuthResponse, LoginRequest } from "../types/auth";

import { useAppDispatch } from "@/store/hooks";

import { setUser } from "@/store/slices/auth/auth-slice";

import { setTokens } from "@/lib/utils/token-storage";


export function useLogin() {
    const router = useRouter();

    const dispatch = useAppDispatch();

    return useMutation<
        AuthResponse,
        Error,
        LoginRequest
    >({
        mutationFn: (
            data: LoginRequest
        ) => authService.login(data),

        onSuccess: (data) => {

            dispatch(
                setUser(data.user)
            );

            setTokens(
                data.accessToken,
                data.refreshToken
            );

            router.push("/");
        },
    });
}
