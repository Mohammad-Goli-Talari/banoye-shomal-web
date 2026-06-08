// src/features/dashboard/components/dashboard-sidebar.tsx

"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { dashboardLinks } from "../constants/nav-links";

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside
            className="
                rounded-2xl
                border
                p-4
            "
        >
            <nav>
                <ul className="space-y-2">

                    {dashboardLinks.map((link) => {

                        const isActive =
                            pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`
                                        block
                                        rounded-xl
                                        px-4
                                        py-3
                                        transition
                                        ${
                                            isActive
                                                ? "bg-primary text-white"
                                                : "hover:bg-muted"
                                        }
                                    `}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </nav>
        </aside>
    );
}
