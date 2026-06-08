// src/components/layout/header/auth-actions.tsx

"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button"

import { useAuth } from "@/features/auth/hooks/use-auth";

import { UserMenu } from "./user-menu";

export function AuthActions() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <UserMenu />;
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                asChild
            >
                <Link href="/login">
                    ورود                
                </Link>
            </Button>

            <Button asChild>
                <Link href="/register">
                    ثبت نام
                </Link>
            </Button>
        </div>
    );
}