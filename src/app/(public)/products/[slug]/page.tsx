// src/app/(public)/products/[slug]/page.tsx
import { ProductDetailsPageContent } from "@/features/products/components/product-details-page-content";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    return <ProductDetailsPageContent slug={slug} />;
}
