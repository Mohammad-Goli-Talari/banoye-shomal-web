// src/features/products/types/product-search.ts

export type ProductSearchParams = {
    search?: string;

    category?: string;

    sort?: ProductSort;

    minPrice?: number;

    maxPrice?: number;

    page?: number;

    limit?: number;

    onlyAvailable?: boolean;
};

export type ProductSort =
    | "newest"
    | "price-asc"
    | "price-desc";
