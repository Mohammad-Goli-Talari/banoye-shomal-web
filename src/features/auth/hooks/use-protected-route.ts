// src/features/auth/hooks/use-protected-route.ts

"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "./use-auth";

export function useProtectedRoute() {
    const route = useRouter();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        
        if (!isAuthenticated) {
            route.replace("/login");
        }
    }, [isAuthenticated, route]);

    return { isAuthenticated, };
}
