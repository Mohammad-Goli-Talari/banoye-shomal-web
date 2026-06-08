// src/features/auth/components/auth-guard.tsx

"use client";

import { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "../hooks/use-auth";

type Props = {
    children: ReactNode;
};

export function AuthGuard({ children }: Props) {
    const router = useRouter();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/login")
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    return children;
}
