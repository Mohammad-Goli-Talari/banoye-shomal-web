// src/app/(dashboard)/dashboard/profile/page.tsx

"use client";

import { ProfileForm } from "@/features/profile/components/profile-form";

export default function ProfilePage() {

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    پروفایل
                </h1>

                <p className="text-muted-foreground">
                    اطلاعات حساب کاربری خود را مدیریت کنید.
                </p>
            </div>

            <ProfileForm />
        </div>
    );
}
