import Payload from "@payloads/Payload";
import HTTPRequestMethod from "@http/HTTPRequestMethod";

export interface ClientRequestOptions {
  /** @default HTTPRequestMethod.GET */
  method?: HTTPRequestMethod;
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
  body?: Payload<unknown>;
}
