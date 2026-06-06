// src/features/auth/hooks/use-register.ts

"use client";

 import { useMutation } from "@tanstack/react-query";

 import { useRouter } from "next/navigation";

 import { authService } from "../services/auth-service";

 import { RegisterRequest } from "../types/auth";

 import { useAppDispatch } from "@/store/hooks";

 import { setUser } from "@/store/slices/auth/auth-slice";

 export function useRegister(){
    const router = useRouter();

    const dispatch = useAppDispatch();
    
    return useMutation({
        mutationFn: (
            data: RegisterRequest
        ) => authService.register(data),

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