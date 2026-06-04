// src/lib/format-price.ts

export function formatPrice(price: number) {
    return new Intl.NumberFormat("fa-IR").format(price);
}