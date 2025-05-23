import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  AddressAggregationRequest,
  AddressAggregationResponse,
  AddressCreateRequest,
  AddressCreateResponse,
  AddressListResponse,
  AddressListSearchRequest,
  AddressListSearchResponse,
  AddressSingleResponse,
  AddressUpdateRequest,
  AddressUpdateResponse,
  CustomerAggregationRequest,
  CustomerAggregationResponse,
  CustomerCreateRequest,
  CustomerCreateResponse,
  CustomerListResponse,
  CustomerListSearchRequest,
  CustomerListSearchResponse,
  CustomerSingleResponse,
  CustomerUpdateRequest,
  CustomerUpdateResponse,
  GroupAggregationRequest,
  GroupAggregationResponse,
  GroupCreateRequest,
  GroupCreateResponse,
  GroupListResponse,
  GroupListSearchRequest,
  GroupListSearchResponse,
  GroupSingleResponse,
  GroupUpdateRequest,
  GroupUpdateResponse,
  ImpersonationTokenRequest,
  ImpersonationTokenResponse,
  RecoveryAggregationRequest,
  RecoveryAggregationResponse,
  RecoveryCreateRequest,
  RecoveryCreateResponse,
  RecoveryListResponse,
  RecoveryListSearchRequest,
  RecoveryListSearchResponse,
  RecoverySingleResponse,
  RecoveryUpdateRequest,
  RecoveryUpdateResponse,
  WishlistAggregationRequest,
  WishlistAggregationResponse,
  WishlistCreateRequest,
  WishlistCreateResponse,
  WishlistListResponse,
  WishlistListSearchRequest,
  WishlistListSearchResponse,
  WishlistProductAggregationRequest,
  WishlistProductAggregationResponse,
  WishlistProductCreateRequest,
  WishlistProductCreateResponse,
  WishlistProductListResponse,
  WishlistProductListSearchRequest,
  WishlistProductListSearchResponse,
  WishlistProductSingleResponse,
  WishlistProductUpdateRequest,
  WishlistProductUpdateResponse,
  WishlistSingleResponse,
  WishlistUpdateRequest,
  WishlistUpdateResponse
} from "#types/clients/admin/CustomerClient";

class CustomerClient extends Client {
  /** Impersonation **/

  /**
   * Requires `api_proxy_imitate-customer` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCustomerImpersonationToken(
    request: ImpersonationTokenRequest
  ): Promise<ImpersonationTokenResponse> {
    const response = await this.post(`/_proxy/generate-imitate-customer-token`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ImpersonationTokenResponse;

    throw new ShopwareError("Failed to generate impersonation token", response);
  }

  /** Customers **/

  /**
   * Requires `customer:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCustomers(query?: Criteria): Promise<CustomerListResponse> {
    const response = await this.get(`/customer` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListResponse;

    throw new ShopwareError("Failed to fetch customer list", response);
  }

  /**
   * Requires `customer:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createCustomer(
    request: CustomerCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomerCreateResponse> {
    const response = await this.post(`/customer`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as CustomerCreateResponse;

    throw new ShopwareError("Failed to create customer", response);
  }

  /**
   * Requires `customer:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchCustomers(
    request: CustomerListSearchRequest
  ): Promise<CustomerListSearchResponse> {
    const response = await this.post(`/search/customer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListSearchResponse;

    throw new ShopwareError("Failed to search for customers", response);
  }

  /**
   * Requires `customer:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCustomer(id: string, query?: Criteria): Promise<CustomerSingleResponse> {
    const response = await this.get(`/customer/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerSingleResponse;

    throw new ShopwareError("Failed to fetch customer", response);
  }

  /**
   * Requires `customer:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteCustomer(id: string): Promise<void> {
    const response = await this.delete(`/customer/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete customer", response);
  }

  /**
   * Requires `customer:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateCustomer(
    id: string,
    request: CustomerUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomerUpdateResponse> {
    const response = await this.patch(`/customer/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as CustomerUpdateResponse;

    throw new ShopwareError("Failed to update customer", response);
  }

  /**
   * Requires `customer:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCustomerAggregate(
    request: CustomerAggregationRequest
  ): Promise<CustomerAggregationResponse> {
    const response = await this.post(`/aggregate/customer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerAggregationResponse;

    throw new ShopwareError("Failed to aggregate customer", response);
  }

  /** Addresses **/

  /**
   * Requires `address:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAddresses(query?: Criteria): Promise<AddressListResponse> {
    const response = await this.get(`/address` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new ShopwareError("Failed to fetch address list", response);
  }

  /**
   * Requires `address:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createAddress(
    request: AddressCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AddressCreateResponse> {
    const response = await this.post(`/address`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AddressCreateResponse;

    throw new ShopwareError("Failed to create address", response);
  }

  /**
   * Requires `address:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchAddresses(
    request: AddressListSearchRequest
  ): Promise<AddressListSearchResponse> {
    const response = await this.post(`/search/address`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListSearchResponse;

    throw new ShopwareError("Failed to search for addresss", response);
  }

  /**
   * Requires `address:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAddress(id: string, query?: Criteria): Promise<AddressSingleResponse> {
    const response = await this.get(`/address/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressSingleResponse;

    throw new ShopwareError("Failed to fetch address", response);
  }

  /**
   * Requires `address:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteAddress(id: string): Promise<void> {
    const response = await this.delete(`/address/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete address", response);
  }

  /**
   * Requires `address:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateAddress(
    id: string,
    request: AddressUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AddressUpdateResponse> {
    const response = await this.patch(`/address/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AddressUpdateResponse;

    throw new ShopwareError("Failed to update address", response);
  }

  /**
   * Requires `address:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAddressAggregate(
    request: AddressAggregationRequest
  ): Promise<AddressAggregationResponse> {
    const response = await this.post(`/aggregate/address`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressAggregationResponse;

    throw new ShopwareError("Failed to aggregate address", response);
  }

  /** Groups **/

  /**
   * Requires `customer-group:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getGroups(query?: Criteria): Promise<GroupListResponse> {
    const response = await this.get(`/customer-group` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupListResponse;

    throw new ShopwareError("Failed to fetch group list", response);
  }

  /**
   * Requires `customer-group:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createGroup(
    request: GroupCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<GroupCreateResponse> {
    const response = await this.post(`/customer-group`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as GroupCreateResponse;

    throw new ShopwareError("Failed to create group", response);
  }

  /**
   * Requires `customer-group:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchGroups(request: GroupListSearchRequest): Promise<GroupListSearchResponse> {
    const response = await this.post(`/search/customer-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupListSearchResponse;

    throw new ShopwareError("Failed to search for groups", response);
  }

  /**
   * Requires `customer-group:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getGroup(id: string, query?: Criteria): Promise<GroupSingleResponse> {
    const response = await this.get(`/customer-group/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupSingleResponse;

    throw new ShopwareError("Failed to fetch group", response);
  }

  /**
   * Requires `customer-group:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteGroup(id: string): Promise<void> {
    const response = await this.delete(`/customer-group/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete group", response);
  }

  /**
   * Requires `customer-group:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateGroup(
    id: string,
    request: GroupUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<GroupUpdateResponse> {
    const response = await this.patch(`/customer-group/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as GroupUpdateResponse;

    throw new ShopwareError("Failed to update group", response);
  }

  /**
   * Requires `customer-group:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getGroupAggregate(
    request: GroupAggregationRequest
  ): Promise<GroupAggregationResponse> {
    const response = await this.post(`/aggregate/customer-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupAggregationResponse;

    throw new ShopwareError("Failed to aggregate group", response);
  }

  /** Recoveries **/

  /**
   * Requires `customer-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecoveries(query?: Criteria): Promise<RecoveryListResponse> {
    const response = await this.get(`/customer-recovery` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListResponse;

    throw new ShopwareError("Failed to fetch recovery list", response);
  }

  /**
   * Requires `customer-recovery:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createRecovery(
    request: RecoveryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecoveryCreateResponse> {
    const response = await this.post(`/customer-recovery`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RecoveryCreateResponse;

    throw new ShopwareError("Failed to create recovery", response);
  }

  /**
   * Requires `customer-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchRecoveries(
    request: RecoveryListSearchRequest
  ): Promise<RecoveryListSearchResponse> {
    const response = await this.post(`/search/customer-recovery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListSearchResponse;

    throw new ShopwareError("Failed to search for recoveries", response);
  }

  /**
   * Requires `customer-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecovery(id: string, query?: Criteria): Promise<RecoverySingleResponse> {
    const response = await this.get(`/customer-recovery/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoverySingleResponse;

    throw new ShopwareError("Failed to fetch recovery", response);
  }

  /**
   * Requires `customer-recovery:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteRecovery(id: string): Promise<void> {
    const response = await this.delete(`/customer-recovery/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete recovery", response);
  }

  /**
   * Requires `customer-recovery:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateRecovery(
    id: string,
    request: RecoveryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecoveryUpdateResponse> {
    const response = await this.patch(`/customer-recovery/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RecoveryUpdateResponse;

    throw new ShopwareError("Failed to update recovery", response);
  }

  /**
   * Requires `customer-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecoveryAggregate(
    request: RecoveryAggregationRequest
  ): Promise<RecoveryAggregationResponse> {
    const response = await this.post(`/aggregate/customer-recovery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryAggregationResponse;

    throw new ShopwareError("Failed to aggregate recovery", response);
  }

  /** Wishlists **/

  /**
   * Requires `customer-wishlist:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlists(query?: Criteria): Promise<WishlistListResponse> {
    const response = await this.get(`/customer-wishlist` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistListResponse;

    throw new ShopwareError("Failed to fetch wishlist list", response);
  }

  /**
   * Requires `customer-wishlist:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createWishlist(
    request: WishlistCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WishlistCreateResponse> {
    const response = await this.post(`/customer-wishlist`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as WishlistCreateResponse;

    throw new ShopwareError("Failed to create wishlist", response);
  }

  /**
   * Requires `customer-wishlist:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchWishlists(
    request: WishlistListSearchRequest
  ): Promise<WishlistListSearchResponse> {
    const response = await this.post(`/search/customer-wishlist`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistListSearchResponse;

    throw new ShopwareError("Failed to search for wishlists", response);
  }

  /**
   * Requires `customer-wishlist:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlist(id: string, query?: Criteria): Promise<WishlistSingleResponse> {
    const response = await this.get(`/customer-wishlist/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistSingleResponse;

    throw new ShopwareError("Failed to fetch wishlist", response);
  }

  /**
   * Requires `customer-wishlist:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteWishlist(id: string): Promise<void> {
    const response = await this.delete(`/customer-wishlist/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete wishlist", response);
  }

  /**
   * Requires `customer-wishlist:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateWishlist(
    id: string,
    request: WishlistUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WishlistUpdateResponse> {
    const response = await this.patch(`/customer-wishlist/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as WishlistUpdateResponse;

    throw new ShopwareError("Failed to update wishlist", response);
  }

  /**
   * Requires `customer-wishlist:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlistAggregate(
    request: WishlistAggregationRequest
  ): Promise<WishlistAggregationResponse> {
    const response = await this.post(`/aggregate/customer-wishlist`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistAggregationResponse;

    throw new ShopwareError("Failed to aggregate wishlist", response);
  }

  /** Wishlist Products **/

  /**
   * Requires `customer-wishlist-product:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlistProducts(query?: Criteria): Promise<WishlistProductListResponse> {
    const response = await this.get(`/customer-wishlist-product` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductListResponse;

    throw new ShopwareError("Failed to fetch wishlist product list", response);
  }

  /**
   * Requires `customer-wishlist-product:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createWishlistProduct(
    request: WishlistProductCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WishlistProductCreateResponse> {
    const response = await this.post(`/customer-wishlist-product`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as WishlistProductCreateResponse;

    throw new ShopwareError("Failed to create wishlist product", response);
  }

  /**
   * Requires `customer-wishlist-product:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchWishlistProducts(
    request: WishlistProductListSearchRequest
  ): Promise<WishlistProductListSearchResponse> {
    const response = await this.post(`/search/customer-wishlist-product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductListSearchResponse;

    throw new ShopwareError("Failed to search for wishlist products", response);
  }

  /**
   * Requires `customer-wishlist-product:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlistProduct(
    id: string,
    query?: Criteria
  ): Promise<WishlistProductSingleResponse> {
    const response = await this.get(`/customer-wishlist-product/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductSingleResponse;

    throw new ShopwareError("Failed to fetch wishlist product", response);
  }

  /**
   * Requires `customer-wishlist-product:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteWishlistProduct(id: string): Promise<void> {
    const response = await this.delete(`/customer-wishlist-product/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete wishlist product", response);
  }

  /**
   * Requires `customer-wishlist-product:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateWishlistProduct(
    id: string,
    request: WishlistProductUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WishlistProductUpdateResponse> {
    const response = await this.patch(`/customer-wishlist-product/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as WishlistProductUpdateResponse;

    throw new ShopwareError("Failed to update wishlist product", response);
  }

  /**
   * Requires `customer-wishlist-product:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWishlistProductAggregate(
    request: WishlistProductAggregationRequest
  ): Promise<WishlistProductAggregationResponse> {
    const response = await this.post(`/aggregate/customer-wishlist-product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductAggregationResponse;

    throw new ShopwareError("Failed to aggregate wishlist product", response);
  }
}

export default CustomerClient;
