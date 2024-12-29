import Payload from "#payloads/Payload";

export type ClientResponse = {
  statusCode: number;
  statusMessage: string;
  headers?: Headers;
  body?: Payload<any>;
};
