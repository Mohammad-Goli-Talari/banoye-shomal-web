// src/app/(dashboard)/dashboard/orders/[id]/page.tsx

import { OrderDetails } from "@/features/orders/components/order-details";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default  async function OrderPage({params}: Props) {
    const { id } = await params;
     return (
        <OrderDetails orderId={id} />
     );
}
