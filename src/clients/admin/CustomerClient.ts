import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
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
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to generate impersonation token: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Customers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomers(query?: Criteria): Promise<CustomerListResponse> {
    const response = await this.get(`/customer` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListResponse;

    throw new Error(
      `Failed to fetch customer list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerCreateResponse;

    throw new Error(`Failed to create customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomers(
    request: CustomerListSearchRequest
  ): Promise<CustomerListSearchResponse> {
    const response = await this.get(`/search/customer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListSearchResponse;

    throw new Error(
      `Failed to search for customers: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomer(id: string, query?: Criteria): Promise<CustomerSingleResponse> {
    const response = await this.get(`/customer/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerSingleResponse;

    throw new Error(`Failed to fetch customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomer(id: string): Promise<void> {
    const response = await this.delete(`/customer/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerUpdateResponse;

    throw new Error(`Failed to update customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate customer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Addresses **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAddresses(query?: Criteria): Promise<AddressListResponse> {
    const response = await this.get(`/address` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new Error(
      `Failed to fetch address list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressCreateResponse;

    throw new Error(`Failed to create address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAddresses(
    request: AddressListSearchRequest
  ): Promise<AddressListSearchResponse> {
    const response = await this.get(`/search/address`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListSearchResponse;

    throw new Error(
      `Failed to search for addresss: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAddress(id: string, query?: Criteria): Promise<AddressSingleResponse> {
    const response = await this.get(`/address/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressSingleResponse;

    throw new Error(`Failed to fetch address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAddress(id: string): Promise<void> {
    const response = await this.delete(`/address/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressUpdateResponse;

    throw new Error(`Failed to update address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate address: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Groups **/

  /**
   * @throws {Error} if the request failed
   */
  public async getGroups(query?: Criteria): Promise<GroupListResponse> {
    const response = await this.get(`/customer-group` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupListResponse;

    throw new Error(`Failed to fetch group list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupCreateResponse;

    throw new Error(`Failed to create group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchGroups(request: GroupListSearchRequest): Promise<GroupListSearchResponse> {
    const response = await this.get(`/search/customer-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupListSearchResponse;

    throw new Error(
      `Failed to search for groups: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getGroup(id: string, query?: Criteria): Promise<GroupSingleResponse> {
    const response = await this.get(`/customer-group/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupSingleResponse;

    throw new Error(`Failed to fetch group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteGroup(id: string): Promise<void> {
    const response = await this.delete(`/customer-group/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GroupUpdateResponse;

    throw new Error(`Failed to update group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to aggregate group: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Recoveries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRecoveries(query?: Criteria): Promise<RecoveryListResponse> {
    const response = await this.get(`/customer-recovery` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListResponse;

    throw new Error(
      `Failed to fetch recovery list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryCreateResponse;

    throw new Error(`Failed to create recovery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchRecoveries(
    request: RecoveryListSearchRequest
  ): Promise<RecoveryListSearchResponse> {
    const response = await this.get(`/search/customer-recovery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListSearchResponse;

    throw new Error(
      `Failed to search for recoveries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRecovery(id: string, query?: Criteria): Promise<RecoverySingleResponse> {
    const response = await this.get(`/customer-recovery/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoverySingleResponse;

    throw new Error(`Failed to fetch recovery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRecovery(id: string): Promise<void> {
    const response = await this.delete(`/customer-recovery/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete recovery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryUpdateResponse;

    throw new Error(`Failed to update recovery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate recovery: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Wishlists **/

  /**
   * @throws {Error} if the request failed
   */
  public async getWishlists(query?: Criteria): Promise<WishlistListResponse> {
    const response = await this.get(`/customer-wishlist` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistListResponse;

    throw new Error(
      `Failed to fetch wishlist list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistCreateResponse;

    throw new Error(`Failed to create wishlist: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchWishlists(
    request: WishlistListSearchRequest
  ): Promise<WishlistListSearchResponse> {
    const response = await this.get(`/search/customer-wishlist`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistListSearchResponse;

    throw new Error(
      `Failed to search for wishlists: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getWishlist(id: string, query?: Criteria): Promise<WishlistSingleResponse> {
    const response = await this.get(`/customer-wishlist/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistSingleResponse;

    throw new Error(`Failed to fetch wishlist: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteWishlist(id: string): Promise<void> {
    const response = await this.delete(`/customer-wishlist/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete wishlist: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistUpdateResponse;

    throw new Error(`Failed to update wishlist: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate wishlist: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Wishlist Products **/

  /**
   * @throws {Error} if the request failed
   */
  public async getWishlistProducts(query?: Criteria): Promise<WishlistProductListResponse> {
    const response = await this.get(`/customer-wishlist-product` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductListResponse;

    throw new Error(
      `Failed to fetch wishlist product list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductCreateResponse;

    throw new Error(
      `Failed to create wishlist product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchWishlistProducts(
    request: WishlistProductListSearchRequest
  ): Promise<WishlistProductListSearchResponse> {
    const response = await this.get(`/search/customer-wishlist-product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductListSearchResponse;

    throw new Error(
      `Failed to search for wishlist products: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to fetch wishlist product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteWishlistProduct(id: string): Promise<void> {
    const response = await this.delete(`/customer-wishlist-product/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete wishlist product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductUpdateResponse;

    throw new Error(
      `Failed to update wishlist product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate wishlist product: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default CustomerClient;
