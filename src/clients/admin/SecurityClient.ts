import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  AclRoleAggregationRequest,
  AclRoleAggregationResponse,
  AclRoleCreateRequest,
  AclRoleCreateResponse,
  AclRoleListResponse,
  AclRoleListSearchRequest,
  AclRoleListSearchResponse,
  AclRoleSingleResponse,
  AclRoleUpdateRequest,
  AclRoleUpdateResponse
} from "#types/clients/admin/SecurityClient";

class SecurityClient extends Client {
  /**
   * Requires `acl-role:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAclRoles(query?: Criteria): Promise<AclRoleListResponse> {
    const response = await this.get(`/acl-role` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleListResponse;

    throw new ShopwareError("Failed to fetch acl role list", response);
  }

  /**
   * Requires `acl-role:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createAclRole(
    request: AclRoleCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AclRoleCreateResponse> {
    const response = await this.post(`/acl-role`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AclRoleCreateResponse;

    throw new ShopwareError("Failed to create acl role", response);
  }

  /**
   * Requires `acl-role:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchAclRoles(
    request: AclRoleListSearchRequest
  ): Promise<AclRoleListSearchResponse> {
    const response = await this.post(`/search/acl-role`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleListSearchResponse;

    throw new ShopwareError("Failed to search for acl roles", response);
  }

  /**
   * Requires `acl-role:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAclRole(id: string, query?: Criteria): Promise<AclRoleSingleResponse> {
    const response = await this.get(`/acl-role/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleSingleResponse;

    throw new ShopwareError("Failed to fetch acl role", response);
  }

  /**
   * Requires `acl-role:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteAclRole(id: string): Promise<void> {
    const response = await this.delete(`/acl-role/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete acl role", response);
  }

  /**
   * Requires `acl-role:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateAclRole(
    id: string,
    request: AclRoleUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AclRoleUpdateResponse> {
    const response = await this.patch(`/acl-role/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AclRoleUpdateResponse;

    throw new ShopwareError("Failed to update acl role", response);
  }

  /**
   * Requires `acl-role:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAclRoleAggregate(
    request: AclRoleAggregationRequest
  ): Promise<AclRoleAggregationResponse> {
    const response = await this.post(`/aggregate/acl-role`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleAggregationResponse;

    throw new ShopwareError("Failed to aggregate acl role", response);
  }
}

export default SecurityClient;
