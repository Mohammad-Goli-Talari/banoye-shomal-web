// src/components/layout/header/auth-actions.tsx

"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button"

export function AuthActions() {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return (
            <Button>
                پروفایل
            </Button>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
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