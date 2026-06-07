// src/features/auth/hooks/use-register.ts

"use client";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { authService } from "../services/auth-service";

import { AuthResponse, RegisterRequest } from "../types/auth";

import { useAppDispatch } from "@/store/hooks";

import { setUser } from "@/store/slices/auth/auth-slice";

import { setTokens } from "@/lib/utils/token-storage";

 export function useRegister(){
    const router = useRouter();

    const dispatch = useAppDispatch();
    
    return useMutation<
        AuthResponse,
        Error,
        RegisterRequest
    >({
        mutationFn: (
            data: RegisterRequest
        ) => authService.register(data),

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
