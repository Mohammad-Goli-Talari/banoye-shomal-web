// src/features/addresses/hooks/use-delete-address.ts

import { useQueryClient } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

import { appToast } from "@/lib/toast";

export function useDeleteAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => addressesService.deleteAddress(id),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["addresses"],
            });

            appToast.success(
                "آدرس حذف شد"
            );
        },
        onError: () => {
            appToast.error(
                "حذف آدرس ناموفق بود"
            );
        },

    });
}
