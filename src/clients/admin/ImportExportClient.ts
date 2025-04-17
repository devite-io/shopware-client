import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  FileAggregationRequest,
  FileAggregationResponse,
  FileCreateRequest,
  FileCreateResponse,
  FileListResponse,
  FileListSearchRequest,
  FileListSearchResponse,
  FileSingleResponse,
  FileUpdateRequest,
  FileUpdateResponse,
  LogAggregationRequest,
  LogAggregationResponse,
  LogCreateRequest,
  LogCreateResponse,
  LogListResponse,
  LogListSearchRequest,
  LogListSearchResponse,
  LogSingleResponse,
  LogUpdateRequest,
  LogUpdateResponse,
  ProfileAggregationRequest,
  ProfileAggregationResponse,
  ProfileCreateRequest,
  ProfileCreateResponse,
  ProfileListResponse,
  ProfileListSearchRequest,
  ProfileListSearchResponse,
  ProfileSingleResponse,
  ProfileUpdateRequest,
  ProfileUpdateResponse
} from "#types/clients/admin/ImportExportClient";

class DeliveryTimeClient extends Client {
  /** Files **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFiles(query?: Criteria): Promise<FileListResponse> {
    const response = await this.get(`/import-export-file` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as FileListResponse;

    throw new ShopwareError("Failed to fetch  file list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createFile(
    request: FileCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FileCreateResponse> {
    const response = await this.post(`/import-export-file`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileCreateResponse;

    throw new ShopwareError("Failed to create  file", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchFiles(request: FileListSearchRequest): Promise<FileListSearchResponse> {
    const response = await this.post(`/search/import-export-file`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileListSearchResponse;

    throw new ShopwareError("Failed to search for  files", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFile(id: string, query?: Criteria): Promise<FileSingleResponse> {
    const response = await this.get(`/import-export-file/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileSingleResponse;

    throw new ShopwareError("Failed to fetch  file", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteFile(id: string): Promise<void> {
    const response = await this.delete(`/import-export-file/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete  file", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateFile(
    id: string,
    request: FileUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FileUpdateResponse> {
    const response = await this.patch(`/import-export-file/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FileUpdateResponse;

    throw new ShopwareError("Failed to update  file", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFileAggregate(request: FileAggregationRequest): Promise<FileAggregationResponse> {
    const response = await this.post(`/aggregate/import-export-file`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileAggregationResponse;

    throw new ShopwareError("Failed to aggregate  file", response);
  }

  /** Logs **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getLogs(query?: Criteria): Promise<LogListResponse> {
    const response = await this.get(`/import-export-log` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as LogListResponse;

    throw new ShopwareError("Failed to fetch log list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createLog(
    request: LogCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LogCreateResponse> {
    const response = await this.post(`/import-export-log`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogCreateResponse;

    throw new ShopwareError("Failed to create log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchLogs(request: LogListSearchRequest): Promise<LogListSearchResponse> {
    const response = await this.post(`/search/import-export-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogListSearchResponse;

    throw new ShopwareError("Failed to search for logs", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getLog(id: string, query?: Criteria): Promise<LogSingleResponse> {
    const response = await this.get(`/import-export-log/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogSingleResponse;

    throw new ShopwareError("Failed to fetch log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteLog(id: string): Promise<void> {
    const response = await this.delete(`/import-export-log/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateLog(
    id: string,
    request: LogUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LogUpdateResponse> {
    const response = await this.patch(`/import-export-log/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as LogUpdateResponse;

    throw new ShopwareError("Failed to update log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getLogAggregate(request: LogAggregationRequest): Promise<LogAggregationResponse> {
    const response = await this.post(`/aggregate/import-export-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogAggregationResponse;

    throw new ShopwareError("Failed to aggregate log", response);
  }

  /** Profiles **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getProfiles(query?: Criteria): Promise<ProfileListResponse> {
    const response = await this.get(`/import-export-profile` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileListResponse;

    throw new ShopwareError("Failed to fetch profile list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createProfile(
    request: ProfileCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProfileCreateResponse> {
    const response = await this.post(`/import-export-profile`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileCreateResponse;

    throw new ShopwareError("Failed to create profile", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchProfiles(
    request: ProfileListSearchRequest
  ): Promise<ProfileListSearchResponse> {
    const response = await this.post(`/search/import-export-profile`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileListSearchResponse;

    throw new ShopwareError("Failed to search for profiles", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getProfile(id: string, query?: Criteria): Promise<ProfileSingleResponse> {
    const response = await this.get(`/import-export-profile/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileSingleResponse;

    throw new ShopwareError("Failed to fetch profile", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteProfile(id: string): Promise<void> {
    const response = await this.delete(`/import-export-profile/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete profile", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateProfile(
    id: string,
    request: ProfileUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProfileUpdateResponse> {
    const response = await this.patch(`/import-export-profile/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as ProfileUpdateResponse;

    throw new ShopwareError("Failed to update profile", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getProfileAggregate(
    request: ProfileAggregationRequest
  ): Promise<ProfileAggregationResponse> {
    const response = await this.post(`/aggregate/import-export-profile`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileAggregationResponse;

    throw new ShopwareError("Failed to aggregate profile", response);
  }
}

export default DeliveryTimeClient;
