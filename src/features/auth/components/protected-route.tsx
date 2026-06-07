// src/features/auth/components/protected-route.tsx

"use client";

import { ReactNode } from "react";

import { useProtectedRoute } from "../hooks/use-protected-route";

type Props = {
    children: ReactNode;
};

export function ProtectedRoute({ children, }: Props) {

    const { isAuthenticated } = useProtectedRoute();

    if (!isAuthenticated) {
        return null;
    }

    return children;
}
