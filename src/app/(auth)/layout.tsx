// src/app/(auth)/layout.tsx

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-secondary px-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-md">
                {children} 
            </div>
        </main>
    );
}
