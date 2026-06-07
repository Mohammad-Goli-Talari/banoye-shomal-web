// src/lib/auth/token-storage.ts

export function setTokens(
    accessToken: string,
    refreshToken: string
) {
    localStorage.setItem(
        "accessToken", accessToken
    );

    localStorage.setItem(
        "refreshToken", refreshToken
    );
}
