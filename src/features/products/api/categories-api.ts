// src/features/products/api/categories-api.ts

import { axiosInstance } from "@/services/axios";

import { Category } from "../types/category";

export const categoriesApi = {
    getCategories() {
        return axiosInstance.get<Category[]>(
            "/categories"
        );
    },
};
