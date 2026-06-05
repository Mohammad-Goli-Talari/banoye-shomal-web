// src/components/ui/app-image.tsx

import Image, { ImageProps } from "next/image";

type AppImageProps = ImageProps & {
    fallbackSrc?: string;
};

export function AppImage({
    alt,
    fallbackSrc = "/images/placeholder.webp",
    ...props
}: AppImageProps) {
    return (
        <Image
            alt={alt}
            {...props}
        />
    );
}
