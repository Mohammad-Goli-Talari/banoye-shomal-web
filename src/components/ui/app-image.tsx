// src/components/ui/app-image.tsx

import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/cn";

type AppImageProps = ImageProps & {
    className?: string;
};

export function AppImage({
    className,
    alt,
    ...props
}: AppImageProps) {
    return (
        <Image
            alt={alt}
            className={cn(
                "object-cover",
                className
            )}
            {...props}
        />
    );
}