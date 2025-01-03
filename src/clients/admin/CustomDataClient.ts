import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  CustomEntityAggregationRequest,
  CustomEntityAggregationResponse,
  CustomEntityCreateRequest,
  CustomEntityCreateResponse,
  CustomEntityListResponse,
  CustomEntityListSearchRequest,
  CustomEntityListSearchResponse,
  CustomEntitySingleResponse,
  CustomEntityUpdateRequest,
  CustomEntityUpdateResponse,
  CustomFieldAggregationRequest,
  CustomFieldAggregationResponse,
  CustomFieldCreateRequest,
  CustomFieldCreateResponse,
  CustomFieldListResponse,
  CustomFieldListSearchRequest,
  CustomFieldListSearchResponse,
  CustomFieldSetAggregationRequest,
  CustomFieldSetAggregationResponse,
  CustomFieldSetCreateRequest,
  CustomFieldSetCreateResponse,
  CustomFieldSetListResponse,
  CustomFieldSetListSearchRequest,
  CustomFieldSetListSearchResponse,
  CustomFieldSetRelationAggregationRequest,
  CustomFieldSetRelationAggregationResponse,
  CustomFieldSetRelationCreateRequest,
  CustomFieldSetRelationCreateResponse,
  CustomFieldSetRelationListResponse,
  CustomFieldSetRelationListSearchRequest,
  CustomFieldSetRelationListSearchResponse,
  CustomFieldSetRelationSingleResponse,
  CustomFieldSetRelationUpdateRequest,
  CustomFieldSetRelationUpdateResponse,
  CustomFieldSetSingleResponse,
  CustomFieldSetUpdateRequest,
  CustomFieldSetUpdateResponse,
  CustomFieldSingleResponse,
  CustomFieldUpdateRequest,
  CustomFieldUpdateResponse
} from "#types/clients/admin/CustomDataClient";

class CustomDataClient extends Client {
  /** Custom Entities */

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomEntities(query?: Criteria): Promise<CustomEntityListResponse> {
    const response = await this.get(`/custom-entity` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntityListResponse;

    throw new ShopwareError("Failed to fetch custom entity list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCustomEntity(
    request: CustomEntityCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomEntityCreateResponse> {
    const response = await this.post(`/custom-entity`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntityCreateResponse;

    throw new ShopwareError("Failed to create custom entity", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomEntities(
    request: CustomEntityListSearchRequest
  ): Promise<CustomEntityListSearchResponse> {
    const response = await this.get(`/search/custom-entity`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntityListSearchResponse;

    throw new ShopwareError("Failed to search for custom entities", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomEntity(id: string, query?: Criteria): Promise<CustomEntitySingleResponse> {
    const response = await this.get(`/custom-entity/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntitySingleResponse;

    throw new ShopwareError("Failed to fetch custom entity", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomEntity(id: string): Promise<void> {
    const response = await this.delete(`/custom-entity/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete custom entity", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCustomEntity(
    id: string,
    request: CustomEntityUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomEntityUpdateResponse> {
    const response = await this.patch(`/custom-entity/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntityUpdateResponse;

    throw new ShopwareError("Failed to update custom entity", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomEntityAggregate(
    request: CustomEntityAggregationRequest
  ): Promise<CustomEntityAggregationResponse> {
    const response = await this.post(`/aggregate/custom-entity`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomEntityAggregationResponse;

    throw new ShopwareError("Failed to aggregate custom entity", response);
  }

  /** Custom Fields */

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFields(query?: Criteria): Promise<CustomFieldListResponse> {
    const response = await this.get(`/custom-field` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldListResponse;

    throw new ShopwareError("Failed to fetch custom field list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCustomField(
    request: CustomFieldCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldCreateResponse> {
    const response = await this.post(`/custom-field`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldCreateResponse;

    throw new ShopwareError("Failed to create custom field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomFields(
    request: CustomFieldListSearchRequest
  ): Promise<CustomFieldListSearchResponse> {
    const response = await this.get(`/search/custom-field`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldListSearchResponse;

    throw new ShopwareError("Failed to search for custom fields", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomField(id: string, query?: Criteria): Promise<CustomFieldSingleResponse> {
    const response = await this.get(`/custom-field/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSingleResponse;

    throw new ShopwareError("Failed to fetch custom field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomField(id: string): Promise<void> {
    const response = await this.delete(`/custom-field/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete custom field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCustomField(
    id: string,
    request: CustomFieldUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldUpdateResponse> {
    const response = await this.patch(`/custom-field/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldUpdateResponse;

    throw new ShopwareError("Failed to update custom field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldAggregate(
    request: CustomFieldAggregationRequest
  ): Promise<CustomFieldAggregationResponse> {
    const response = await this.post(`/aggregate/custom-field`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldAggregationResponse;

    throw new ShopwareError("Failed to aggregate custom field", response);
  }

  /** Custom Field Sets */

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSets(query?: Criteria): Promise<CustomFieldSetListResponse> {
    const response = await this.get(`/custom-field-set` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetListResponse;

    throw new ShopwareError("Failed to fetch custom fieldset list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCustomFieldSet(
    request: CustomFieldSetCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldSetCreateResponse> {
    const response = await this.post(`/custom-field-set`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetCreateResponse;

    throw new ShopwareError("Failed to create custom fieldset", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomFieldSets(
    request: CustomFieldSetListSearchRequest
  ): Promise<CustomFieldSetListSearchResponse> {
    const response = await this.get(`/search/custom-field-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetListSearchResponse;

    throw new ShopwareError("Failed to search for custom fieldsets", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSet(
    id: string,
    query?: Criteria
  ): Promise<CustomFieldSetSingleResponse> {
    const response = await this.get(`/custom-field-set/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetSingleResponse;

    throw new ShopwareError("Failed to fetch custom fieldset", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomFieldSet(id: string): Promise<void> {
    const response = await this.delete(`/custom-field-set/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete custom fieldset", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCustomFieldSet(
    id: string,
    request: CustomFieldSetUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldSetUpdateResponse> {
    const response = await this.patch(`/custom-field-set/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetUpdateResponse;

    throw new ShopwareError("Failed to update custom fieldset", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSetAggregate(
    request: CustomFieldSetAggregationRequest
  ): Promise<CustomFieldSetAggregationResponse> {
    const response = await this.post(`/aggregate/custom-field-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetAggregationResponse;

    throw new ShopwareError("Failed to aggregate custom fieldset", response);
  }

  /** Custom Field Set Relations */

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSetRelations(
    query?: Criteria
  ): Promise<CustomFieldSetRelationListResponse> {
    const response = await this.get(`/custom-field-set-relation` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationListResponse;

    throw new ShopwareError("Failed to fetch custom fieldset relation list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCustomFieldSetRelation(
    request: CustomFieldSetRelationCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldSetRelationCreateResponse> {
    const response = await this.post(`/custom-field-set-relation`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationCreateResponse;

    throw new ShopwareError("Failed to create custom fieldset relation", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomFieldSetRelations(
    request: CustomFieldSetRelationListSearchRequest
  ): Promise<CustomFieldSetRelationListSearchResponse> {
    const response = await this.get(`/search/custom-field-set-relation`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationListSearchResponse;

    throw new ShopwareError("Failed to search for custom entities", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSetRelation(
    id: string,
    query?: Criteria
  ): Promise<CustomFieldSetRelationSingleResponse> {
    const response = await this.get(`/custom-field-set-relation/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationSingleResponse;

    throw new ShopwareError("Failed to fetch custom fieldset relation", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomFieldSetRelation(id: string): Promise<void> {
    const response = await this.delete(`/custom-field-set-relation/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete custom fieldset relation", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCustomFieldSetRelation(
    id: string,
    request: CustomFieldSetRelationUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomFieldSetRelationUpdateResponse> {
    const response = await this.patch(`/custom-field-set-relation/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationUpdateResponse;

    throw new ShopwareError("Failed to update custom fieldset relation", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomFieldSetRelationAggregate(
    request: CustomFieldSetRelationAggregationRequest
  ): Promise<CustomFieldSetRelationAggregationResponse> {
    const response = await this.post(`/aggregate/custom-field-set-relation`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomFieldSetRelationAggregationResponse;

    throw new ShopwareError("Failed to aggregate custom fieldset relation", response);
  }
}

export default CustomDataClient;
