import Client from "../clients/Client";
import HTTPRequestMethod from "../http/HTTPRequestMethod";
import JsonPayload from "../payloads/JsonPayload";
import ShopwareError from "../http/ShopwareError";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";
import { buildQuery } from "./SwagQL";

async function requestEndpoint<T>(
  client: Client,
  method: HTTPRequestMethod,
  endpoint: string,
  expectedStatusCode: number,
  actionDescription: string,
  query?: Record<string, string | undefined>,
  body?: JsonPayload
) {
  const expectContent = expectedStatusCode !== 204;
  const response = await client.doRequest(method, endpoint, {
    headers: {
      ...(expectContent ? { Accept: "application/json" } : {}),
      ...(body ? { "Content-Type": "application/json" } : {})
    },
    query,
    body
  });

  if (response.statusCode === expectedStatusCode)
    return (response.body as JsonPayload | undefined)?.data as T;

  throw new ShopwareError(`Failed to ${actionDescription}`, response);
}

export default function createRestEndpoint<T>(
  client: Client,
  resourceIdentifier: string,
  dataName: string
) {
  return {
    /**
     * Requires "{resourceIdentifier}:read" permission.
     * @param {Criteria} [query]
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    getList: (query?: Criteria) =>
      requestEndpoint<{ total: number; data: T[] }>(
        client,
        HTTPRequestMethod.GET,
        `/${resourceIdentifier}${buildQuery(query)}`,
        200,
        `fetch ${dataName} list`
      ),

    /**
     * Requires "{resourceIdentifier}:read" permission.
     * @param {Criteria} criteria
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    search: (criteria: Criteria) =>
      requestEndpoint<{ total: number; data: Array<T> }>(
        client,
        HTTPRequestMethod.POST,
        `/search/${resourceIdentifier}`,
        200,
        `search ${dataName}`,
        undefined,
        new JsonPayload(criteria)
      ),

    /**
     * Requires "{resourceIdentifier}:create" permission.
     * @param {Partial<T>} data
     * @param {"basic" | "detail"} [responseDetails]
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    create: (data: Partial<T>, responseDetails?: "basic" | "detail") =>
      requestEndpoint<{ data: T }>(
        client,
        HTTPRequestMethod.POST,
        `/${resourceIdentifier}`,
        responseDetails === "detail" ? 200 : 204,
        `create ${dataName}`,
        { _response: responseDetails },
        new JsonPayload(data)
      ),

    /**
     * Requires "{resourceIdentifier}:read" permission.
     * @param {string} id
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    get: (id: string) =>
      requestEndpoint<{ data: T }>(
        client,
        HTTPRequestMethod.GET,
        `/${resourceIdentifier}/${id}`,
        200,
        `fetch ${dataName} with id ${id}`
      ),

    /**
     * Requires "{resourceIdentifier}:update" permission.
     * @param {string} id
     * @param {Partial<T>} data
     * @param {"basic" | "detail"} [responseDetails]
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    update: (id: string, data: Partial<T>, responseDetails?: "basic" | "detail") =>
      requestEndpoint<{ data: T }>(
        client,
        HTTPRequestMethod.PATCH,
        `/${resourceIdentifier}/${id}`,
        responseDetails === "detail" ? 200 : 204,
        `update ${dataName} with id ${id}`,
        { _response: responseDetails },
        new JsonPayload(data)
      ),

    /**
     * Requires "{resourceIdentifier}:delete" permission.
     * @param {string} id
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    delete: (id: string) =>
      requestEndpoint<void>(
        client,
        HTTPRequestMethod.DELETE,
        `/${resourceIdentifier}/${id}`,
        204,
        `delete ${dataName} with id ${id}`
      ),

    /**
     * Requires "{resourceIdentifier}:read" permission.
     * @param {Array<Aggregation>} aggregations
     * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
     */
    aggregate: (aggregations: Array<Aggregation>) =>
      requestEndpoint<{ total: number; data: Array<T> }>(
        client,
        HTTPRequestMethod.POST,
        `/aggregate/${resourceIdentifier}`,
        200,
        `aggregate ${dataName}`,
        undefined,
        new JsonPayload(aggregations)
      )
  };
}
