// src/features/auth/hooks/use-auth.ts

"use client";

import { useAppSelector } from "@/store/hooks";

import { selectUser, selectIsAuthenticated } from "@/store/slices/auth/selectors";

export function useAuth() {
    const user = useAppSelector(selectUser);

    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    return { user, isAuthenticated, };
}
