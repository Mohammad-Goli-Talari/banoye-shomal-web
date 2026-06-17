import { UseQueryOptions, UseMutationOptions, DefaultError } from "@tanstack/react-query";
import { showApiError } from "../api/error-handler";

export const createQueryOptions = <TData,>(
    defaultOptions?: Partial<UseQueryOptions<TData, DefaultError, TData>>
): UseQueryOptions<TData, DefaultError, TData> => ({
    staleTime: 5 * 60 * 1000, // 5 منٹ
    gcTime: 10 * 60 * 1000, // 10 منٹ
    retry: 1,
    ...defaultOptions,
});

export const createMutationOptions = <TData, TVariables,>(
    onSuccess?: (data: TData) => void,
    defaultOptions?: Partial<UseMutationOptions<TData, DefaultError, TVariables>>
): UseMutationOptions<TData, DefaultError, TVariables> => ({
    onError: (error) => {
        showApiError(error);
    },
    onSuccess: (data) => {
        onSuccess?.(data);
    },
    ...defaultOptions,
});
