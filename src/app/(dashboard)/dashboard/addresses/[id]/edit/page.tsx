// src/app/(dashboard)/dashboard/addresses/[id]/edit/page.tsx

import { EditAddressPageContent } from "@/features/addresses/components/edit-address-page-content";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditAddressPage({ params }: Props) {
    const { id } = await params;

    return (
        <EditAddressPageContent id={id} />
    );
}
