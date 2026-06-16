// src/features/wishlist/hooks/use-remove-from-wishlist.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { wishlistService } from "../services/wishlist-service";

import { useQueryClient } from "@tanstack/react-query";

export function useRemoveFromWishlist() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: wishlistService.removeFromWishlist,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["wishlist"], 
            });
        },
    });
}
