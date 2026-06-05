// src/features/products/components/product-info.tsx

import { Product } from "../types/product";

import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";

import { formatPrice } from "@/lib/format-price";

type Props = {
    product: Product;
};

export function ProductInfo({
    product, 
}: Props) {
    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                {product.title}
            </h1>

            <p className="text-lg text-gray-600">
                {product.shortDescription}
            </p>

            <div className="text-2xl font-bold text-primary">
                {formatPrice(product.price)} تومان
            </div>

            <AddToCartButton product={product} />

        </div>
    );
}
