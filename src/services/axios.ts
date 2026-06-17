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

let refreshTokenPromise: Promise<string> | null = null;

const setAuthToken = (config: any) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

axiosInstance.interceptors.request.use(setAuthToken);

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = getRefreshToken();

                if (!refreshToken) {
                    removeTokens();
                    return Promise.reject(error);
                }

                // اگر پہلے سے refresh ہو رہا ہے تو انتظار کریں
                if (!refreshTokenPromise) {
                    refreshTokenPromise = authService
                        .refreshToken(refreshToken)
                        .then((tokens) => {
                            updateAccessToken(tokens.accessToken);
                            return tokens.accessToken;
                        })
                        .catch((err) => {
                            removeTokens();
                            throw err;
                        })
                        .finally(() => {
                            refreshTokenPromise = null;
                        });
                }

                const newToken = await refreshTokenPromise;
                originalRequest.headers.Authorization = `Bearer ${newToken}`;

                return axiosInstance(originalRequest);
            } catch {
                removeTokens();
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);
