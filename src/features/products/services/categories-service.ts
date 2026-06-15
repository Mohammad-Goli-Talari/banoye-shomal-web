// src/features/products/services/categories-service.ts

import { categoriesApi } from "../api/categories-api";

export const categoriesService = {
    async getCategories() {
        const response = await categoriesApi.getCategories();

        return response.data;
    },
};
