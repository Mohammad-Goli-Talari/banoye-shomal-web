// src/features/profile/hooks/use-profile.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { profileService } from "../services/profile-service";

import { QUERY_KEYS } from "@/constants/query-keys";

export function useProfile() {
    return useQuery({
        queryKey: QUERY_KEYS.PROFILE,

        queryFn: () => profileService.getProfile(),

    });
}
