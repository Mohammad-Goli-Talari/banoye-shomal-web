// src/features/profile/hooks/use-update-profile.ts

"use client";

import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

import { profileService } from "../services/profile-service";

import { QUERY_KEYS } from "@/constants/query-keys";

export function useUpdateProfile() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: profileService.updateProfile,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: QUERY_KEYS.PROFILE,
            });
        },
    });
}
