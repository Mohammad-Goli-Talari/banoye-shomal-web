// src/components/ui/logo.tsx

import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/icon.png"
                alt="بانوی شمال"
                width={79}
                height={40}
                priority
            />
        </Link>
    );
}
