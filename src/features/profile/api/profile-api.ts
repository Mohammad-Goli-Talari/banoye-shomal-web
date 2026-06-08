import { axiosInstance } from "@/services/axios";

import { Profile } from "../types/profile";

export const profileApi = {
    getProfile() {
        return axiosInstance.get<Profile>("/profile");
    },

    updateProfile(
        data: Partial<Profile>
    ) {
        return axiosInstance.patch<Profile>("/profile", data);
    },
};
