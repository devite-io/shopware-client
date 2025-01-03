import type { ClientResponse } from "#types/ClientResponse";

class ShopwareError extends Error {
  public readonly response: ClientResponse;

  constructor(message: string, response: ClientResponse) {
    super(message + ": " + response.statusCode + " " + response.statusMessage);

    this.response = response;
  }
}

export default ShopwareError;
