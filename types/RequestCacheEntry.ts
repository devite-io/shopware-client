import { ClientResponse } from "./ClientResponse";

export interface RequestCacheEntry {
  cachedAt: number;
  response: ClientResponse;
}
