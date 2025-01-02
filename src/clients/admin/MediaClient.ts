import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
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

    throw new Error(`Failed to upload asset: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to upload asset from url: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Media **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaList(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<MediaListResponse> {
    const response = await this.get(`/media`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListResponse;

    throw new Error(`Failed to fetch media list: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to create media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMedia(request: MediaListSearchRequest): Promise<MediaListSearchResponse> {
    const response = await this.get(`/search/media`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListSearchResponse;

    throw new Error(`Failed to search for media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMedia(id: string): Promise<MediaSingleResponse> {
    const response = await this.get(`/media/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaSingleResponse;

    throw new Error(`Failed to fetch media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMedia(id: string): Promise<void> {
    const response = await this.delete(`/media/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete media: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update media: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to aggregate media: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Default Folders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDefaultFolders(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DefaultFolderListResponse> {
    const response = await this.get(`/media-default-folder`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderListResponse;

    throw new Error(
      `Failed to fetch default folder list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create default folder: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDefaultFolders(
    request: DefaultFolderListSearchRequest
  ): Promise<DefaultFolderListSearchResponse> {
    const response = await this.get(`/search/media-default-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderListSearchResponse;

    throw new Error(
      `Failed to search for default folders: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDefaultFolder(id: string): Promise<DefaultFolderSingleResponse> {
    const response = await this.get(`/media-default-folder/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DefaultFolderSingleResponse;

    throw new Error(
      `Failed to fetch default folder: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDefaultFolder(id: string): Promise<void> {
    const response = await this.delete(`/media-default-folder/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete default folder: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update default folder: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate default folder: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Folders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFolders(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FolderListResponse> {
    const response = await this.get(`/media-folder`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderListResponse;

    throw new Error(
      `Failed to fetch folder list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create folder: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFolders(request: FolderListSearchRequest): Promise<FolderListSearchResponse> {
    const response = await this.get(`/search/media-folder`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderListSearchResponse;

    throw new Error(
      `Failed to search for folders: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolder(id: string): Promise<FolderSingleResponse> {
    const response = await this.get(`/media-folder/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderSingleResponse;

    throw new Error(`Failed to fetch folder: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFolder(id: string): Promise<void> {
    const response = await this.delete(`/media-folder/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete folder: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update folder: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to aggregate folder: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Folder Configs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderConfigs(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FolderConfigListResponse> {
    const response = await this.get(`/media-folder-configuration`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigListResponse;

    throw new Error(
      `Failed to fetch folder configuration list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create folder configuration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFolderConfigs(
    request: FolderConfigListSearchRequest
  ): Promise<FolderConfigListSearchResponse> {
    const response = await this.get(`/search/media-folder-configuration`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigListSearchResponse;

    throw new Error(
      `Failed to search for folder configurations: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFolderConfig(id: string): Promise<FolderConfigSingleResponse> {
    const response = await this.get(`/media-folder-configuration/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FolderConfigSingleResponse;

    throw new Error(
      `Failed to fetch folder configuration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFolderConfig(id: string): Promise<void> {
    const response = await this.delete(`/media-folder-configuration/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete folder configuration: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update folder configuration: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate folder configuration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Thumbnails **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnails(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ThumbnailListResponse> {
    const response = await this.get(`/media-thumbnail`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailListResponse;

    throw new Error(
      `Failed to fetch thumbnail list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create thumbnail: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchThumbnails(
    request: ThumbnailListSearchRequest
  ): Promise<ThumbnailListSearchResponse> {
    const response = await this.get(`/search/media-thumbnail`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailListSearchResponse;

    throw new Error(
      `Failed to search for thumbnails: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnail(id: string): Promise<ThumbnailSingleResponse> {
    const response = await this.get(`/media-thumbnail/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSingleResponse;

    throw new Error(`Failed to fetch thumbnail: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteThumbnail(id: string): Promise<void> {
    const response = await this.delete(`/media-thumbnail/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete thumbnail: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update thumbnail: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate thumbnail: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Thumbnail Sizes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailSizes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ThumbnailSizeListResponse> {
    const response = await this.get(`/media-thumbnail-size`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeListResponse;

    throw new Error(
      `Failed to fetch thumbnail size list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create thumbnail size: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchThumbnailSizes(
    request: ThumbnailSizeListSearchRequest
  ): Promise<ThumbnailSizeListSearchResponse> {
    const response = await this.get(`/search/media-thumbnail-size`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeListSearchResponse;

    throw new Error(
      `Failed to search for thumbnail sizes: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThumbnailSize(id: string): Promise<ThumbnailSizeSingleResponse> {
    const response = await this.get(`/media-thumbnail-size/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThumbnailSizeSingleResponse;

    throw new Error(
      `Failed to fetch thumbnail size: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteThumbnailSize(id: string): Promise<void> {
    const response = await this.delete(`/media-thumbnail-size/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete thumbnail size: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update thumbnail size: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate thumbnail size: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default MediaClient;
