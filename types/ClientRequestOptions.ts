import { HTTPRequestMethod } from ".";
import { Payload } from "#payloads";

export type ClientRequestOptions = {
  /** @default HTTPRequestMethod.GET */
  method?: HTTPRequestMethod;
  headers?: Record<string, string>;
  body?: Payload<any>;
};
