import { Criteria, CustomerAddress, CustomerAddressBody } from "../storeApi";

export type AddressListRequest = Criteria;
export type AddressListResponse = Array<CustomerAddress>;

export type AddressCreateRequest = CustomerAddressBody;
export type AddressCreateResponse = CustomerAddress;

export type AddressUpdateRequest = CustomerAddressBody;
export type AddressUpdateResponse = CustomerAddressBody;

export type AddressDeleteRequest = { id: string };
export type AddressDeleteResponse = { success?: boolean };
