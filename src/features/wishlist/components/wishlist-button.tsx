// src/features/wishlist/components/wishlist-button.tsx

"use client";

import { useWishlist } from "@/features/wishlist/hooks/use-wishlist";

import { useAddToWishlist } from "@/features/wishlist/hooks/use-add-to-wishlist";

import { useRemoveFromWishlist } from "@/features/wishlist/hooks/use-remove-from-wishlist";

type Props = {
    productId: string;

};

export function WishlistButton({
    productId,
}: Props) {

    const { data: wishlist = [] } = useWishlist();

    const addMutation = useAddToWishlist();

    const removeMutation = useRemoveFromWishlist();

    const isFavorite = wishlist.some(
        (item) => item.id === productId
    );

    const handleClick = () => {
        if (isFavorite) {

            removeMutation.mutate(productId);
            
            return;
        }

        addMutation.mutate(productId);

    };

    return (
        <button
            onClick={handleClick}
            aria-label="wishlist"
        >
            {isFavorite
                ? "❤️"
                : "🤍"}
        </button>
    );
}
