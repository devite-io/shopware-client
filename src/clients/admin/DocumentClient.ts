import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  NumberReservationResponse,
  UploadResponse,
  DownloadResponse
} from "#types/clients/admin/DocumentClient";
import BinaryPayload from "../../payloads/BinaryPayload";
import { ShopwareDocument } from "#types/api/admin/document/ShopwareDocument";
import { ShopwareDocumentType } from "#types/api/admin/document/ShopwareDocumentType";
import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfig";
import { ShopwareDocumentBaseConfigSalesChannel } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfigSalesChannel";
import createRestEndpoint from "../../utils/createRestEndpoint";

class DocumentClient extends Client {
  /** Document Management **/

  /**
   * @param salesChannelId
   * @param type - The `technicalName` of the document type.
   * @param preview - If `true`, the document number range will not be incremented.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    throw new ShopwareError("Failed to reserve number", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    throw new ShopwareError("Failed to upload file", response);
  }

  /**
   * Requires `shopware.media.enable_url_upload_feature` to be enabled.
   *
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    throw new ShopwareError("Failed to upload file from url", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async download(
    id: string,
    deepLinkCode: string,
    download?: boolean,
    fileType?: string
  ): Promise<DownloadResponse> {
    const response = await this.get(`/_action/document/${id}/${deepLinkCode}`, {
      query: { download, fileType },
      headers: {
        Accept:
          fileType === "pdf"
            ? "application/pdf"
            : fileType === "html"
              ? "text/html"
              : "application/octet-stream"
      }
    });

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DownloadResponse;

    throw new ShopwareError("Failed to download document", response);
  }

  /** Rest Endpoints **/

  public documents = createRestEndpoint<ShopwareDocument>(this, "document", "document");
  public documentTypes = createRestEndpoint<ShopwareDocumentType>(
    this,
    "document-type",
    "document-type"
  );
  public baseConfigs = createRestEndpoint<ShopwareDocumentBaseConfig>(
    this,
    "document-base-config",
    "document base config"
  );
  public baseConfigSalesChannels = createRestEndpoint<ShopwareDocumentBaseConfigSalesChannel>(
    this,
    "document-base-config-sales-channel",
    "document base config sales channel"
  );
}

export default DocumentClient;
