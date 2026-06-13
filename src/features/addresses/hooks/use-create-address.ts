// src/features/addresses/hooks/use-create-address.ts

import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

import { appToast } from "@/lib/toast";

export function useCreateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addressesService.createAddress,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["addresses"],
            });

            appToast.success(
                "آدرس با موفقیت ثبت شد"
            );
        },

        onError: () => {
            appToast.error(
                "خطا در ثبت آدرس"
            );
        },
    });
}
