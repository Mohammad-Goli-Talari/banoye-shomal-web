// src/features/products/components/product-card-skeleton.tsx

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border p-4 space-y-4">

            <div className="aspect-square bg-gray-200 rounded-xl" />

            <div className="h-4 bg-gray-200 rounded w-3/4" />

            <div className="h-4 bg-gray-200 rounded w-1/2" />

            <div className="h-10 bg-gray-200 rounded-xl" />

        </div>
    );
};
