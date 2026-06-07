// src/features/auth/hooks/use-logout.ts

"use client";

import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/store/hooks";

import { logout } from "@/store/slices/auth/auth-slice";

import { removeTokens } from "@/lib/utils/token-storage";

export function useLogout() {
    const dispatch = useAppDispatch();

    const router = useRouter();

    const handleLogout = () => {

        removeTokens();

        dispatch(logout());

        router.push("/");
    };

    return { logout: handleLogout, };
}
