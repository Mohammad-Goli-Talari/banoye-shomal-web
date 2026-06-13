// src/app/(public)/payment/callback/page.tsx
import { Suspense } from "react";

import { PaymentCallback  } from "@/features/payment/components/payment-callback";

export default function CallbackPage() {
    return (
        <Suspense>
            <PaymentCallback />
        </Suspense>
    );
}
