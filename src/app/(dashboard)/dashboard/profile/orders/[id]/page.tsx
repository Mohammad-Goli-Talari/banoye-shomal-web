// src/app/(dashboard)/dashboard/profile/orders/[id]/page.tsx

import { OrderDetailsPageContent } from "@/features/orders/components/order-details-page-content";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function OrderPage({ params }: Props) {

    const { id } = await params;

    return (
        <OrderDetailsPageContent id={id} />
    );
}
