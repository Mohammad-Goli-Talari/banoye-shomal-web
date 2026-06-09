// src/app/(dashboard)/dashboard/addresses/page.tsx

import { AddressesList } from "@/features/addresses/components/addresses-list";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AddressesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">

                <h1 className="text-3xl font-bold">
                    آدرس‌ها
                </h1>

                <Button asChild>
                    <Link
                        href="/dashboard/addresses/new"
                    >
                        افزودن آدرس
                    </Link>
                </Button>

            </div>

            <AddressesList />
        </div>
    );
}
