import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
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
   * @throws {Error} if the request failed
   */
  public async getFiles(query?: Criteria): Promise<FileListResponse> {
    const response = await this.get(`/import-export-file` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as FileListResponse;

    throw new Error(`Failed to fetch  file list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create  file: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFiles(request: FileListSearchRequest): Promise<FileListSearchResponse> {
    const response = await this.get(`/search/import-export-file`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileListSearchResponse;

    throw new Error(
      `Failed to search for  files: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFile(id: string, query?: Criteria): Promise<FileSingleResponse> {
    const response = await this.get(`/import-export-file/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileSingleResponse;

    throw new Error(`Failed to fetch  file: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFile(id: string): Promise<void> {
    const response = await this.delete(`/import-export-file/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete  file: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileUpdateResponse;

    throw new Error(`Failed to update  file: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFileAggregate(request: FileAggregationRequest): Promise<FileAggregationResponse> {
    const response = await this.post(`/aggregate/import-export-file`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FileAggregationResponse;

    throw new Error(`Failed to aggregate  file: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Logs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLogs(query?: Criteria): Promise<LogListResponse> {
    const response = await this.get(`/import-export-log` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as LogListResponse;

    throw new Error(`Failed to fetch log list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLogs(request: LogListSearchRequest): Promise<LogListSearchResponse> {
    const response = await this.get(`/search/import-export-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogListSearchResponse;

    throw new Error(`Failed to search for logs: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLog(id: string, query?: Criteria): Promise<LogSingleResponse> {
    const response = await this.get(`/import-export-log/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogSingleResponse;

    throw new Error(`Failed to fetch log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLog(id: string): Promise<void> {
    const response = await this.delete(`/import-export-log/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogUpdateResponse;

    throw new Error(`Failed to update log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLogAggregate(request: LogAggregationRequest): Promise<LogAggregationResponse> {
    const response = await this.post(`/aggregate/import-export-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogAggregationResponse;

    throw new Error(`Failed to aggregate log: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Profiles **/

  /**
   * @throws {Error} if the request failed
   */
  public async getProfiles(query?: Criteria): Promise<ProfileListResponse> {
    const response = await this.get(`/import-export-profile` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileListResponse;

    throw new Error(
      `Failed to fetch profile list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchProfiles(
    request: ProfileListSearchRequest
  ): Promise<ProfileListSearchResponse> {
    const response = await this.get(`/search/import-export-profile`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileListSearchResponse;

    throw new Error(
      `Failed to search for profiles: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProfile(id: string, query?: Criteria): Promise<ProfileSingleResponse> {
    const response = await this.get(`/import-export-profile/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileSingleResponse;

    throw new Error(`Failed to fetch profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteProfile(id: string): Promise<void> {
    const response = await this.delete(`/import-export-profile/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProfileUpdateResponse;

    throw new Error(`Failed to update profile: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate profile: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DeliveryTimeClient;
