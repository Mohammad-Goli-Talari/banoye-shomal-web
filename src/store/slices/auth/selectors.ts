// // src/store/slices/auth/selector.ts

import { RootState } from "@/store";

export const selectUser = (
    state: RootState
) => state.auth.user;

export const selectIsAuthenticated = (
    state: RootState
) => state.auth.isAuthenticated;
