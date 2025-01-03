import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import {
  DiscountAggregationRequest,
  DiscountAggregationResponse,
  DiscountCreateRequest,
  DiscountCreateResponse,
  DiscountListResponse,
  DiscountListSearchRequest,
  DiscountListSearchResponse,
  DiscountPriceAggregationRequest,
  DiscountPriceAggregationResponse,
  DiscountPriceCreateRequest,
  DiscountPriceCreateResponse,
  DiscountPriceListResponse,
  DiscountPriceListSearchRequest,
  DiscountPriceListSearchResponse,
  DiscountPriceSingleResponse,
  DiscountPriceUpdateRequest,
  DiscountPriceUpdateResponse,
  DiscountSingleResponse,
  DiscountUpdateRequest,
  DiscountUpdateResponse,
  IndividualCodeAggregationRequest,
  IndividualCodeAggregationResponse,
  IndividualCodeCreateRequest,
  IndividualCodeCreateResponse,
  IndividualCodeListResponse,
  IndividualCodeListSearchRequest,
  IndividualCodeListSearchResponse,
  IndividualCodeSingleResponse,
  IndividualCodeUpdateRequest,
  IndividualCodeUpdateResponse,
  PromotionAggregationRequest,
  PromotionAggregationResponse,
  PromotionCreateRequest,
  PromotionCreateResponse,
  PromotionListResponse,
  PromotionListSearchRequest,
  PromotionListSearchResponse,
  PromotionSingleResponse,
  PromotionUpdateRequest,
  PromotionUpdateResponse,
  SalesChannelAggregationRequest,
  SalesChannelAggregationResponse,
  SalesChannelCreateRequest,
  SalesChannelCreateResponse,
  SalesChannelListResponse,
  SalesChannelListSearchRequest,
  SalesChannelListSearchResponse,
  SalesChannelSingleResponse,
  SalesChannelUpdateRequest,
  SalesChannelUpdateResponse,
  SetGroupAggregationRequest,
  SetGroupAggregationResponse,
  SetGroupCreateRequest,
  SetGroupCreateResponse,
  SetGroupListResponse,
  SetGroupListSearchRequest,
  SetGroupListSearchResponse,
  SetGroupSingleResponse,
  SetGroupUpdateRequest,
  SetGroupUpdateResponse
} from "#types/clients/admin/PromotionClient";

class PromotionClient extends Client {
  /** Promotions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPromotions(query?: Criteria): Promise<PromotionListResponse> {
    const response = await this.get(`/promotion` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionListResponse;

    throw new Error(
      `Failed to fetch promotion list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createPromotion(
    request: PromotionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PromotionCreateResponse> {
    const response = await this.post(`/promotion`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionCreateResponse;

    throw new Error(`Failed to create promotion: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPromotions(
    request: PromotionListSearchRequest
  ): Promise<PromotionListSearchResponse> {
    const response = await this.get(`/search/promotion`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionListSearchResponse;

    throw new Error(
      `Failed to search for promotions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPromotion(id: string, query?: Criteria): Promise<PromotionSingleResponse> {
    const response = await this.get(`/promotion/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionSingleResponse;

    throw new Error(`Failed to fetch promotion: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePromotion(id: string): Promise<void> {
    const response = await this.delete(`/promotion/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete promotion: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePromotion(
    id: string,
    request: PromotionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PromotionUpdateResponse> {
    const response = await this.patch(`/promotion/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionUpdateResponse;

    throw new Error(`Failed to update promotion: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPromotionAggregate(
    request: PromotionAggregationRequest
  ): Promise<PromotionAggregationResponse> {
    const response = await this.post(`/aggregate/promotion`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PromotionAggregationResponse;

    throw new Error(
      `Failed to aggregate promotion: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Promotions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscounts(query?: Criteria): Promise<DiscountListResponse> {
    const response = await this.get(`/promotion-discount` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountListResponse;

    throw new Error(
      `Failed to fetch discount list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDiscount(
    request: DiscountCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DiscountCreateResponse> {
    const response = await this.post(`/promotion-discount`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountCreateResponse;

    throw new Error(`Failed to create discount: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDiscounts(
    request: DiscountListSearchRequest
  ): Promise<DiscountListSearchResponse> {
    const response = await this.get(`/search/promotion-discount`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountListSearchResponse;

    throw new Error(
      `Failed to search for discounts: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscount(id: string, query?: Criteria): Promise<DiscountSingleResponse> {
    const response = await this.get(`/promotion-discount/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountSingleResponse;

    throw new Error(`Failed to fetch discount: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDiscount(id: string): Promise<void> {
    const response = await this.delete(`/promotion-discount/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete discount: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDiscount(
    id: string,
    request: DiscountUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DiscountUpdateResponse> {
    const response = await this.patch(`/promotion-discount/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountUpdateResponse;

    throw new Error(`Failed to update discount: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscountAggregate(
    request: DiscountAggregationRequest
  ): Promise<DiscountAggregationResponse> {
    const response = await this.post(`/aggregate/promotion-discount`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountAggregationResponse;

    throw new Error(
      `Failed to aggregate discount: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Discount Prices **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscountPrices(query?: Criteria): Promise<DiscountPriceListResponse> {
    const response = await this.get(`/promotion-discount-price` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceListResponse;

    throw new Error(
      `Failed to fetch discount price list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDiscountPrice(
    request: DiscountPriceCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DiscountPriceCreateResponse> {
    const response = await this.post(`/promotion-discount-price`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceCreateResponse;

    throw new Error(
      `Failed to create discount price: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDiscountPrices(
    request: DiscountPriceListSearchRequest
  ): Promise<DiscountPriceListSearchResponse> {
    const response = await this.get(`/search/promotion-discount-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceListSearchResponse;

    throw new Error(
      `Failed to search for discount prices: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscountPrice(
    id: string,
    query?: Criteria
  ): Promise<DiscountPriceSingleResponse> {
    const response = await this.get(`/promotion-discount-price/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceSingleResponse;

    throw new Error(
      `Failed to fetch discount price: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDiscountPrice(id: string): Promise<void> {
    const response = await this.delete(`/promotion-discount-price/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete discount price: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDiscountPrice(
    id: string,
    request: DiscountPriceUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DiscountPriceUpdateResponse> {
    const response = await this.patch(`/promotion-discount-price/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceUpdateResponse;

    throw new Error(
      `Failed to update discount price: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDiscountPriceAggregate(
    request: DiscountPriceAggregationRequest
  ): Promise<DiscountPriceAggregationResponse> {
    const response = await this.post(`/aggregate/promotion-discount-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DiscountPriceAggregationResponse;

    throw new Error(
      `Failed to aggregate discount price: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Individual Codes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getIndividualCodes(query?: Criteria): Promise<IndividualCodeListResponse> {
    const response = await this.get(`/promotion-individual-code` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeListResponse;

    throw new Error(
      `Failed to fetch individual code list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createIndividualCode(
    request: IndividualCodeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<IndividualCodeCreateResponse> {
    const response = await this.post(`/promotion-individual-code`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeCreateResponse;

    throw new Error(
      `Failed to create individual code: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchIndividualCodes(
    request: IndividualCodeListSearchRequest
  ): Promise<IndividualCodeListSearchResponse> {
    const response = await this.get(`/search/promotion-individual-code`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeListSearchResponse;

    throw new Error(
      `Failed to search for individual codes: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIndividualCode(
    id: string,
    query?: Criteria
  ): Promise<IndividualCodeSingleResponse> {
    const response = await this.get(`/promotion-individual-code/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeSingleResponse;

    throw new Error(
      `Failed to fetch individual code: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteIndividualCode(id: string): Promise<void> {
    const response = await this.delete(`/promotion-individual-code/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete individual code: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateIndividualCode(
    id: string,
    request: IndividualCodeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<IndividualCodeUpdateResponse> {
    const response = await this.patch(`/promotion-individual-code/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeUpdateResponse;

    throw new Error(
      `Failed to update individual code: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIndividualCodeAggregate(
    request: IndividualCodeAggregationRequest
  ): Promise<IndividualCodeAggregationResponse> {
    const response = await this.post(`/aggregate/promotion-individual-code`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndividualCodeAggregationResponse;

    throw new Error(
      `Failed to aggregate individual code: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Sales Channels **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannels(query?: Criteria): Promise<SalesChannelListResponse> {
    const response = await this.get(`/promotion-sales-channel` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListResponse;

    throw new Error(
      `Failed to fetch sales channel list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSalesChannel(
    request: SalesChannelCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelCreateResponse> {
    const response = await this.post(`/promotion-sales-channel`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelCreateResponse;

    throw new Error(
      `Failed to create sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSalesChannels(
    request: SalesChannelListSearchRequest
  ): Promise<SalesChannelListSearchResponse> {
    const response = await this.get(`/search/promotion-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListSearchResponse;

    throw new Error(
      `Failed to search for sales channels: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannel(id: string, query?: Criteria): Promise<SalesChannelSingleResponse> {
    const response = await this.get(`/promotion-sales-channel/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelSingleResponse;

    throw new Error(
      `Failed to fetch sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSalesChannel(id: string): Promise<void> {
    const response = await this.delete(`/promotion-sales-channel/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSalesChannel(
    id: string,
    request: SalesChannelUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelUpdateResponse> {
    const response = await this.patch(`/promotion-sales-channel/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelUpdateResponse;

    throw new Error(
      `Failed to update sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannelAggregate(
    request: SalesChannelAggregationRequest
  ): Promise<SalesChannelAggregationResponse> {
    const response = await this.post(`/aggregate/promotion-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelAggregationResponse;

    throw new Error(
      `Failed to aggregate sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Set Groups **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSetGroups(query?: Criteria): Promise<SetGroupListResponse> {
    const response = await this.get(`/promotion-setgroup` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupListResponse;

    throw new Error(
      `Failed to fetch set group list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSetGroup(
    request: SetGroupCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SetGroupCreateResponse> {
    const response = await this.post(`/promotion-setgroup`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupCreateResponse;

    throw new Error(`Failed to create set group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSetGroups(
    request: SetGroupListSearchRequest
  ): Promise<SetGroupListSearchResponse> {
    const response = await this.get(`/search/promotion-setgroup`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupListSearchResponse;

    throw new Error(
      `Failed to search for set groups: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSetGroup(id: string, query?: Criteria): Promise<SetGroupSingleResponse> {
    const response = await this.get(`/promotion-setgroup/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupSingleResponse;

    throw new Error(`Failed to fetch set group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSetGroup(id: string): Promise<void> {
    const response = await this.delete(`/promotion-setgroup/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete set group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSetGroup(
    id: string,
    request: SetGroupUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SetGroupUpdateResponse> {
    const response = await this.patch(`/promotion-setgroup/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupUpdateResponse;

    throw new Error(`Failed to update set group: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSetGroupAggregate(
    request: SetGroupAggregationRequest
  ): Promise<SetGroupAggregationResponse> {
    const response = await this.post(`/aggregate/promotion-setgroup`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetGroupAggregationResponse;

    throw new Error(
      `Failed to aggregate set group: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default PromotionClient;
