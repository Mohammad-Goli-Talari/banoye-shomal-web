// src/features/products/components/product-gallery.tsx

import { AppImage } from "@/components/ui/app-image";

type Props = {
    image: string,
    title: string,
};

export function ProductGallery({
    image,
    title,
}: Props) {
    return (
        <div className="relative aspect-square overflow-hidden rounded-3xl border">

            <AppImage
                src={image}
                alt={title}
                fill
                className="object-cover"
            />

        </div>
    );
}
