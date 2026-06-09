// src/features/addresses/hooks/use-create-address.ts

import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

export function useCreateAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addressesService.createAddress,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["addresses"],
            });
        },
    });
}
