import { axiosInstance } from "@/services/axios";

import {
    Profile,
    UpdateProfileRequest,
    ChangePasswordRequest,
} from "../types/profile";

export const profileApi = {

    async getProfile(): Promise<Profile> {

        const response =
            await axiosInstance.get<Profile>(
                "/profile"
            );

        return response.data;
    },

    async updateProfile(
        data: UpdateProfileRequest
    ): Promise<Profile> {

        const response =
            await axiosInstance.put<Profile>(
                "/profile",
                data
            );

        return response.data;
    },

    async changePassword(
        data: ChangePasswordRequest
    ) {

        await axiosInstance.put(
            "/profile/change-password",
            data
        );
    },
};
