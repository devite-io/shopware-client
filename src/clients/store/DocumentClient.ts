import BinaryPayload from "#payloads/BinaryPayload";
import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import { DocumentDownloadResponse } from "#types/clients/store/DocumentClient";

class DocumentClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  async download(id: string, deepLinkCode: string): Promise<DocumentDownloadResponse> {
    const response = await this.post(
      `/document/download/${id}/${deepLinkCode}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DocumentDownloadResponse;

    throw new ShopwareError("Failed to download document", response);
  }
}

export default DocumentClient;
