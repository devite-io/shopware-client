import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  ConfiguratorSettingAggregationRequest,
  ConfiguratorSettingAggregationResponse,
  ConfiguratorSettingCreateRequest,
  ConfiguratorSettingCreateResponse,
  ConfiguratorSettingListResponse,
  ConfiguratorSettingListSearchRequest,
  ConfiguratorSettingListSearchResponse,
  ConfiguratorSettingSingleResponse,
  ConfiguratorSettingUpdateRequest,
  ConfiguratorSettingUpdateResponse,
  CrossSellingAggregationRequest,
  CrossSellingAggregationResponse,
  CrossSellingAssignedProductAggregationRequest,
  CrossSellingAssignedProductAggregationResponse,
  CrossSellingAssignedProductCreateRequest,
  CrossSellingAssignedProductCreateResponse,
  CrossSellingAssignedProductListResponse,
  CrossSellingAssignedProductListSearchRequest,
  CrossSellingAssignedProductListSearchResponse,
  CrossSellingAssignedProductSingleResponse,
  CrossSellingAssignedProductUpdateRequest,
  CrossSellingAssignedProductUpdateResponse,
  CrossSellingCreateRequest,
  CrossSellingCreateResponse,
  CrossSellingListResponse,
  CrossSellingListSearchRequest,
  CrossSellingListSearchResponse,
  CrossSellingSingleResponse,
  CrossSellingUpdateRequest,
  CrossSellingUpdateResponse,
  DownloadAggregationRequest,
  DownloadAggregationResponse,
  DownloadCreateRequest,
  DownloadCreateResponse,
  DownloadListResponse,
  DownloadListSearchRequest,
  DownloadListSearchResponse,
  DownloadSingleResponse,
  DownloadUpdateRequest,
  DownloadUpdateResponse,
  ExportAggregationRequest,
  ExportAggregationResponse,
  ExportCreateRequest,
  ExportCreateResponse,
  ExportListResponse,
  ExportListSearchRequest,
  ExportListSearchResponse,
  ExportSingleResponse,
  ExportUpdateRequest,
  ExportUpdateResponse,
  FeatureSetAggregationRequest,
  FeatureSetAggregationResponse,
  FeatureSetCreateRequest,
  FeatureSetCreateResponse,
  FeatureSetListResponse,
  FeatureSetListSearchRequest,
  FeatureSetListSearchResponse,
  FeatureSetSingleResponse,
  FeatureSetUpdateRequest,
  FeatureSetUpdateResponse,
  KeywordDictionaryAggregationRequest,
  KeywordDictionaryAggregationResponse,
  KeywordDictionaryCreateRequest,
  KeywordDictionaryCreateResponse,
  KeywordDictionaryListResponse,
  KeywordDictionaryListSearchRequest,
  KeywordDictionaryListSearchResponse,
  KeywordDictionarySingleResponse,
  KeywordDictionaryUpdateRequest,
  KeywordDictionaryUpdateResponse,
  ManufacturerAggregationRequest,
  ManufacturerAggregationResponse,
  ManufacturerCreateRequest,
  ManufacturerCreateResponse,
  ManufacturerListResponse,
  ManufacturerListSearchRequest,
  ManufacturerListSearchResponse,
  ManufacturerSingleResponse,
  ManufacturerUpdateRequest,
  ManufacturerUpdateResponse,
  MediaAggregationRequest,
  MediaAggregationResponse,
  MediaCreateRequest,
  MediaCreateResponse,
  MediaListResponse,
  MediaListSearchRequest,
  MediaListSearchResponse,
  MediaSingleResponse,
  MediaUpdateRequest,
  MediaUpdateResponse,
  PriceAggregationRequest,
  PriceAggregationResponse,
  PriceCreateRequest,
  PriceCreateResponse,
  PriceListResponse,
  PriceListSearchRequest,
  PriceListSearchResponse,
  PriceSingleResponse,
  PriceUpdateRequest,
  PriceUpdateResponse,
  ProductAggregationRequest,
  ProductAggregationResponse,
  ProductCreateRequest,
  ProductCreateResponse,
  ProductListResponse,
  ProductListSearchRequest,
  ProductListSearchResponse,
  ProductSingleResponse,
  ProductUpdateRequest,
  ProductUpdateResponse,
  ReviewAggregationRequest,
  ReviewAggregationResponse,
  ReviewCreateRequest,
  ReviewCreateResponse,
  ReviewListResponse,
  ReviewListSearchRequest,
  ReviewListSearchResponse,
  ReviewSingleResponse,
  ReviewUpdateRequest,
  ReviewUpdateResponse,
  SearchConfigAggregationRequest,
  SearchConfigAggregationResponse,
  SearchConfigCreateRequest,
  SearchConfigCreateResponse,
  SearchConfigFieldAggregationRequest,
  SearchConfigFieldAggregationResponse,
  SearchConfigFieldCreateRequest,
  SearchConfigFieldCreateResponse,
  SearchConfigFieldListResponse,
  SearchConfigFieldListSearchRequest,
  SearchConfigFieldListSearchResponse,
  SearchConfigFieldSingleResponse,
  SearchConfigFieldUpdateRequest,
  SearchConfigFieldUpdateResponse,
  SearchConfigListResponse,
  SearchConfigListSearchRequest,
  SearchConfigListSearchResponse,
  SearchConfigSingleResponse,
  SearchConfigUpdateRequest,
  SearchConfigUpdateResponse,
  SearchKeywordAggregationRequest,
  SearchKeywordAggregationResponse,
  SearchKeywordCreateRequest,
  SearchKeywordCreateResponse,
  SearchKeywordListResponse,
  SearchKeywordListSearchRequest,
  SearchKeywordListSearchResponse,
  SearchKeywordSingleResponse,
  SearchKeywordUpdateRequest,
  SearchKeywordUpdateResponse,
  SortingAggregationRequest,
  SortingAggregationResponse,
  SortingCreateRequest,
  SortingCreateResponse,
  SortingListResponse,
  SortingListSearchRequest,
  SortingListSearchResponse,
  SortingSingleResponse,
  SortingUpdateRequest,
  SortingUpdateResponse,
  StreamAggregationRequest,
  StreamAggregationResponse,
  StreamCreateRequest,
  StreamCreateResponse,
  StreamFilterAggregationRequest,
  StreamFilterAggregationResponse,
  StreamFilterCreateRequest,
  StreamFilterCreateResponse,
  StreamFilterListResponse,
  StreamFilterListSearchRequest,
  StreamFilterListSearchResponse,
  StreamFilterSingleResponse,
  StreamFilterUpdateRequest,
  StreamFilterUpdateResponse,
  StreamListResponse,
  StreamListSearchRequest,
  StreamListSearchResponse,
  StreamSingleResponse,
  StreamUpdateRequest,
  StreamUpdateResponse,
  VisibilityAggregationRequest,
  VisibilityAggregationResponse,
  VisibilityCreateRequest,
  VisibilityCreateResponse,
  VisibilityListResponse,
  VisibilityListSearchRequest,
  VisibilityListSearchResponse,
  VisibilitySingleResponse,
  VisibilityUpdateRequest,
  VisibilityUpdateResponse
} from "#types/clients/admin/ProductClient";

class ProductClient extends Client {
  /** Products **/

  /**
   * @throws {Error} if the request failed
   */
  public async getProducts(query?: Criteria): Promise<ProductListResponse> {
    const response = await this.get(`/product` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListResponse;

    throw new ShopwareError("Failed to fetch product list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createProduct(
    request: ProductCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProductCreateResponse> {
    const response = await this.post(`/product`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductCreateResponse;

    throw new ShopwareError("Failed to create product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchProducts(
    request: ProductListSearchRequest
  ): Promise<ProductListSearchResponse> {
    const response = await this.get(`/search/product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListSearchResponse;

    throw new ShopwareError("Failed to search for products", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProduct(id: string, query?: Criteria): Promise<ProductSingleResponse> {
    const response = await this.get(`/product/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSingleResponse;

    throw new ShopwareError("Failed to fetch product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteProduct(id: string): Promise<void> {
    const response = await this.delete(`/product/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateProduct(
    id: string,
    request: ProductUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProductUpdateResponse> {
    const response = await this.patch(`/product/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductUpdateResponse;

    throw new ShopwareError("Failed to update product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProductAggregate(
    request: ProductAggregationRequest
  ): Promise<ProductAggregationResponse> {
    const response = await this.post(`/aggregate/product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductAggregationResponse;

    throw new ShopwareError("Failed to aggregate product", response);
  }

  /** Configurator Settings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSettings(query?: Criteria): Promise<ConfiguratorSettingListResponse> {
    const response = await this.get(`/product-configurator-setting` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingListResponse;

    throw new ShopwareError("Failed to fetch configurator setting list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createConfiguratorSetting(
    request: ConfiguratorSettingCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfiguratorSettingCreateResponse> {
    const response = await this.post(`/product-configurator-setting`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingCreateResponse;

    throw new ShopwareError("Failed to create configurator setting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConfiguratorSettings(
    request: ConfiguratorSettingListSearchRequest
  ): Promise<ConfiguratorSettingListSearchResponse> {
    const response = await this.get(`/search/product-configurator-setting`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingListSearchResponse;

    throw new ShopwareError("Failed to search for configurator settings", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSetting(
    id: string,
    query?: Criteria
  ): Promise<ConfiguratorSettingSingleResponse> {
    const response = await this.get(`/product-configurator-setting/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingSingleResponse;

    throw new ShopwareError("Failed to fetch configurator setting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteConfiguratorSetting(id: string): Promise<void> {
    const response = await this.delete(`/product-configurator-setting/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete configurator setting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateConfiguratorSetting(
    id: string,
    request: ConfiguratorSettingUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfiguratorSettingUpdateResponse> {
    const response = await this.patch(`/product-configurator-setting/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingUpdateResponse;

    throw new ShopwareError("Failed to update configurator setting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSettingAggregate(
    request: ConfiguratorSettingAggregationRequest
  ): Promise<ConfiguratorSettingAggregationResponse> {
    const response = await this.post(`/aggregate/product-configurator-setting`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingAggregationResponse;

    throw new ShopwareError("Failed to aggregate configurator setting", response);
  }

  /** Cross Sellings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellings(query?: Criteria): Promise<CrossSellingListResponse> {
    const response = await this.get(`/product-cross-selling` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingListResponse;

    throw new ShopwareError("Failed to fetch cross selling list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCrossSelling(
    request: CrossSellingCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CrossSellingCreateResponse> {
    const response = await this.post(`/product-cross-selling`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingCreateResponse;

    throw new ShopwareError("Failed to create cross selling", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCrossSellings(
    request: CrossSellingListSearchRequest
  ): Promise<CrossSellingListSearchResponse> {
    const response = await this.get(`/search/product-cross-selling`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingListSearchResponse;

    throw new ShopwareError("Failed to search for cross sellings", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSelling(id: string, query?: Criteria): Promise<CrossSellingSingleResponse> {
    const response = await this.get(`/product-cross-selling/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingSingleResponse;

    throw new ShopwareError("Failed to fetch cross selling", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCrossSelling(id: string): Promise<void> {
    const response = await this.delete(`/product-cross-selling/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cross selling", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCrossSelling(
    id: string,
    request: CrossSellingUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CrossSellingUpdateResponse> {
    const response = await this.patch(`/product-cross-selling/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingUpdateResponse;

    throw new ShopwareError("Failed to update cross selling", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAggregate(
    request: CrossSellingAggregationRequest
  ): Promise<CrossSellingAggregationResponse> {
    const response = await this.post(`/aggregate/product-cross-selling`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAggregationResponse;

    throw new ShopwareError("Failed to aggregate cross selling", response);
  }

  /** Cross Selling Assigned Products **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProducts(
    query?: Criteria
  ): Promise<CrossSellingAssignedProductListResponse> {
    const response = await this.get(`/product-cross-selling-assigned-product` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductListResponse;

    throw new ShopwareError("Failed to fetch cross selling assigned product list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCrossSellingAssignedProduct(
    request: CrossSellingAssignedProductCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CrossSellingAssignedProductCreateResponse> {
    const response = await this.post(`/product-cross-selling-assigned-product`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductCreateResponse;

    throw new ShopwareError("Failed to create cross selling assigned product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCrossSellingAssignedProducts(
    request: CrossSellingAssignedProductListSearchRequest
  ): Promise<CrossSellingAssignedProductListSearchResponse> {
    const response = await this.get(`/search/product-cross-selling-assigned-product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductListSearchResponse;

    throw new ShopwareError("Failed to search for cross selling assigned products", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProduct(
    id: string,
    query?: Criteria
  ): Promise<CrossSellingAssignedProductSingleResponse> {
    const response = await this.get(
      `/product-cross-selling-assigned-product/${id}` + buildQuery(query),
      {
        headers: { Accept: "application/json" }
      }
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductSingleResponse;

    throw new ShopwareError("Failed to fetch cross selling assigned product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCrossSellingAssignedProduct(id: string): Promise<void> {
    const response = await this.delete(`/product-cross-selling-assigned-product/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cross selling assigned product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCrossSellingAssignedProduct(
    id: string,
    request: CrossSellingAssignedProductUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CrossSellingAssignedProductUpdateResponse> {
    const response = await this.patch(`/product-cross-selling-assigned-product/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductUpdateResponse;

    throw new ShopwareError("Failed to update cross selling assigned product", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProductAggregate(
    request: CrossSellingAssignedProductAggregationRequest
  ): Promise<CrossSellingAssignedProductAggregationResponse> {
    const response = await this.post(`/aggregate/product-cross-selling-assigned-product`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductAggregationResponse;

    throw new ShopwareError("Failed to aggregate cross selling assigned product", response);
  }

  /** Downloads **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDownloads(query?: Criteria): Promise<DownloadListResponse> {
    const response = await this.get(`/product-download` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadListResponse;

    throw new ShopwareError("Failed to fetch download list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDownload(
    request: DownloadCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DownloadCreateResponse> {
    const response = await this.post(`/product-download`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadCreateResponse;

    throw new ShopwareError("Failed to create download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDownloads(
    request: DownloadListSearchRequest
  ): Promise<DownloadListSearchResponse> {
    const response = await this.get(`/search/product-download`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadListSearchResponse;

    throw new ShopwareError("Failed to search for downloads", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDownload(id: string, query?: Criteria): Promise<DownloadSingleResponse> {
    const response = await this.get(`/product-download/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadSingleResponse;

    throw new ShopwareError("Failed to fetch download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDownload(id: string): Promise<void> {
    const response = await this.delete(`/product-download/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDownload(
    id: string,
    request: DownloadUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DownloadUpdateResponse> {
    const response = await this.patch(`/product-download/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadUpdateResponse;

    throw new ShopwareError("Failed to update download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDownloadAggregate(
    request: DownloadAggregationRequest
  ): Promise<DownloadAggregationResponse> {
    const response = await this.post(`/aggregate/product-download`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadAggregationResponse;

    throw new ShopwareError("Failed to aggregate download", response);
  }

  /** Exports **/

  /**
   * @throws {Error} if the request failed
   */
  public async getExports(query?: Criteria): Promise<ExportListResponse> {
    const response = await this.get(`/product-export` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportListResponse;

    throw new ShopwareError("Failed to fetch export list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createExport(
    request: ExportCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ExportCreateResponse> {
    const response = await this.post(`/product-export`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportCreateResponse;

    throw new ShopwareError("Failed to create export", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchExports(request: ExportListSearchRequest): Promise<ExportListSearchResponse> {
    const response = await this.get(`/search/product-export`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportListSearchResponse;

    throw new ShopwareError("Failed to search for exports", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getExport(id: string, query?: Criteria): Promise<ExportSingleResponse> {
    const response = await this.get(`/product-export/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportSingleResponse;

    throw new ShopwareError("Failed to fetch export", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteExport(id: string): Promise<void> {
    const response = await this.delete(`/product-export/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete export", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateExport(
    id: string,
    request: ExportUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ExportUpdateResponse> {
    const response = await this.patch(`/product-export/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportUpdateResponse;

    throw new ShopwareError("Failed to update export", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getExportAggregate(
    request: ExportAggregationRequest
  ): Promise<ExportAggregationResponse> {
    const response = await this.post(`/aggregate/product-export`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportAggregationResponse;

    throw new ShopwareError("Failed to aggregate export", response);
  }

  /** Feature Sets **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSets(query?: Criteria): Promise<FeatureSetListResponse> {
    const response = await this.get(`/product-feature-set` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetListResponse;

    throw new ShopwareError("Failed to fetch feature set list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFeatureSet(
    request: FeatureSetCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FeatureSetCreateResponse> {
    const response = await this.post(`/product-feature-set`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetCreateResponse;

    throw new ShopwareError("Failed to create feature set", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFeatureSets(
    request: FeatureSetListSearchRequest
  ): Promise<FeatureSetListSearchResponse> {
    const response = await this.get(`/search/product-feature-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetListSearchResponse;

    throw new ShopwareError("Failed to search for feature sets", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSet(id: string, query?: Criteria): Promise<FeatureSetSingleResponse> {
    const response = await this.get(`/product-feature-set/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetSingleResponse;

    throw new ShopwareError("Failed to fetch feature set", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFeatureSet(id: string): Promise<void> {
    const response = await this.delete(`/product-feature-set/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete feature set", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateFeatureSet(
    id: string,
    request: FeatureSetUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FeatureSetUpdateResponse> {
    const response = await this.patch(`/product-feature-set/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetUpdateResponse;

    throw new ShopwareError("Failed to update feature set", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSetAggregate(
    request: FeatureSetAggregationRequest
  ): Promise<FeatureSetAggregationResponse> {
    const response = await this.post(`/aggregate/product-feature-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetAggregationResponse;

    throw new ShopwareError("Failed to aggregate feature set", response);
  }

  /** Keyword Dictionaries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionaries(query?: Criteria): Promise<KeywordDictionaryListResponse> {
    const response = await this.get(`/product-keyword-dictionary` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryListResponse;

    throw new ShopwareError("Failed to fetch keyword dictionary list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createKeywordDictionary(
    request: KeywordDictionaryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<KeywordDictionaryCreateResponse> {
    const response = await this.post(`/product-keyword-dictionary`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryCreateResponse;

    throw new ShopwareError("Failed to create keyword dictionary", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchKeywordDictionaries(
    request: KeywordDictionaryListSearchRequest
  ): Promise<KeywordDictionaryListSearchResponse> {
    const response = await this.get(`/search/product-keyword-dictionary`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryListSearchResponse;

    throw new ShopwareError("Failed to search for keyword dictionaries", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionary(
    id: string,
    query?: Criteria
  ): Promise<KeywordDictionarySingleResponse> {
    const response = await this.get(`/product-keyword-dictionary/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionarySingleResponse;

    throw new ShopwareError("Failed to fetch keyword dictionary", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteKeywordDictionary(id: string): Promise<void> {
    const response = await this.delete(`/product-keyword-dictionary/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete keyword dictionary", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateKeywordDictionary(
    id: string,
    request: KeywordDictionaryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<KeywordDictionaryUpdateResponse> {
    const response = await this.patch(`/product-keyword-dictionary/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryUpdateResponse;

    throw new ShopwareError("Failed to update keyword dictionary", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionaryAggregate(
    request: KeywordDictionaryAggregationRequest
  ): Promise<KeywordDictionaryAggregationResponse> {
    const response = await this.post(`/aggregate/product-keyword-dictionary`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryAggregationResponse;

    throw new ShopwareError("Failed to aggregate keyword dictionary", response);
  }

  /** Manufacturers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturers(query?: Criteria): Promise<ManufacturerListResponse> {
    const response = await this.get(`/product-manufacturer` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerListResponse;

    throw new ShopwareError("Failed to fetch manufacturer list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createManufacturer(
    request: ManufacturerCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ManufacturerCreateResponse> {
    const response = await this.post(`/product-manufacturer`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerCreateResponse;

    throw new ShopwareError("Failed to create manufacturer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchManufacturers(
    request: ManufacturerListSearchRequest
  ): Promise<ManufacturerListSearchResponse> {
    const response = await this.get(`/search/product-manufacturer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerListSearchResponse;

    throw new ShopwareError("Failed to search for manufacturers", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturer(id: string, query?: Criteria): Promise<ManufacturerSingleResponse> {
    const response = await this.get(`/product-manufacturer/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerSingleResponse;

    throw new ShopwareError("Failed to fetch manufacturer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteManufacturer(id: string): Promise<void> {
    const response = await this.delete(`/product-manufacturer/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete manufacturer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateManufacturer(
    id: string,
    request: ManufacturerUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ManufacturerUpdateResponse> {
    const response = await this.patch(`/product-manufacturer/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerUpdateResponse;

    throw new ShopwareError("Failed to update manufacturer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturerAggregate(
    request: ManufacturerAggregationRequest
  ): Promise<ManufacturerAggregationResponse> {
    const response = await this.post(`/aggregate/product-manufacturer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerAggregationResponse;

    throw new ShopwareError("Failed to aggregate manufacturer", response);
  }

  /** Media **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaList(query?: Criteria): Promise<MediaListResponse> {
    const response = await this.get(`/product-media` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListResponse;

    throw new ShopwareError("Failed to fetch media list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createMedia(
    request: MediaCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MediaCreateResponse> {
    const response = await this.post(`/product-media`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaCreateResponse;

    throw new ShopwareError("Failed to create media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMedia(request: MediaListSearchRequest): Promise<MediaListSearchResponse> {
    const response = await this.get(`/search/product-media`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListSearchResponse;

    throw new ShopwareError("Failed to search for media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMedia(id: string, query?: Criteria): Promise<MediaSingleResponse> {
    const response = await this.get(`/product-media/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaSingleResponse;

    throw new ShopwareError("Failed to fetch media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMedia(id: string): Promise<void> {
    const response = await this.delete(`/product-media/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateMedia(
    id: string,
    request: MediaUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MediaUpdateResponse> {
    const response = await this.patch(`/product-media/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaUpdateResponse;

    throw new ShopwareError("Failed to update media", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaAggregate(
    request: MediaAggregationRequest
  ): Promise<MediaAggregationResponse> {
    const response = await this.post(`/aggregate/product-media`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaAggregationResponse;

    throw new ShopwareError("Failed to aggregate media", response);
  }

  /** Price **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPrices(query?: Criteria): Promise<PriceListResponse> {
    const response = await this.get(`/product-price` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListResponse;

    throw new ShopwareError("Failed to fetch price list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createPrice(
    request: PriceCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PriceCreateResponse> {
    const response = await this.post(`/product-price`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceCreateResponse;

    throw new ShopwareError("Failed to create price", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPrices(request: PriceListSearchRequest): Promise<PriceListSearchResponse> {
    const response = await this.get(`/search/product-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListSearchResponse;

    throw new ShopwareError("Failed to search for prices", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPrice(id: string, query?: Criteria): Promise<PriceSingleResponse> {
    const response = await this.get(`/product-price/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceSingleResponse;

    throw new ShopwareError("Failed to fetch price", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePrice(id: string): Promise<void> {
    const response = await this.delete(`/product-price/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete price", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePrice(
    id: string,
    request: PriceUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PriceUpdateResponse> {
    const response = await this.patch(`/product-price/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceUpdateResponse;

    throw new ShopwareError("Failed to update price", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPriceAggregate(
    request: PriceAggregationRequest
  ): Promise<PriceAggregationResponse> {
    const response = await this.post(`/aggregate/product-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceAggregationResponse;

    throw new ShopwareError("Failed to aggregate price", response);
  }

  /** Reviews **/

  /**
   * @throws {Error} if the request failed
   */
  public async getReviews(query?: Criteria): Promise<ReviewListResponse> {
    const response = await this.get(`/product-review` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewListResponse;

    throw new ShopwareError("Failed to fetch review list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createReview(
    request: ReviewCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ReviewCreateResponse> {
    const response = await this.post(`/product-review`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewCreateResponse;

    throw new ShopwareError("Failed to create review", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchReviews(request: ReviewListSearchRequest): Promise<ReviewListSearchResponse> {
    const response = await this.get(`/search/product-review`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewListSearchResponse;

    throw new ShopwareError("Failed to search for reviews", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getReview(id: string, query?: Criteria): Promise<ReviewSingleResponse> {
    const response = await this.get(`/product-review/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewSingleResponse;

    throw new ShopwareError("Failed to fetch review", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteReview(id: string): Promise<void> {
    const response = await this.delete(`/product-review/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete review", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateReview(
    id: string,
    request: ReviewUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ReviewUpdateResponse> {
    const response = await this.patch(`/product-review/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewUpdateResponse;

    throw new ShopwareError("Failed to update review", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getReviewAggregate(
    request: ReviewAggregationRequest
  ): Promise<ReviewAggregationResponse> {
    const response = await this.post(`/aggregate/product-review`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewAggregationResponse;

    throw new ShopwareError("Failed to aggregate review", response);
  }

  /** Search Configs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigs(query?: Criteria): Promise<SearchConfigListResponse> {
    const response = await this.get(`/product-search-config` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigListResponse;

    throw new ShopwareError("Failed to fetch search config list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSearchConfig(
    request: SearchConfigCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchConfigCreateResponse> {
    const response = await this.post(`/product-search-config`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigCreateResponse;

    throw new ShopwareError("Failed to create search config", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchConfigs(
    request: SearchConfigListSearchRequest
  ): Promise<SearchConfigListSearchResponse> {
    const response = await this.get(`/search/product-search-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigListSearchResponse;

    throw new ShopwareError("Failed to search for search configs", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfig(id: string, query?: Criteria): Promise<SearchConfigSingleResponse> {
    const response = await this.get(`/product-search-config/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigSingleResponse;

    throw new ShopwareError("Failed to fetch search config", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchConfig(id: string): Promise<void> {
    const response = await this.delete(`/product-search-config/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete search config", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSearchConfig(
    id: string,
    request: SearchConfigUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchConfigUpdateResponse> {
    const response = await this.patch(`/product-search-config/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigUpdateResponse;

    throw new ShopwareError("Failed to update search config", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigAggregate(
    request: SearchConfigAggregationRequest
  ): Promise<SearchConfigAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigAggregationResponse;

    throw new ShopwareError("Failed to aggregate search config", response);
  }

  /** Search Config Fields **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigFields(query?: Criteria): Promise<SearchConfigFieldListResponse> {
    const response = await this.get(`/product-search-config-field` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldListResponse;

    throw new ShopwareError("Failed to fetch search config field list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSearchConfigField(
    request: SearchConfigFieldCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchConfigFieldCreateResponse> {
    const response = await this.post(`/product-search-config-field`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldCreateResponse;

    throw new ShopwareError("Failed to create search config field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchConfigFields(
    request: SearchConfigFieldListSearchRequest
  ): Promise<SearchConfigFieldListSearchResponse> {
    const response = await this.get(`/search/product-search-config-field`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldListSearchResponse;

    throw new ShopwareError("Failed to search for search config fields", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigField(
    id: string,
    query?: Criteria
  ): Promise<SearchConfigFieldSingleResponse> {
    const response = await this.get(`/product-search-config-field/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldSingleResponse;

    throw new ShopwareError("Failed to fetch search config field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchConfigField(id: string): Promise<void> {
    const response = await this.delete(`/product-search-config-field/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete search config field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSearchConfigField(
    id: string,
    request: SearchConfigFieldUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchConfigFieldUpdateResponse> {
    const response = await this.patch(`/product-search-config-field/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldUpdateResponse;

    throw new ShopwareError("Failed to update search config field", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigFieldAggregate(
    request: SearchConfigFieldAggregationRequest
  ): Promise<SearchConfigFieldAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-config-field`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldAggregationResponse;

    throw new ShopwareError("Failed to aggregate search config field", response);
  }

  /** Search Keywords **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeywords(query?: Criteria): Promise<SearchKeywordListResponse> {
    const response = await this.get(`/product-search-keyword` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordListResponse;

    throw new ShopwareError("Failed to fetch search keyword list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSearchKeyword(
    request: SearchKeywordCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchKeywordCreateResponse> {
    const response = await this.post(`/product-search-keyword`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordCreateResponse;

    throw new ShopwareError("Failed to create search keyword", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchKeywords(
    request: SearchKeywordListSearchRequest
  ): Promise<SearchKeywordListSearchResponse> {
    const response = await this.get(`/search/product-search-keyword`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordListSearchResponse;

    throw new ShopwareError("Failed to search for search keywords", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeyword(
    id: string,
    query?: Criteria
  ): Promise<SearchKeywordSingleResponse> {
    const response = await this.get(`/product-search-keyword/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordSingleResponse;

    throw new ShopwareError("Failed to fetch search keyword", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchKeyword(id: string): Promise<void> {
    const response = await this.delete(`/product-search-keyword/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete search keyword", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSearchKeyword(
    id: string,
    request: SearchKeywordUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SearchKeywordUpdateResponse> {
    const response = await this.patch(`/product-search-keyword/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordUpdateResponse;

    throw new ShopwareError("Failed to update search keyword", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeywordAggregate(
    request: SearchKeywordAggregationRequest
  ): Promise<SearchKeywordAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-keyword`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordAggregationResponse;

    throw new ShopwareError("Failed to aggregate search keyword", response);
  }

  /** Sortings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSortings(query?: Criteria): Promise<SortingListResponse> {
    const response = await this.get(`/product-sorting` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingListResponse;

    throw new ShopwareError("Failed to fetch sorting list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSorting(
    request: SortingCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SortingCreateResponse> {
    const response = await this.post(`/product-sorting`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingCreateResponse;

    throw new ShopwareError("Failed to create sorting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSortings(
    request: SortingListSearchRequest
  ): Promise<SortingListSearchResponse> {
    const response = await this.get(`/search/product-sorting`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingListSearchResponse;

    throw new ShopwareError("Failed to search for sortings", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSorting(id: string, query?: Criteria): Promise<SortingSingleResponse> {
    const response = await this.get(`/product-sorting/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingSingleResponse;

    throw new ShopwareError("Failed to fetch sorting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSorting(id: string): Promise<void> {
    const response = await this.delete(`/product-sorting/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete sorting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSorting(
    id: string,
    request: SortingUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SortingUpdateResponse> {
    const response = await this.patch(`/product-sorting/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingUpdateResponse;

    throw new ShopwareError("Failed to update sorting", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSortingAggregate(
    request: SortingAggregationRequest
  ): Promise<SortingAggregationResponse> {
    const response = await this.post(`/aggregate/product-sorting`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingAggregationResponse;

    throw new ShopwareError("Failed to aggregate sorting", response);
  }

  /** Streams **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStreams(query?: Criteria): Promise<StreamListResponse> {
    const response = await this.get(`/product-stream` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamListResponse;

    throw new ShopwareError("Failed to fetch stream list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createStream(
    request: StreamCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StreamCreateResponse> {
    const response = await this.post(`/product-stream`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamCreateResponse;

    throw new ShopwareError("Failed to create stream", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStreams(request: StreamListSearchRequest): Promise<StreamListSearchResponse> {
    const response = await this.get(`/search/product-stream`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamListSearchResponse;

    throw new ShopwareError("Failed to search for streams", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStream(id: string, query?: Criteria): Promise<StreamSingleResponse> {
    const response = await this.get(`/product-stream/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamSingleResponse;

    throw new ShopwareError("Failed to fetch stream", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteStream(id: string): Promise<void> {
    const response = await this.delete(`/product-stream/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete stream", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateStream(
    id: string,
    request: StreamUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StreamUpdateResponse> {
    const response = await this.patch(`/product-stream/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamUpdateResponse;

    throw new ShopwareError("Failed to update stream", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamAggregate(
    request: StreamAggregationRequest
  ): Promise<StreamAggregationResponse> {
    const response = await this.post(`/aggregate/product-stream`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamAggregationResponse;

    throw new ShopwareError("Failed to aggregate stream", response);
  }

  /** Stream Filters **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilters(query?: Criteria): Promise<StreamFilterListResponse> {
    const response = await this.get(`/product-stream-filter` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterListResponse;

    throw new ShopwareError("Failed to fetch stream filter list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createStreamFilter(
    request: StreamFilterCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StreamFilterCreateResponse> {
    const response = await this.post(`/product-stream-filter`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterCreateResponse;

    throw new ShopwareError("Failed to create stream filter", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStreamFilters(
    request: StreamFilterListSearchRequest
  ): Promise<StreamFilterListSearchResponse> {
    const response = await this.get(`/search/product-stream-filter`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterListSearchResponse;

    throw new ShopwareError("Failed to search for stream filters", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilter(id: string, query?: Criteria): Promise<StreamFilterSingleResponse> {
    const response = await this.get(`/product-stream-filter/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterSingleResponse;

    throw new ShopwareError("Failed to fetch stream filter", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteStreamFilter(id: string): Promise<void> {
    const response = await this.delete(`/product-stream-filter/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete stream filter", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateStreamFilter(
    id: string,
    request: StreamFilterUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StreamFilterUpdateResponse> {
    const response = await this.patch(`/product-stream-filter/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterUpdateResponse;

    throw new ShopwareError("Failed to update stream filter", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilterAggregate(
    request: StreamFilterAggregationRequest
  ): Promise<StreamFilterAggregationResponse> {
    const response = await this.post(`/aggregate/product-stream-filter`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterAggregationResponse;

    throw new ShopwareError("Failed to aggregate stream filter", response);
  }

  /** Visibilities **/

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibilities(query?: Criteria): Promise<VisibilityListResponse> {
    const response = await this.get(`/product-visibility` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityListResponse;

    throw new ShopwareError("Failed to fetch visibility list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createVisibility(
    request: VisibilityCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<VisibilityCreateResponse> {
    const response = await this.post(`/product-visibility`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityCreateResponse;

    throw new ShopwareError("Failed to create visibility", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchVisibilities(
    request: VisibilityListSearchRequest
  ): Promise<VisibilityListSearchResponse> {
    const response = await this.get(`/search/product-visibility`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityListSearchResponse;

    throw new ShopwareError("Failed to search for visibilities", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibility(id: string, query?: Criteria): Promise<VisibilitySingleResponse> {
    const response = await this.get(`/product-visibility/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilitySingleResponse;

    throw new ShopwareError("Failed to fetch visibility", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteVisibility(id: string): Promise<void> {
    const response = await this.delete(`/product-visibility/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete visibility", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateVisibility(
    id: string,
    request: VisibilityUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<VisibilityUpdateResponse> {
    const response = await this.patch(`/product-visibility/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityUpdateResponse;

    throw new ShopwareError("Failed to update visibility", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibilityAggregate(
    request: VisibilityAggregationRequest
  ): Promise<VisibilityAggregationResponse> {
    const response = await this.post(`/aggregate/product-visibility`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityAggregationResponse;

    throw new ShopwareError("Failed to aggregate visibility", response);
  }
}

export default ProductClient;
