// src/features/products/components/products-pagination.tsx

"use client";
type Props = {
    page: number;

    onPageChange: (page: number) => void;
};

export function ProductsPagination({ page, onPageChange }: Props) {
    return (
        <div className="flex gap-2">

            <button
                onClick={() =>
                    onPageChange(page - 1)
                }
                disabled={page <= 1}
            >
                قبلی
            </button>

            <span>
                صفحه {page}
            </span>

            <button
                onClick={() =>
                    onPageChange(page + 1)
                }
            >
                بعدی
            </button>

        </div>
    );
}
