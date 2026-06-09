// src/features/addresses/api/addresses-api.ts

import { axiosInstance } from "@/services/axios";

import { Address, CreateAddressRequest, UpdateAddressRequest } from "../types/address";


export const addressesApi = {
    getAddresses() {
        return axiosInstance.get<Address[]>(
            "/addresses"
        );
    },

    getAddressById(id: string) {
        return axiosInstance.get<Address>(
            `/addresses/${id}`
        );
    },

    createAddress(
        data: CreateAddressRequest
    ) {
        return axiosInstance.post<Address>(
            "/addresses", data
        );
    },

    updateAddress(
        id: string,
        data: UpdateAddressRequest
    ) {
        return axiosInstance.put<Address>(
            `/addresses/${id}`, data
        );
    },

    deleteAddress(id: string) {
        return axiosInstance.delete(
            `/addresses/${id}`
        );
    },
};
