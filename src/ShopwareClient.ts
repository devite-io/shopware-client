import { ClientRequestOptions } from "#types";
import ProductsClient from "#clients/ProductsClient";

class ShopwareClient {
  public forProducts(): ProductsClient {
    return new ProductsClient(this);
  }

  /**
   * Sends a request to the Shopware API.
   * @throws {Error} if the request fails
   */
  public async doRequest(
    path: string,
    options: ClientRequestOptions
  ): Promise<Record<string, any> | ArrayBuffer | string> {
    const requestBody = !options.body
      ? undefined
      : options.body?.constructor.name === "object"
        ? JSON.stringify(options.body)
        : typeof options.body === "string"
          ? (options.body as string)
          : (options.body as ArrayBuffer);
    const response = await fetch(path, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      body: requestBody
    });

    switch (response.headers.get("content-type")) {
      case "application/json":
        return response.json();
      case "application/octet-stream":
        return response.arrayBuffer();
      default:
        return response.text();
    }
  }
}

export default ShopwareClient;
