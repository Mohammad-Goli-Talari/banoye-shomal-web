"use client";

import { useCategories } from "../hooks/use-categories";

import { ProductSort } from "../types/product-search";

type Props = {
    category: string;

    sort: ProductSort | "";

    onCategoryChange: (
        value: string
    ) => void;

    onSortChange: (
        value: string
    ) => void;
};

export function ProductsFilters({
    category,
    sort,
    onCategoryChange,
    onSortChange,
}: Props) {

    const {
        data: categories,
    } = useCategories();
    
    const safeCategories = Array.isArray(categories) ? categories : [];

    return (
        <div
            className="
                flex
                flex-col
                gap-4
                md:flex-row
            "
        >

            <select
                value={category}
                onChange={(e) =>
                    onCategoryChange(
                        e.target.value
                    )
                }
            >

                <option value="">
                    همه دسته‌ها
                </option>

                {safeCategories.map((item) => (
                    <option
                        key={item.id}
                        value={item.slug}
                    >
                        {item.title}
                    </option>
                ))}

            </select>

            <select
                value={sort}
                onChange={(e) =>
                    onSortChange(
                        e.target.value
                    )
                }
            >

                <option value="">
                    مرتب سازی
                </option>

                <option value="price-asc">
                    ارزان‌ترین
                </option>

                <option value="price-desc">
                    گران‌ترین
                </option>

                <option value="newest">
                    جدیدترین
                </option>

            </select>

        </div>
    );
}
