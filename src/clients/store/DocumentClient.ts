import Client from "../Client";
import {
  DocumentDownloadRequest,
  DocumentDownloadResponse
} from "#types/clients/store/DocumentClient";
import JsonPayload from "#payloads/JsonPayload";

class DocumentClient extends Client {
  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to download document: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DocumentClient;
