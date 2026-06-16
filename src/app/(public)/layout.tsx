// src/app/(public)/layout.tsx

import { MainLayout } from "@/components/layout/main-layout";

type Props = {
    children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}
