// src/features/addresses/services/addresses-service.ts

import { addressesApi } from "../api/addresses-api";

import { CreateAddressRequest, UpdateAddressRequest } from "../types/address";

export const addressesService = {
    async getAddresses() {
        const response =
            await addressesApi.getAddresses();

        return response.data;
    },

    async getAddressById(id: string) {
        const response = await addressesApi.getAddressById(id);

        return response.data;
    },

    async createAddress(data: CreateAddressRequest) {
        const response =
            await addressesApi.createAddress(data);

        return response.data;
    },

    async updateAddress(
        id: string,
        data: UpdateAddressRequest
    ) {
        const response =
            await addressesApi.updateAddress(
                id,
                data
            );

        return response.data;
    },

    async deleteAddress(id: string) {
        await addressesApi.deleteAddress(id);
    },
};
