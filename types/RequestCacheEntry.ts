import { ClientResponse } from "./ClientResponse";

export type RequestCacheEntry = {
  cachedAt: number;
  response: ClientResponse;
};
