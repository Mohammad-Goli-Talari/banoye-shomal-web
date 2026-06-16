// src/features/wishlist/hooks/use-add-to-wishlist.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { wishlistService } from "../services/wishlist-service";

import { useQueryClient } from "@tanstack/react-query";

export function useAddToWishlist() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: wishlistService.addToWishlist,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["wishlist"],
            });
        },
    });
}
