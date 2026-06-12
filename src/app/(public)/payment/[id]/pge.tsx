// src/app/(public)/checkout/payment/[id]/pge.tsx

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PaymentPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            Payment Page - Order #{id}
        </div>
    );
}
