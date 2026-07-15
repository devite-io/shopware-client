import BinaryPayload from "../../payloads/BinaryPayload";
import Client from "../Client";
import JsonPayload from "@payloads/JsonPayload";
import ShopwareError from "@http/ShopwareError";
import createRestEndpoint from "@utils/createRestEndpoint";
import { DownloadResponse, UploadResponse } from "#types/clients/admin/DocumentClient";
import { ShopwareDocument } from "#types/api/admin/document/ShopwareDocument";
import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/ShopwareDocumentBaseConfig";
import { ShopwareDocumentType } from "#types/api/admin/document/ShopwareDocumentType";

class DocumentClient extends Client {
  /** Document Management **/

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
}

export default DocumentClient;
