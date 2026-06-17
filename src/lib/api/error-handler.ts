import { AxiosError } from "axios";
import { appToast } from "../toast";

export interface ApiError {
    message: string;
    statusCode: number;
    details?: Record<string, any>;
}

export const handleApiError = (error: unknown): ApiError => {
    if (error instanceof AxiosError) {
        const message = 
            error.response?.data?.message || 
            error.message || 
            "خطای نامعلوم رخ داده است";

        const statusCode = error.response?.status || 500;

        return {
            message,
            statusCode,
            details: error.response?.data,
        };
    }

    if (error instanceof Error) {
        return {
            message: error.message,
            statusCode: 500,
        };
    }

    return {
        message: "خطای نامعلوم رخ داده است",
        statusCode: 500,
    };
};

export const showApiError = (error: unknown) => {
    const apiError = handleApiError(error);
    appToast.error(apiError.message);
    return apiError;
};

export const showApiSuccess = (message: string = "عملیات با موفقیت انجام شد") => {
    appToast.success(message);
};
