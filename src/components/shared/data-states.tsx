import { ReactNode } from "react";

interface LoadingStateProps {
    isLoading: boolean;
    children: ReactNode;
    fallback?: ReactNode;
}

export function LoadingState({
    isLoading,
    children,
    fallback = <div className="text-center py-8">در حال بارگذاری...</div>,
}: LoadingStateProps) {
    if (isLoading) return <>{fallback}</>;
    return <>{children}</>;
}

interface ErrorStateProps {
    error?: string | null;
    children: ReactNode;
    fallback?: (error: string) => ReactNode;
}

export function ErrorState({
    error,
    children,
    fallback,
}: ErrorStateProps) {
    if (error) {
        return (
            <>
                {fallback?.(error) ?? (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                        {error}
                    </div>
                )}
            </>
        );
    }
    return <>{children}</>;
}

interface DataStateProps {
    isLoading: boolean;
    error?: string | null;
    isEmpty: boolean;
    children: ReactNode;
    loadingFallback?: ReactNode;
    errorFallback?: (error: string) => ReactNode;
    emptyFallback?: ReactNode;
}

export function DataState({
    isLoading,
    error,
    isEmpty,
    children,
    loadingFallback,
    errorFallback,
    emptyFallback,
}: DataStateProps) {
    if (isLoading) {
        return (
            <>
                {loadingFallback ?? (
                    <div className="text-center py-8">در حال بارگذاری...</div>
                )}
            </>
        );
    }

    if (error) {
        return (
            <>
                {errorFallback?.(error) ?? (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                        {error}
                    </div>
                )}
            </>
        );
    }

    if (isEmpty) {
        return (
            <>
                {emptyFallback ?? (
                    <div className="text-center py-8 text-gray-500">
                        هیچ داده‌ای پیدا نشد
                    </div>
                )}
            </>
        );
    }

    return <>{children}</>;
}
