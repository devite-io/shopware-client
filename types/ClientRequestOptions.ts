import Payload from "#payloads/Payload";
import HTTPRequestMethod from "#http/HTTPRequestMethod";

export interface ClientRequestOptions {
  /** @default HTTPRequestMethod.GET */
  method?: HTTPRequestMethod;
  query?: Record<string, any>;
  headers?: Record<string, string>;
  body?: Payload<any>;
  /** @default 0 */
  maxAge?: number;
}
