import { HTTPRequestMethod } from ".";
import { Payload } from "#payloads";

export type ClientRequestOptions = {
  method: HTTPRequestMethod;
  headers: Record<string, string>;
  body?: Payload<any>;
};
