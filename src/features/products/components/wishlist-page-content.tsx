// src/features/products/components/wishlist-page-content.tsx

"use client";

import { WishlistList } from "./wishlist-list";

export function WishlistPageContent() {
    return (
        <div className="space-y-8">

            <h1 className="text-3xl font-bold">
                علاقه‌مندی‌های من
            </h1>

            <WishlistList />

        </div>
    );
}
