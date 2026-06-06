// src/features/auth/services/auth-service.ts

import { authApi } from "../api/auth-api";

import { LoginRequest, RegisterRequest } from "../types/auth";

export const authService = {
    login(data: LoginRequest) {
        return authApi.login(data);
    },

    async register(data: RegisterRequest) {
        return authApi.register(data);
    },
};
