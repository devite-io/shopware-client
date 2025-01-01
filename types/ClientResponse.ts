import Payload from "#payloads/Payload";

export interface ClientResponse {
  statusCode: number;
  statusMessage: string;
  headers?: Headers;
  body?: Payload<any>;
}
