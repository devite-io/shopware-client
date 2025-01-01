import { Criteria } from "#types/api/global/query/Criteria";
import { CustomerAddress } from "#types/api/store/customer/address/CustomerAddress";
import { CustomerAddressBody } from "#types/api/store/customer/address/CustomerAddressBody";

export type AddressCreateRequest = CustomerAddressBody;
export type AddressCreateResponse = CustomerAddress;

export type AddressUpdateRequest = CustomerAddressBody;
export type AddressUpdateResponse = CustomerAddressBody;

export type AddressListRequest = Criteria;
export type AddressListResponse = Array<CustomerAddress>;
