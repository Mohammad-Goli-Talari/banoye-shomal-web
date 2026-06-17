export type Profile = {
    id: string;

    firstName: string;

    lastName: string;

    phone: string;

    email?: string;
};

export type UpdateProfileRequest = {
    firstName: string;

    lastName: string;

    email?: string;
};

export type ChangePasswordRequest = {
    currentPassword: string;

    newPassword: string;
};
