import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  DocumentDownloadRequest,
  DocumentDownloadResponse
} from "#types/clients/store/DocumentClient";

class DocumentClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  async download(
    id: string,
    deepLinkCode: string,
    request: DocumentDownloadRequest
  ): Promise<DocumentDownloadResponse> {
    const response = await this.post(`/document/download/${deepLinkCode}/${id}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentDownloadResponse;

    throw new ShopwareError("Failed to download document", response);
  }
}

export default DocumentClient;
