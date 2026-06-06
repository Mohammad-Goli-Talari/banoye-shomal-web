// src/features/auth/types/auth.ts

export type User = {
    id: string;

    firstName: string;

    lastName: string;

    phone: string;

    email?: string
};

export type LoginRequest = {
    phone: string;

    password: string;
};

export type RegisterRequest = {
    firstName: string;

    lastName: string;

    phone: string;

    password: string;
};

export type AuthResponse = {
    user: User;

    accessToken: string;

    refreshToken: string;
};

export type AuthState = {
    user: User | null;

    isAuthenticated: boolean;
}
