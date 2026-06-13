// src/features/addresses/hooks/use-update-address.ts

import { useQueryClient } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

import { UpdateAddressRequest } from "../types/address";

import { appToast } from "@/lib/toast";

export function useUpdateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            data,
        }: {
            id: string;
            data: UpdateAddressRequest;
        }) => addressesService.updateAddress(
            id , data
        ),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["addresses"],
            });

            appToast.success(
                "آدرس بروزرسانی شد"
            );
        },

        onError: () => {
            appToast.error(
                "خطا در بروزرسانی آدرس"
            );
        },
    });
}
