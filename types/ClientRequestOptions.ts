import Payload from "#payloads/Payload";
import HTTPRequestMethod from "../src/HTTPRequestMethod";

export type ClientRequestOptions = {
  /** @default HTTPRequestMethod.GET */
  method?: HTTPRequestMethod;
  headers?: Record<string, string>;
  body?: Payload<any>;
  /** @default 0 */
  maxAge?: number;
};
