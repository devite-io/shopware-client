import { Criteria } from "../storeApi/query/Criteria";
import { CustomerAddress } from "../storeApi/customer/CustomerAddress";
import { CustomerAddressBody } from "../storeApi/customer/CustomerAddressBody";

export type AddressListRequest = Criteria;
export type AddressListResponse = Array<CustomerAddress>;

export type AddressCreateRequest = CustomerAddressBody;
export type AddressCreateResponse = CustomerAddress;

export type AddressUpdateRequest = CustomerAddressBody;
export type AddressUpdateResponse = CustomerAddressBody;
