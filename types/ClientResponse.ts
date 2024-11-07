import { Payload } from "#payloads";

export type ClientResponse = {
  statusCode: number;
  statusMessage: string;
  headers?: Headers;
  body?: Payload<any>;
};
