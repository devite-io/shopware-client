import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import { DocumentDownloadRequest, DocumentDownloadResponse } from "#types/clients/DocumentClient";

class DocumentClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  async downloadDocument(
    deepLinkCode: string,
    documentId: string,
    request: DocumentDownloadRequest
  ): Promise<DocumentDownloadResponse> {
    const response = await this.post(`/document/download/${deepLinkCode}/${documentId}`, {
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
