// src/features/profile/services/profile-service.ts

import { profileApi } from "../api/profile-api";

import { Profile } from "../types/profile";

export const profileService = {
    async gerProfile(): Promise<Profile> {
        const response = await profileApi.getProfile();

        return response.data;
    },

    async updateProfile(data: Partial<Profile>): Promise<Profile> {
            const response = await profileApi.updateProfile(data);

            return response.data;
    },
};
