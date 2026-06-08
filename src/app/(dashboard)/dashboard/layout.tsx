// src/app/(dashboard)/dashboard/layout.tsx

import { ReactNode } from "react";

import { Container } from "@/components/ui/container";

import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import { AuthGuard } from "@/features/auth/components/auth-guard";

type Props = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    return (
        <AuthGuard>
            <Container>

                <div
                    className="
                        grid
                        gap-6
                        py-10
                        lg:grid-cols-[280px_1fr]
                    "
                >

                    <DashboardSidebar />

                    <main>
                        {children}
                    </main>

                </div>

            </Container>
        </AuthGuard>
    );
}
