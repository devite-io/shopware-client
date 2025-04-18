import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  AccessKeyAggregationRequest,
  AccessKeyAggregationResponse,
  AccessKeyCreateRequest,
  AccessKeyCreateResponse,
  AccessKeyListResponse,
  AccessKeyListSearchRequest,
  AccessKeyListSearchResponse,
  AccessKeySingleResponse,
  AccessKeyUpdateRequest,
  AccessKeyUpdateResponse,
  ConfigAggregationRequest,
  ConfigAggregationResponse,
  ConfigCreateRequest,
  ConfigCreateResponse,
  ConfigListResponse,
  ConfigListSearchRequest,
  ConfigListSearchResponse,
  ConfigSingleResponse,
  ConfigUpdateRequest,
  ConfigUpdateResponse,
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
  UserAggregationRequest,
  UserAggregationResponse,
  UserCreateRequest,
  UserCreateResponse,
  UserListResponse,
  UserListSearchRequest,
  UserListSearchResponse,
  UserSingleResponse,
  UserUpdateRequest,
  UserUpdateResponse
} from "#types/clients/admin/UserClient";

class UserClient extends Client {
  /** Users **/

  /**
   * Requires `user:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUsers(query?: Criteria): Promise<UserListResponse> {
    const response = await this.get(`/user` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UserListResponse;

    throw new ShopwareError("Failed to fetch user list", response);
  }

  /**
   * Requires `user:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createUser(
    request: UserCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UserCreateResponse> {
    const response = await this.post(`/user`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UserCreateResponse;

    throw new ShopwareError("Failed to create user", response);
  }

  /**
   * Requires `user:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchUsers(request: UserListSearchRequest): Promise<UserListSearchResponse> {
    const response = await this.post(`/search/user`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserListSearchResponse;

    throw new ShopwareError("Failed to search for users", response);
  }

  /**
   * Requires `user:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUser(id: string, query?: Criteria): Promise<UserSingleResponse> {
    const response = await this.get(`/user/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserSingleResponse;

    throw new ShopwareError("Failed to fetch user", response);
  }

  /**
   * Requires `user:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteUser(id: string): Promise<void> {
    const response = await this.delete(`/user/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete user", response);
  }

  /**
   * Requires `user:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateUser(
    id: string,
    request: UserUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UserUpdateResponse> {
    const response = await this.patch(`/user/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UserUpdateResponse;

    throw new ShopwareError("Failed to update user", response);
  }

  /**
   * Requires `user:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUserAggregate(request: UserAggregationRequest): Promise<UserAggregationResponse> {
    const response = await this.post(`/aggregate/user`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserAggregationResponse;

    throw new ShopwareError("Failed to aggregate user", response);
  }

  /** Access Keys **/

  /**
   * Requires `user-access-key:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAccessKeys(query?: Criteria): Promise<AccessKeyListResponse> {
    const response = await this.get(`/user-access-key` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyListResponse;

    throw new ShopwareError("Failed to fetch access key list", response);
  }

  /**
   * Requires `user-access-key:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createAccessKey(
    request: AccessKeyCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AccessKeyCreateResponse> {
    const response = await this.post(`/user-access-key`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AccessKeyCreateResponse;

    throw new ShopwareError("Failed to create access key", response);
  }

  /**
   * Requires `user-access-key:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchAccessKeys(
    request: AccessKeyListSearchRequest
  ): Promise<AccessKeyListSearchResponse> {
    const response = await this.post(`/search/user-access-key`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyListSearchResponse;

    throw new ShopwareError("Failed to search for access keys", response);
  }

  /**
   * Requires `user-access-key:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAccessKey(id: string, query?: Criteria): Promise<AccessKeySingleResponse> {
    const response = await this.get(`/user-access-key/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeySingleResponse;

    throw new ShopwareError("Failed to fetch access key", response);
  }

  /**
   * Requires `user-access-key:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteAccessKey(id: string): Promise<void> {
    const response = await this.delete(`/user-access-key/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete access key", response);
  }

  /**
   * Requires `user-access-key:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateAccessKey(
    id: string,
    request: AccessKeyUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AccessKeyUpdateResponse> {
    const response = await this.patch(`/user-access-key/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AccessKeyUpdateResponse;

    throw new ShopwareError("Failed to update access key", response);
  }

  /**
   * Requires `user-access-key:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAccessKeyAggregate(
    request: AccessKeyAggregationRequest
  ): Promise<AccessKeyAggregationResponse> {
    const response = await this.post(`/aggregate/user-access-key`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyAggregationResponse;

    throw new ShopwareError("Failed to aggregate access key", response);
  }

  /** Configs **/

  /**
   * Requires `user-config:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getConfigs(query?: Criteria): Promise<ConfigListResponse> {
    const response = await this.get(`/user-config` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigListResponse;

    throw new ShopwareError("Failed to fetch config list", response);
  }

  /**
   * Requires `user-config:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createConfig(
    request: ConfigCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigCreateResponse> {
    const response = await this.post(`/user-config`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as ConfigCreateResponse;

    throw new ShopwareError("Failed to create config", response);
  }

  /**
   * Requires `user-config:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchConfigs(request: ConfigListSearchRequest): Promise<ConfigListSearchResponse> {
    const response = await this.post(`/search/user-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigListSearchResponse;

    throw new ShopwareError("Failed to search for configs", response);
  }

  /**
   * Requires `user-config:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getConfig(id: string, query?: Criteria): Promise<ConfigSingleResponse> {
    const response = await this.get(`/user-config/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigSingleResponse;

    throw new ShopwareError("Failed to fetch config", response);
  }

  /**
   * Requires `user-config:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteConfig(id: string): Promise<void> {
    const response = await this.delete(`/user-config/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete config", response);
  }

  /**
   * Requires `user-config:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateConfig(
    id: string,
    request: ConfigUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigUpdateResponse> {
    const response = await this.patch(`/user-config/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as ConfigUpdateResponse;

    throw new ShopwareError("Failed to update config", response);
  }

  /**
   * Requires `user-config:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getConfigAggregate(
    request: ConfigAggregationRequest
  ): Promise<ConfigAggregationResponse> {
    const response = await this.post(`/aggregate/user-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigAggregationResponse;

    throw new ShopwareError("Failed to aggregate config", response);
  }

  /** Recoveries **/

  /**
   * Requires `user-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecoveries(query?: Criteria): Promise<RecoveryListResponse> {
    const response = await this.get(`/user-recovery` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListResponse;

    throw new ShopwareError("Failed to fetch recovery list", response);
  }

  /**
   * Requires `user-recovery:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createRecovery(
    request: RecoveryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecoveryCreateResponse> {
    const response = await this.post(`/user-recovery`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RecoveryCreateResponse;

    throw new ShopwareError("Failed to create recovery", response);
  }

  /**
   * Requires `user-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchRecoveries(
    request: RecoveryListSearchRequest
  ): Promise<RecoveryListSearchResponse> {
    const response = await this.post(`/search/user-recovery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListSearchResponse;

    throw new ShopwareError("Failed to search for recoveries", response);
  }

  /**
   * Requires `user-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecovery(id: string, query?: Criteria): Promise<RecoverySingleResponse> {
    const response = await this.get(`/user-recovery/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoverySingleResponse;

    throw new ShopwareError("Failed to fetch recovery", response);
  }

  /**
   * Requires `user-recovery:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteRecovery(id: string): Promise<void> {
    const response = await this.delete(`/user-recovery/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete recovery", response);
  }

  /**
   * Requires `user-recovery:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateRecovery(
    id: string,
    request: RecoveryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecoveryUpdateResponse> {
    const response = await this.patch(`/user-recovery/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RecoveryUpdateResponse;

    throw new ShopwareError("Failed to update recovery", response);
  }

  /**
   * Requires `user-recovery:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRecoveryAggregate(
    request: RecoveryAggregationRequest
  ): Promise<RecoveryAggregationResponse> {
    const response = await this.post(`/aggregate/user-recovery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryAggregationResponse;

    throw new ShopwareError("Failed to aggregate recovery", response);
  }
}

export default UserClient;
