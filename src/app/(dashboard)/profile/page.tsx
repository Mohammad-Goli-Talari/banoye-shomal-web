// src/app/(dashboard)/profile/page.tsx

import { ProtectedRoute } from "@/features/auth/components/protected-route";

export function ProfilePage() {
    return (
        <ProtectedRoute>
            <div>
                پروفایل کاربر
            </div>
        </ProtectedRoute>
    );
}
