// src/features/addresses/hooks/use-address.ts

import { useQuery } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

export function useAddress(id: string) {
    return useQuery({
        queryKey: ["addresses", id],

        queryFn: () => addressesService.getAddressById(id),

        enabled: !!id,
    });
}
