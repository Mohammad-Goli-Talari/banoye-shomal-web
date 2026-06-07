// src/features/auth/services/auth-service.ts

import { authApi } from "../api/auth-api";

import { LoginRequest, RegisterRequest, AuthResponse } from "../types/auth";

export const authService = {
    login(data: LoginRequest): Promise<AuthResponse> {
        return authApi.login(data);
    },

    register(data: RegisterRequest): Promise<AuthResponse> {
        return authApi.register(data);
    },
};
