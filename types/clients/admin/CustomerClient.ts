import { Customer } from "#types/api/admin/customer/Customer";
import { CustomerAddress } from "#types/api/admin/customer/CustomerAddress";
import { CustomerRecovery } from "#types/api/admin/customer/CustomerRecovery";
import { CustomerGroup } from "#types/api/admin/customer/group/CustomerGroup";
import { CustomerWishlist } from "#types/api/admin/customer/wishlist/CustomerWishlist";
import { CustomerWishlistProduct } from "#types/api/admin/customer/wishlist/CustomerWishlistProduct";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Impersonation **/

export interface ImpersonationTokenRequest {
  customerId: string;
  salesChannelId: string;
}
export interface ImpersonationTokenResponse {
  token?: string;
}

/** Customers **/

export interface CustomerListResponse {
  total?: number;
  data?: Array<Customer>;
}

export type CustomerCreateRequest = Customer;
export type CustomerCreateResponse = { data: Customer };

export type CustomerListSearchRequest = Criteria;
export interface CustomerListSearchResponse {
  total?: number;
  data?: Array<Customer>;
}

export interface CustomerSingleResponse {
  data: Customer;
}

export type CustomerUpdateRequest = Customer;
export type CustomerUpdateResponse = { data: Customer };

export interface CustomerAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomerAggregationResponse {
  total?: number;
  data?: Array<Customer>;
}

/** Addresses **/

export interface AddressListResponse {
  total?: number;
  data?: Array<CustomerAddress>;
}

export type AddressCreateRequest = CustomerAddress;
export type AddressCreateResponse = { data: CustomerAddress };

export type AddressListSearchRequest = Criteria;
export interface AddressListSearchResponse {
  total?: number;
  data?: Array<CustomerAddress>;
}

export interface AddressSingleResponse {
  data: CustomerAddress;
}

export type AddressUpdateRequest = CustomerAddress;
export type AddressUpdateResponse = { data: CustomerAddress };

export interface AddressAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AddressAggregationResponse {
  total?: number;
  data?: Array<CustomerAddress>;
}

/** Groups **/

export interface GroupListResponse {
  total?: number;
  data?: Array<CustomerGroup>;
}

export type GroupCreateRequest = CustomerGroup;
export type GroupCreateResponse = { data: CustomerGroup };

export type GroupListSearchRequest = Criteria;
export interface GroupListSearchResponse {
  total?: number;
  data?: Array<CustomerGroup>;
}

export interface GroupSingleResponse {
  data: CustomerGroup;
}

export type GroupUpdateRequest = CustomerGroup;
export type GroupUpdateResponse = { data: CustomerGroup };

export interface GroupAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface GroupAggregationResponse {
  total?: number;
  data?: Array<CustomerGroup>;
}

/** Recoveries **/

export interface RecoveryListResponse {
  total?: number;
  data?: Array<CustomerRecovery>;
}

export type RecoveryCreateRequest = CustomerRecovery;
export type RecoveryCreateResponse = { data: CustomerRecovery };

export type RecoveryListSearchRequest = Criteria;
export interface RecoveryListSearchResponse {
  total?: number;
  data?: Array<CustomerRecovery>;
}

export interface RecoverySingleResponse {
  data: CustomerRecovery;
}

export type RecoveryUpdateRequest = CustomerRecovery;
export type RecoveryUpdateResponse = { data: CustomerRecovery };

export interface RecoveryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RecoveryAggregationResponse {
  total?: number;
  data?: Array<CustomerRecovery>;
}

/** Wishlists **/

export interface WishlistListResponse {
  total?: number;
  data?: Array<CustomerWishlist>;
}

export type WishlistCreateRequest = CustomerWishlist;
export type WishlistCreateResponse = { data: CustomerWishlist };

export type WishlistListSearchRequest = Criteria;
export interface WishlistListSearchResponse {
  total?: number;
  data?: Array<CustomerWishlist>;
}

export interface WishlistSingleResponse {
  data: CustomerWishlist;
}

export type WishlistUpdateRequest = CustomerWishlist;
export type WishlistUpdateResponse = { data: CustomerWishlist };

export interface WishlistAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface WishlistAggregationResponse {
  total?: number;
  data?: Array<CustomerWishlist>;
}

/** Wishlist Products **/

export interface WishlistProductListResponse {
  total?: number;
  data?: Array<CustomerWishlistProduct>;
}

export type WishlistProductCreateRequest = CustomerWishlistProduct;
export type WishlistProductCreateResponse = { data: CustomerWishlistProduct };

export type WishlistProductListSearchRequest = Criteria;
export interface WishlistProductListSearchResponse {
  total?: number;
  data?: Array<CustomerWishlistProduct>;
}

export interface WishlistProductSingleResponse {
  data: CustomerWishlistProduct;
}

export type WishlistProductUpdateRequest = CustomerWishlistProduct;
export type WishlistProductUpdateResponse = { data: CustomerWishlistProduct };

export interface WishlistProductAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface WishlistProductAggregationResponse {
  total?: number;
  data?: Array<CustomerWishlistProduct>;
}
