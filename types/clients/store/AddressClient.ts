import { Criteria } from "#types/api/global/query/Criteria";
import { CustomerAddress } from "#types/api/store/customer/address/CustomerAddress";
import { CustomerAddressBody } from "#types/api/store/customer/address/CustomerAddressBody";
import { EntitySearchResult } from "#types/api/store/EntitySearchResult";

export type AddressCreateRequest = CustomerAddressBody;
export type AddressCreateResponse = CustomerAddress;

export type AddressUpdateRequest = CustomerAddressBody;
export type AddressUpdateResponse = CustomerAddressBody;

export type AddressListRequest = Criteria;
export type AddressListResponse = EntitySearchResult & { elements?: Array<CustomerAddress> };
