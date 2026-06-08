// src/components/layout/header/user-menu.tsx

"use client";

import Link from "next/link";

import { useAuth } from "@/features/auth/hooks/use-auth";

import { useLogout } from "@/features/auth/hooks/use-logout";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger, 
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
    const { user } = useAuth();
    
    const { logout } = useLogout();

    if (!user) {
        return null;
    }

    return (
        <DropdownMenu>

            <DropdownMenuTrigger className="text-sm font-medium">
                {user.firstName} {user.lastName}
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end">

                <DropdownMenuItem>
                    <Link href={"/dashboard/profile"}>
                        پروفایل
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href={"/dashboard/order"}>
                        سفارش ها
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={logout}>
                    خروج
                </DropdownMenuItem>

            </DropdownMenuContent>
            
        </DropdownMenu>
    );
}
