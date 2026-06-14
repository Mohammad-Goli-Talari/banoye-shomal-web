// src/lib/utils/token-storage.ts

export function setTokens(
    accessToken: string,
    refreshToken: string
) {

    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem(
        "accessToken", accessToken
    );

    localStorage.setItem(
        "refreshToken", refreshToken
    );
}

export function removeTokens() {

    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export function getAccessToken() {

    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem("accessToken");
}

export function getRefreshToken() {

    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem("refreshToken");
}

export function updateAccessToken(accessToken: string) {

    if (typeof window === "undefined") {
        return;
    }

    localStorage.setItem("accessToken", accessToken);
}
