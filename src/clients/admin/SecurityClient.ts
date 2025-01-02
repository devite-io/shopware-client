import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getAclRoles(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<AclRoleListResponse> {
    const response = await this.get(`/acl-role`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleListResponse;

    throw new Error(
      `Failed to fetch acl role list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleCreateResponse;

    throw new Error(`Failed to create acl role: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAclRoles(
    request: AclRoleListSearchRequest
  ): Promise<AclRoleListSearchResponse> {
    const response = await this.get(`/search/acl-role`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleListSearchResponse;

    throw new Error(
      `Failed to search for acl roles: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAclRole(id: string): Promise<AclRoleSingleResponse> {
    const response = await this.get(`/acl-role/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleSingleResponse;

    throw new Error(`Failed to fetch acl role: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAclRole(id: string): Promise<void> {
    const response = await this.delete(`/acl-role/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete acl role: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AclRoleUpdateResponse;

    throw new Error(`Failed to update acl role: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate acl role: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default SecurityClient;
