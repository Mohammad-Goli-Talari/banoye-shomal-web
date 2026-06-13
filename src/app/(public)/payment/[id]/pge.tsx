// src/app/(public)/checkout/payment/[id]/pge.tsx

import { PaymentPageContent } from "@/features/payment/components/payment-page-content";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PaymentPage({ params }: Props) {
    const { id } = await params;

    return (
        <PaymentPageContent orderId={id} />
    );
}
