// src/features/addresses/hooks/use-addresses.ts

import { useQuery } from "@tanstack/react-query";

import { addressesService } from "../services/addresses-service";

export function useAddresses() {
    return useQuery({
        queryKey: ["addresses"],

        queryFn: () => addressesService.getAddresses(),
        
        select: (data) => data || [],
    });
}
