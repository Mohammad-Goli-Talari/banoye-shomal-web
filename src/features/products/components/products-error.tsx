// src/features/products/components/products-error.tsx

export function ProductsError() {
  return (
        <div className="text-center py-20 space-y-3">

            <h2 className="text-xl font-bold text-red-500">
                خطا در دریافت محصولات
            </h2>

            <p className="text-gray-500">
                لطفاً دوباره تلاش کنید
            </p>

        </div>
    );
};