// src/services/axios.ts

import axios from "axios";

import { getAccessToken, getRefreshToken, updateAccessToken, removeTokens } from "@/lib/utils/token-storage";

import { authService } from "@/features/auth/services/auth-service";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,

    headers: {
        "Content-Type": "application/json"
    },
});

let isRefreshing = false;

axiosInstance.interceptors.request.use(
    (config) => {

        const token = getAccessToken();

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    }
);

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest._retry) {

            originalRequest._retry = true;

            try {

                if (!isRefreshing) {

                    isRefreshing = true;

                    const refreshToken = getRefreshToken();

                    if (!refreshToken) {

                        removeTokens();

                        return Promise.reject(error);
                    }
                    
                    const tokens = await authService.refreshToken(refreshToken);

                    updateAccessToken(tokens.accessToken);

                    isRefreshing = false;
                }

                originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;

                return axiosInstance(originalRequest);
            } catch {

                removeTokens();

                isRefreshing = false;

                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);
