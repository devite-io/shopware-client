import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  BaseConfigAggregationRequest,
  BaseConfigAggregationResponse,
  BaseConfigCreateRequest,
  BaseConfigCreateResponse,
  BaseConfigListResponse,
  BaseConfigListSearchRequest,
  BaseConfigListSearchResponse,
  BaseConfigSalesChannelAggregationRequest,
  BaseConfigSalesChannelAggregationResponse,
  BaseConfigSalesChannelCreateRequest,
  BaseConfigSalesChannelCreateResponse,
  BaseConfigSalesChannelListResponse,
  BaseConfigSalesChannelListSearchRequest,
  BaseConfigSalesChannelListSearchResponse,
  BaseConfigSalesChannelSingleResponse,
  BaseConfigSalesChannelUpdateRequest,
  BaseConfigSalesChannelUpdateResponse,
  BaseConfigSingleResponse,
  BaseConfigUpdateRequest,
  BaseConfigUpdateResponse,
  DocumentAggregationRequest,
  DocumentAggregationResponse,
  DocumentCreateRequest,
  DocumentCreateResponse,
  DocumentListResponse,
  DocumentListSearchRequest,
  DocumentListSearchResponse,
  DocumentSingleResponse,
  DocumentTypeAggregationRequest,
  DocumentTypeAggregationResponse,
  DocumentTypeCreateRequest,
  DocumentTypeCreateResponse,
  DocumentTypeListResponse,
  DocumentTypeListSearchRequest,
  DocumentTypeListSearchResponse,
  DocumentTypeSingleResponse,
  DocumentTypeUpdateRequest,
  DocumentTypeUpdateResponse,
  DocumentUpdateRequest,
  DocumentUpdateResponse,
  NumberReservationResponse,
  UploadResponse
} from "#types/clients/admin/DocumentClient";
import BinaryPayload from "../../payloads/BinaryPayload";

class DocumentClient extends Client {
  /** Document Management **/

  /**
   * @param salesChannelId
   * @param type - The `technicalName` of the document type.
   * @param preview - If `true`, the document number range will not be incremented.
   * @throws {Error} if the request failed
   */
  public async reserveNumber(
    salesChannelId: string,
    type: string,
    preview?: boolean
  ): Promise<NumberReservationResponse> {
    const response = await this.post(`/_action/number-range/reserve/${type}/${salesChannelId}`, {
      query: { preview },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NumberReservationResponse;

    throw new Error(`Failed to reserve number: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async upload(
    id: string,
    extension: string,
    contents: Blob,
    fileName?: string
  ): Promise<UploadResponse> {
    const response = await this.post(`/_action/document/${id}/upload`, {
      query: { extension, fileName },
      headers: { Accept: "application/json" },
      body: new BinaryPayload(contents)
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UploadResponse;

    throw new Error(`Failed to upload file: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * Requires `shopware.media.enable_url_upload_feature` to be enabled.
   *
   * @throws {Error} if the request failed
   */
  public async uploadFromUrl(
    id: string,
    extension: string,
    url: string,
    fileName?: string
  ): Promise<UploadResponse> {
    const response = await this.post(`/_action/document/${id}/upload`, {
      query: { extension, fileName },
      headers: { Accept: "application/json" },
      body: new JsonPayload({ url })
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UploadResponse;

    throw new Error(
      `Failed to upload file from url: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Documents **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDocuments(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DocumentListResponse> {
    const response = await this.get(`/document`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentListResponse;

    throw new Error(
      `Failed to fetch document list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDocument(
    request: DocumentCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DocumentCreateResponse> {
    const response = await this.post(`/document`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentCreateResponse;

    throw new Error(`Failed to create document: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDocuments(
    request: DocumentListSearchRequest
  ): Promise<DocumentListSearchResponse> {
    const response = await this.get(`/search/document`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentListSearchResponse;

    throw new Error(
      `Failed to search for documents: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDocument(id: string): Promise<DocumentSingleResponse> {
    const response = await this.get(`/document/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentSingleResponse;

    throw new Error(`Failed to fetch document: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDocument(id: string): Promise<void> {
    const response = await this.delete(`/document/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete document: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDocument(
    id: string,
    request: DocumentUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DocumentUpdateResponse> {
    const response = await this.patch(`/document/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentUpdateResponse;

    throw new Error(`Failed to update document: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDocumentAggregate(
    request: DocumentAggregationRequest
  ): Promise<DocumentAggregationResponse> {
    const response = await this.post(`/aggregate/document`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentAggregationResponse;

    throw new Error(
      `Failed to aggregate document: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** BaseConfigs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfigs(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<BaseConfigListResponse> {
    const response = await this.get(`/document-base-config`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigListResponse;

    throw new Error(
      `Failed to fetch document base config list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createBaseConfig(
    request: BaseConfigCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<BaseConfigCreateResponse> {
    const response = await this.post(`/document-base-config`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigCreateResponse;

    throw new Error(
      `Failed to create document base config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchBaseConfigs(
    request: BaseConfigListSearchRequest
  ): Promise<BaseConfigListSearchResponse> {
    const response = await this.get(`/search/document-base-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigListSearchResponse;

    throw new Error(
      `Failed to search for document base configs: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfig(id: string): Promise<BaseConfigSingleResponse> {
    const response = await this.get(`/document-base-config/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSingleResponse;

    throw new Error(
      `Failed to fetch document base config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteBaseConfig(id: string): Promise<void> {
    const response = await this.delete(`/document-base-config/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete document base config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateBaseConfig(
    id: string,
    request: BaseConfigUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<BaseConfigUpdateResponse> {
    const response = await this.patch(`/document-base-config/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigUpdateResponse;

    throw new Error(
      `Failed to update document base config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfigAggregate(
    request: BaseConfigAggregationRequest
  ): Promise<BaseConfigAggregationResponse> {
    const response = await this.post(`/aggregate/document-base-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigAggregationResponse;

    throw new Error(
      `Failed to aggregate document base config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Base Config Sales Channels **/

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfigSalesChannels(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<BaseConfigSalesChannelListResponse> {
    const response = await this.get(`/document-base-config-sales-channel`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelListResponse;

    throw new Error(
      `Failed to fetch document base config sales channel list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createBaseConfigSalesChannel(
    request: BaseConfigSalesChannelCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<BaseConfigSalesChannelCreateResponse> {
    const response = await this.post(`/document-base-config-sales-channel`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelCreateResponse;

    throw new Error(
      `Failed to create document base config sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchBaseConfigSalesChannels(
    request: BaseConfigSalesChannelListSearchRequest
  ): Promise<BaseConfigSalesChannelListSearchResponse> {
    const response = await this.get(`/search/document-base-config-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelListSearchResponse;

    throw new Error(
      `Failed to search for document base config sales channels: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfigSalesChannel(
    id: string
  ): Promise<BaseConfigSalesChannelSingleResponse> {
    const response = await this.get(`/document-base-config-sales-channel/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelSingleResponse;

    throw new Error(
      `Failed to fetch document base config sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteBaseConfigSalesChannel(id: string): Promise<void> {
    const response = await this.delete(`/document-base-config-sales-channel/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete document base config sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateBaseConfigSalesChannel(
    id: string,
    request: BaseConfigSalesChannelUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<BaseConfigSalesChannelUpdateResponse> {
    const response = await this.patch(`/document-base-config-sales-channel/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelUpdateResponse;

    throw new Error(
      `Failed to update document base config sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getBaseConfigSalesChannelAggregate(
    request: BaseConfigSalesChannelAggregationRequest
  ): Promise<BaseConfigSalesChannelAggregationResponse> {
    const response = await this.post(`/aggregate/document-base-config-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BaseConfigSalesChannelAggregationResponse;

    throw new Error(
      `Failed to aggregate document base config sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Document Types **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDocumentTypes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DocumentTypeListResponse> {
    const response = await this.get(`/document-type`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeListResponse;

    throw new Error(
      `Failed to fetch document type list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDocumentType(
    request: DocumentTypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DocumentTypeCreateResponse> {
    const response = await this.post(`/document-type`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeCreateResponse;

    throw new Error(
      `Failed to create document type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDocumentTypes(
    request: DocumentTypeListSearchRequest
  ): Promise<DocumentTypeListSearchResponse> {
    const response = await this.get(`/search/document-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeListSearchResponse;

    throw new Error(
      `Failed to search for document types: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDocumentType(id: string): Promise<DocumentTypeSingleResponse> {
    const response = await this.get(`/document-type/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeSingleResponse;

    throw new Error(
      `Failed to fetch document type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDocumentType(id: string): Promise<void> {
    const response = await this.delete(`/document-type/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete document type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDocumentType(
    id: string,
    request: DocumentTypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DocumentTypeUpdateResponse> {
    const response = await this.patch(`/document-type/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeUpdateResponse;

    throw new Error(
      `Failed to update document type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDocumentTypeAggregate(
    request: DocumentTypeAggregationRequest
  ): Promise<DocumentTypeAggregationResponse> {
    const response = await this.post(`/aggregate/document-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentTypeAggregationResponse;

    throw new Error(
      `Failed to aggregate document type: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DocumentClient;
