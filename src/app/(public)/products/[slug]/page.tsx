// src/app/(public)/products/[slug]/page.tsx

import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { getProductBySlug } from "@/features/products/utils/get-product-by-slug";

import { Container } from "@/components/ui/container";

import { ProductGallery } from "@/features/products/components/product-gallery";
import { ProductInfo } from "@/features/products/components/product-info";
import { IngredientsSection } from "@/features/products/components/ingredients-section";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

async function getProduct(
    slug: string
) {
    return getProductBySlug(slug);
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { slug } = await params;

    const product = await getProduct(slug);

    if (!product) {
        return {
            title: "محصول یافت نشد",
        };
    }

    return {
        title: product.title,

        description: product.shortDescription,

        openGraph: {
            title: product.title,

            description: product.shortDescription,

            type: "website",

            locale: "fa_IR",

            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: product.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            title: product.title,

            description: product.shortDescription,

            images: [product.image],
        },

        alternates: {
            canonical: `https://banoyeshomal.ir/products/${product.slug}`,
        },
    };
}

export default async function ProductPage({
    params,
}: Props) {

    const { slug } = await params;

    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <Container>

            <div className="py-10">

                <div className="grid gap-10 lg:grid-cols-2">

                    <ProductGallery
                        image={product.image}
                        title={product.title}
                    />

                    <ProductInfo
                        product={product}
                    />

                </div>

                <IngredientsSection
                    ingredients={product.ingredients}
                />

            </div>

        </Container>
    );
}
