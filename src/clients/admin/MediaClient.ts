import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  DefaultFolderAggregationRequest,
  DefaultFolderAggregationResponse,
  DefaultFolderCreateRequest,
  DefaultFolderCreateResponse,
  DefaultFolderListResponse,
  DefaultFolderListSearchRequest,
  DefaultFolderListSearchResponse,
  DefaultFolderSingleResponse,
  DefaultFolderUpdateRequest,
  DefaultFolderUpdateResponse,
  FolderAggregationRequest,
  FolderAggregationResponse,
  FolderConfigAggregationRequest,
  FolderConfigAggregationResponse,
  FolderConfigCreateRequest,
  FolderConfigCreateResponse,
  FolderConfigListResponse,
  FolderConfigListSearchRequest,
  FolderConfigListSearchResponse,
  FolderConfigSingleResponse,
  FolderConfigUpdateRequest,
  FolderConfigUpdateResponse,
  FolderCreateRequest,
  FolderCreateResponse,
  FolderListResponse,
  FolderListSearchRequest,
  FolderListSearchResponse,
  FolderSingleResponse,
  FolderUpdateRequest,
  FolderUpdateResponse,
  MediaAggregationRequest,
  MediaAggregationResponse,
  MediaCreateRequest,
  MediaCreateResponse,
  MediaListResponse,
  MediaListSearchRequest,
  MediaListSearchResponse,
  MediaSingleResponse,
  MediaUpdateRequest,
  MediaUpdateResponse,
  ThumbnailAggregationRequest,
  ThumbnailAggregationResponse,
  ThumbnailCreateRequest,
  ThumbnailCreateResponse,
  ThumbnailListResponse,
  ThumbnailListSearchRequest,
  ThumbnailListSearchResponse,
  ThumbnailSingleResponse,
  ThumbnailSizeAggregationRequest,
  ThumbnailSizeAggregationResponse,
  ThumbnailSizeCreateRequest,
  ThumbnailSizeCreateResponse,
  ThumbnailSizeListResponse,
  ThumbnailSizeListSearchRequest,
  ThumbnailSizeListSearchResponse,
  ThumbnailSizeSingleResponse,
  ThumbnailSizeUpdateRequest,
  ThumbnailSizeUpdateResponse,
  ThumbnailUpdateRequest,
  ThumbnailUpdateResponse
} from "#types/clients/admin/MediaClient";
import BinaryPayload from "../../payloads/BinaryPayload";

class MediaClient extends Client {
  /** Asset Management **/

  /**
   * @return The url for the uploaded media.
   * @throws {Error} if the request failed
   */
  public async upload(
    id: string,
    extension: string,
    contents: Blob,
    fileName?: string
  ): Promise<string> {
    const response = await this.post(`/_action/media/${id}/upload`, {
      query: { extension, fileName },
      body: new BinaryPayload(contents)
    });

    if (response.statusCode === 200) return response.headers?.get("Location") as string;

    throw new ShopwareError("Failed to upload asset", response);
  }

  /**
   * Requires `shopware.media.enable_url_upload_feature` to be enabled.
   *
   * @return The url for the uploaded media.
   * @throws {Error} if the request failed
   */
  public async uploadFromUrl(
    id: string,
    extension: string,
    url: string,
    fileName?: string
  ): Promise<string> {
    const response = await this.post(`/_action/media/${id}/upload`, {
      query: { extension, fileName },
      body: new JsonPayload({ url })
    });

    if (response.statusCode === 200) return response.headers?.get("Location") as string;

    throw new ShopwareError("Failed to upload asset from url", response);
  }

  /** Media **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaList(query?: Criteria): Promise<MediaListResponse> {
    const response = await this.get(`/media` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListResponse;

    throw new ShopwareError("Failed to fetch media list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createMedia(
    request: MediaCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MediaCreateResponse> {
    const response = await this.post(`/media`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaCreateResponse;

    throw new ShopwareError("Failed to create media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMedia(request: MediaListSearchRequest): Promise<MediaListSearchResponse> {
    const response = await this.post(`/search/media`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListSearchResponse;

    throw new ShopwareError("Failed to search for media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMedia(id: string, query?: Criteria): Promise<MediaSingleResponse> {
    const response = await this.get(`/media/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaSingleResponse;

    throw new ShopwareError("Failed to fetch media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMedia(id: string): Promise<void> {
    const response = await this.delete(`/media/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateMedia(
    id: string,
    request: MediaUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MediaUpdateResponse> {
    const response = await this.patch(`/media/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaUpdateResponse;

    throw new ShopwareError("Failed to update media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaAggregate(
    request: MediaAggregationRequest
  ): Promise<MediaAggregationResponse> {
    const response = await this.post(`/aggregate/media`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaAggregationResponse;

    throw new ShopwareError("Failed to aggregate media", response);
  }

  /** Default Folders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDefaultFolders(query?: Criteria): Promise<DefaultFolderListResponse> {
    const response = await this.get(`/media-default-folder` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderListResponse;

    throw new ShopwareError("Failed to fetch default folder list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDefaultFolder(
    request: DefaultFolderCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DefaultFolderCreateResponse> {
    const response = await this.post(`/media-default-folder`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderCreateResponse;

    throw new ShopwareError("Failed to create default folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDefaultFolders(
    request: DefaultFolderListSearchRequest
  ): Promise<DefaultFolderListSearchResponse> {
    const response = await this.post(`/search/media-default-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderListSearchResponse;

    throw new ShopwareError("Failed to search for default folders", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDefaultFolder(
    id: string,
    query?: Criteria
  ): Promise<DefaultFolderSingleResponse> {
    const response = await this.get(`/media-default-folder/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderSingleResponse;

    throw new ShopwareError("Failed to fetch default folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDefaultFolder(id: string): Promise<void> {
    const response = await this.delete(`/media-default-folder/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete default folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDefaultFolder(
    id: string,
    request: DefaultFolderUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DefaultFolderUpdateResponse> {
    const response = await this.patch(`/media-default-folder/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderUpdateResponse;

    throw new ShopwareError("Failed to update default folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDefaultFolderAggregate(
    request: DefaultFolderAggregationRequest
  ): Promise<DefaultFolderAggregationResponse> {
    const response = await this.post(`/aggregate/media-default-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderAggregationResponse;

    throw new ShopwareError("Failed to aggregate default folder", response);
  }

  /** Folders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFolders(query?: Criteria): Promise<FolderListResponse> {
    const response = await this.get(`/media-folder` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderListResponse;

    throw new ShopwareError("Failed to fetch folder list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFolder(
    request: FolderCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FolderCreateResponse> {
    const response = await this.post(`/media-folder`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderCreateResponse;

    throw new ShopwareError("Failed to create folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFolders(request: FolderListSearchRequest): Promise<FolderListSearchResponse> {
    const response = await this.post(`/search/media-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderListSearchResponse;

    throw new ShopwareError("Failed to search for folders", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolder(id: string, query?: Criteria): Promise<FolderSingleResponse> {
    const response = await this.get(`/media-folder/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderSingleResponse;

    throw new ShopwareError("Failed to fetch folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFolder(id: string): Promise<void> {
    const response = await this.delete(`/media-folder/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateFolder(
    id: string,
    request: FolderUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FolderUpdateResponse> {
    const response = await this.patch(`/media-folder/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderUpdateResponse;

    throw new ShopwareError("Failed to update folder", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderAggregate(
    request: FolderAggregationRequest
  ): Promise<FolderAggregationResponse> {
    const response = await this.post(`/aggregate/media-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderAggregationResponse;

    throw new ShopwareError("Failed to aggregate folder", response);
  }

  /** Folder Configs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderConfigs(query?: Criteria): Promise<FolderConfigListResponse> {
    const response = await this.get(`/media-folder-configuration` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigListResponse;

    throw new ShopwareError("Failed to fetch folder configuration list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFolderConfig(
    request: FolderConfigCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FolderConfigCreateResponse> {
    const response = await this.post(`/media-folder-configuration`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigCreateResponse;

    throw new ShopwareError("Failed to create folder configuration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFolderConfigs(
    request: FolderConfigListSearchRequest
  ): Promise<FolderConfigListSearchResponse> {
    const response = await this.post(`/search/media-folder-configuration`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigListSearchResponse;

    throw new ShopwareError("Failed to search for folder configurations", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderConfig(id: string, query?: Criteria): Promise<FolderConfigSingleResponse> {
    const response = await this.get(`/media-folder-configuration/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigSingleResponse;

    throw new ShopwareError("Failed to fetch folder configuration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFolderConfig(id: string): Promise<void> {
    const response = await this.delete(`/media-folder-configuration/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete folder configuration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateFolderConfig(
    id: string,
    request: FolderConfigUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FolderConfigUpdateResponse> {
    const response = await this.patch(`/media-folder-configuration/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigUpdateResponse;

    throw new ShopwareError("Failed to update folder configuration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderConfigAggregate(
    request: FolderConfigAggregationRequest
  ): Promise<FolderConfigAggregationResponse> {
    const response = await this.post(`/aggregate/media-folder-configuration`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigAggregationResponse;

    throw new ShopwareError("Failed to aggregate folder configuration", response);
  }

  /** Thumbnails **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnails(query?: Criteria): Promise<ThumbnailListResponse> {
    const response = await this.get(`/media-thumbnail` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailListResponse;

    throw new ShopwareError("Failed to fetch thumbnail list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createThumbnail(
    request: ThumbnailCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThumbnailCreateResponse> {
    const response = await this.post(`/media-thumbnail`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailCreateResponse;

    throw new ShopwareError("Failed to create thumbnail", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchThumbnails(
    request: ThumbnailListSearchRequest
  ): Promise<ThumbnailListSearchResponse> {
    const response = await this.post(`/search/media-thumbnail`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailListSearchResponse;

    throw new ShopwareError("Failed to search for thumbnails", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnail(id: string, query?: Criteria): Promise<ThumbnailSingleResponse> {
    const response = await this.get(`/media-thumbnail/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSingleResponse;

    throw new ShopwareError("Failed to fetch thumbnail", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteThumbnail(id: string): Promise<void> {
    const response = await this.delete(`/media-thumbnail/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete thumbnail", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateThumbnail(
    id: string,
    request: ThumbnailUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThumbnailUpdateResponse> {
    const response = await this.patch(`/media-thumbnail/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailUpdateResponse;

    throw new ShopwareError("Failed to update thumbnail", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailAggregate(
    request: ThumbnailAggregationRequest
  ): Promise<ThumbnailAggregationResponse> {
    const response = await this.post(`/aggregate/media-thumbnail`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailAggregationResponse;

    throw new ShopwareError("Failed to aggregate thumbnail", response);
  }

  /** Thumbnail Sizes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailSizes(query?: Criteria): Promise<ThumbnailSizeListResponse> {
    const response = await this.get(`/media-thumbnail-size` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeListResponse;

    throw new ShopwareError("Failed to fetch thumbnail size list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createThumbnailSize(
    request: ThumbnailSizeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThumbnailSizeCreateResponse> {
    const response = await this.post(`/media-thumbnail-size`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeCreateResponse;

    throw new ShopwareError("Failed to create thumbnail size", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchThumbnailSizes(
    request: ThumbnailSizeListSearchRequest
  ): Promise<ThumbnailSizeListSearchResponse> {
    const response = await this.post(`/search/media-thumbnail-size`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeListSearchResponse;

    throw new ShopwareError("Failed to search for thumbnail sizes", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailSize(
    id: string,
    query?: Criteria
  ): Promise<ThumbnailSizeSingleResponse> {
    const response = await this.get(`/media-thumbnail-size/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeSingleResponse;

    throw new ShopwareError("Failed to fetch thumbnail size", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteThumbnailSize(id: string): Promise<void> {
    const response = await this.delete(`/media-thumbnail-size/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete thumbnail size", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateThumbnailSize(
    id: string,
    request: ThumbnailSizeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThumbnailSizeUpdateResponse> {
    const response = await this.patch(`/media-thumbnail-size/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeUpdateResponse;

    throw new ShopwareError("Failed to update thumbnail size", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailSizeAggregate(
    request: ThumbnailSizeAggregationRequest
  ): Promise<ThumbnailSizeAggregationResponse> {
    const response = await this.post(`/aggregate/media-thumbnail-size`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeAggregationResponse;

    throw new ShopwareError("Failed to aggregate thumbnail size", response);
  }
}

export default MediaClient;
