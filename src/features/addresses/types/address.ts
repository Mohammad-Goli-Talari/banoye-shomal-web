// src/features/addresses/types/address.ts

export type Address = {
    id: string;

    fullName: string;

    phone: string;

    province: string;

    city: string;

    address: string;

    postalCode: string;
}

export type CreateAddressRequest = Omit<Address, "id">;

export type UpdateAddressRequest = Omit<Address, "id">;