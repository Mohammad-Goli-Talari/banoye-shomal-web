// src/features/auth/hooks/use-login.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { authService } from "../services/auth-service";

import { LoginRequest } from "../types/auth";

import { useAppDispatch } from "@/store/hooks";

import { setUser } from "@/store/slices/auth/auth-slice";

export function useLogin() {
    const router = useRouter();

    const dispatch = useAppDispatch();

    return useMutation({
        mutationFn: (
            data: LoginRequest
        ) => authService.login(data),

        onSuccess: (data) => {

            dispatch(
                setUser(data.user)
            );

            localStorage.setItem(
                "accessToken", data.accessToken
            );

            localStorage.setItem(
                "refreshToken", data.refreshToken
            );

            router.push("/");
        },
    });
}
