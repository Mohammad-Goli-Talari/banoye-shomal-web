// src/components/layout/header/desktop-nav.tsx

import Link from "next/link"

import { NAVIGATION } from "@/constants/navigation";

export function DesktopNav() {
    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
                {NAVIGATION.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-sm font-medium transition hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
