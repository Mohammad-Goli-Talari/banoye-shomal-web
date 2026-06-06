// src/features/auth/api/auth-api.ts

import { axiosInstance } from "@/services/axios";
import { LoginRequest, RegisterRequest, AuthResponse } from "../types/auth";

export const authApi = {
    async login(data: LoginRequest): Promise<AuthResponse> {

        const response = await axiosInstance.post<AuthResponse>(
            "/auth/login", data
        );

        return response.data;
    },

    async register(data: RegisterRequest): Promise<AuthResponse> {

        const response = await axiosInstance.post<AuthResponse>(
            "auth/register", data
        );

        return response.data;
    },
};
