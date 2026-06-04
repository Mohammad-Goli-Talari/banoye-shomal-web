// src/providers/index.tsx

"use client";

import { ReduxProvider } from "./redux-provider";
import { QueryProvider } from "./query-provider";

type Props = {
    children: React.ReactNode;
};

export function Providers({ children }: Props) {
    return (
        <ReduxProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </ReduxProvider>
    );
}
