import BinaryPayload from "#payloads/BinaryPayload";
import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import { DocumentDownloadResponse } from "#types/clients/store/DocumentClient";

class DocumentClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  async download(id: string, deepLinkCode: string): Promise<DocumentDownloadResponse> {
    const response = await this.get(
      `/document/download/${id}/${deepLinkCode}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DocumentDownloadResponse;

    throw new ShopwareError("Failed to download document", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  async downloadAsGuest(
    id: string,
    deepLinkCode: string,
    email: string,
    billingAddressZipCode: string
  ): Promise<DocumentDownloadResponse> {
    const response = await this.post(
      `/document/download/${id}/${deepLinkCode}`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload({
          email,
          zipcode: billingAddressZipCode
        })
      })
    );

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DocumentDownloadResponse;

    throw new ShopwareError("Failed to download document as guest", response);
  }
}

export default DocumentClient;
