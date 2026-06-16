// src/app/(private)/layout.tsx

import { AuthGuard } from "@/features/auth/components/auth-guard";

type Props = {
    children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {

    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
}
