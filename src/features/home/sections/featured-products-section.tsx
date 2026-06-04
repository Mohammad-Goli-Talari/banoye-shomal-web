// src/features/home/sections/featured-products-section.tsx

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { ProductCard } from "@/features/products/components/product-card";

const products = [
  {
    id: "1",
    title: "ترشی سیر",
    price: 250000,
    image: "",
    slug: "torshi-sir",
    isAvailable: true,
  },

  {
    id: "2",
    title: "زیتون پرورده",
    price: 180000,
    image: "",
    slug: "zeytoon-parvardeh",
    isAvailable: true,
  },

  {
    id: "3",
    title: "مربای بهارنارنج",
    price: 220000,
    image: "",
    slug: "moraba-baharnarenj",
    isAvailable: true,
  },

  {
    id: "4",
    title: "شیرینی محلی",
    price: 190000,
    image: "",
    slug: "shirini-mahali",
    isAvailable: true,
  },
];

export function FeaturedProductsSection() {
    return (
        <Section className="">

            <Container>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        محصولات ویژه
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </Container>

        </Section>
    );
}