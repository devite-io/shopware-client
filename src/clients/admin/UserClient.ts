import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getUsers(limit?: number, page?: number, query?: string): Promise<UserListResponse> {
    const response = await this.get(`/user`, { query: { limit, page, query } });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UserListResponse;

    throw new Error(`Failed to fetch user list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createUser(
    request: UserCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UserCreateResponse> {
    const response = await this.post(`/user`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserCreateResponse;

    throw new Error(`Failed to create user: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchUsers(request: UserListSearchRequest): Promise<UserListSearchResponse> {
    const response = await this.get(`/search/user`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserListSearchResponse;

    throw new Error(`Failed to search for users: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getUser(id: string): Promise<UserSingleResponse> {
    const response = await this.get(`/user/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserSingleResponse;

    throw new Error(`Failed to fetch user: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteUser(id: string): Promise<void> {
    const response = await this.delete(`/user/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete user: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateUser(
    id: string,
    request: UserUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UserUpdateResponse> {
    const response = await this.patch(`/user/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserUpdateResponse;

    throw new Error(`Failed to update user: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getUserAggregate(request: UserAggregationRequest): Promise<UserAggregationResponse> {
    const response = await this.post(`/aggregate/user`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UserAggregationResponse;

    throw new Error(`Failed to aggregate user: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Access Keys **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAccessKeys(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<AccessKeyListResponse> {
    const response = await this.get(`/user-access-key`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyListResponse;

    throw new Error(
      `Failed to fetch access key list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createAccessKey(
    request: AccessKeyCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AccessKeyCreateResponse> {
    const response = await this.post(`/user-access-key`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyCreateResponse;

    throw new Error(
      `Failed to create access key: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAccessKeys(
    request: AccessKeyListSearchRequest
  ): Promise<AccessKeyListSearchResponse> {
    const response = await this.get(`/search/user-access-key`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyListSearchResponse;

    throw new Error(
      `Failed to search for access keys: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAccessKey(id: string): Promise<AccessKeySingleResponse> {
    const response = await this.get(`/user-access-key/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeySingleResponse;

    throw new Error(`Failed to fetch access key: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAccessKey(id: string): Promise<void> {
    const response = await this.delete(`/user-access-key/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete access key: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateAccessKey(
    id: string,
    request: AccessKeyUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AccessKeyUpdateResponse> {
    const response = await this.patch(`/user-access-key/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyUpdateResponse;

    throw new Error(
      `Failed to update access key: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAccessKeyAggregate(
    request: AccessKeyAggregationRequest
  ): Promise<AccessKeyAggregationResponse> {
    const response = await this.post(`/aggregate/user-access-key`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AccessKeyAggregationResponse;

    throw new Error(
      `Failed to aggregate access key: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Configs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigs(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ConfigListResponse> {
    const response = await this.get(`/user-config`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigListResponse;

    throw new Error(
      `Failed to fetch config list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createConfig(
    request: ConfigCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigCreateResponse> {
    const response = await this.post(`/user-config`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigCreateResponse;

    throw new Error(`Failed to create config: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConfigs(request: ConfigListSearchRequest): Promise<ConfigListSearchResponse> {
    const response = await this.get(`/search/user-config`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigListSearchResponse;

    throw new Error(
      `Failed to search for configs: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfig(id: string): Promise<ConfigSingleResponse> {
    const response = await this.get(`/user-config/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigSingleResponse;

    throw new Error(`Failed to fetch config: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteConfig(id: string): Promise<void> {
    const response = await this.delete(`/user-config/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete config: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateConfig(
    id: string,
    request: ConfigUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigUpdateResponse> {
    const response = await this.patch(`/user-config/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigUpdateResponse;

    throw new Error(`Failed to update config: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigAggregate(
    request: ConfigAggregationRequest
  ): Promise<ConfigAggregationResponse> {
    const response = await this.post(`/aggregate/user-config`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigAggregationResponse;

    throw new Error(`Failed to aggregate config: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Recoveries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRecoveries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<RecoveryListResponse> {
    const response = await this.get(`/user-recovery`, { query: { limit, page, query } });

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
    const response = await this.post(`/user-recovery`, {
      query: { _response: responseDetails },
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
    const response = await this.get(`/search/user-recovery`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryListSearchResponse;

    throw new Error(
      `Failed to search for recoveries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRecovery(id: string): Promise<RecoverySingleResponse> {
    const response = await this.get(`/user-recovery/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoverySingleResponse;

    throw new Error(`Failed to fetch recovery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRecovery(id: string): Promise<void> {
    const response = await this.delete(`/user-recovery/${id}`);

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
    const response = await this.patch(`/user-recovery/${id}`, {
      query: { _response: responseDetails },
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
    const response = await this.post(`/aggregate/user-recovery`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecoveryAggregationResponse;

    throw new Error(
      `Failed to aggregate recovery: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default UserClient;
