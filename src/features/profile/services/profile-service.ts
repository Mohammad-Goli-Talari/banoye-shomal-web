import { profileApi } from "../api/profile-api";

export const profileService = {

    getProfile() {
        return profileApi.getProfile();
    },

    updateProfile(data: Parameters<typeof profileApi.updateProfile>[0]) {
        return profileApi.updateProfile(data);
    },

    changePassword(data: Parameters<typeof profileApi.changePassword>[0]) {
        return profileApi.changePassword(data);
    },
};