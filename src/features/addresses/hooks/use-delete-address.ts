// src/features/addresses/hooks/use-delete-address.ts

import { useQueryClient } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

export function useDeleteAddress() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => addressesService.deleteAddress(id),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["addresses"],
            });
        },
    });
}
