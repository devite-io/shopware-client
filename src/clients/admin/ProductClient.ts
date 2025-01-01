import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
  public async getProducts(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ProductListResponse> {
    const response = await this.get(`/product`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListResponse;

    throw new Error(
      `Failed to fetch product list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductCreateResponse;

    throw new Error(`Failed to create product: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchProducts(
    request: ProductListSearchRequest
  ): Promise<ProductListSearchResponse> {
    const response = await this.get(`/search/product`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListSearchResponse;

    throw new Error(
      `Failed to search for products: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProduct(id: string): Promise<ProductSingleResponse> {
    const response = await this.get(`/product/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSingleResponse;

    throw new Error(`Failed to fetch product: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteProduct(id: string): Promise<void> {
    const response = await this.delete(`/product/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete product: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductUpdateResponse;

    throw new Error(`Failed to update product: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProductAggregate(
    request: ProductAggregationRequest
  ): Promise<ProductAggregationResponse> {
    const response = await this.post(`/aggregate/product`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductAggregationResponse;

    throw new Error(
      `Failed to aggregate product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Configurator Settings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSettings(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ConfiguratorSettingListResponse> {
    const response = await this.get(`/product-configurator-setting`, {
      query: { limit, page, query }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingListResponse;

    throw new Error(
      `Failed to fetch configurator setting list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingCreateResponse;

    throw new Error(
      `Failed to create configurator setting: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConfiguratorSettings(
    request: ConfiguratorSettingListSearchRequest
  ): Promise<ConfiguratorSettingListSearchResponse> {
    const response = await this.get(`/search/product-configurator-setting`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingListSearchResponse;

    throw new Error(
      `Failed to search for configurator settings: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSetting(id: string): Promise<ConfiguratorSettingSingleResponse> {
    const response = await this.get(`/product-configurator-setting/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingSingleResponse;

    throw new Error(
      `Failed to fetch configurator setting: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteConfiguratorSetting(id: string): Promise<void> {
    const response = await this.delete(`/product-configurator-setting/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete configurator setting: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingUpdateResponse;

    throw new Error(
      `Failed to update configurator setting: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfiguratorSettingAggregate(
    request: ConfiguratorSettingAggregationRequest
  ): Promise<ConfiguratorSettingAggregationResponse> {
    const response = await this.post(`/aggregate/product-configurator-setting`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfiguratorSettingAggregationResponse;

    throw new Error(
      `Failed to aggregate configurator setting: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cross Sellings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellings(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CrossSellingListResponse> {
    const response = await this.get(`/product-cross-selling`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingListResponse;

    throw new Error(
      `Failed to fetch cross selling list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingCreateResponse;

    throw new Error(
      `Failed to create cross selling: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCrossSellings(
    request: CrossSellingListSearchRequest
  ): Promise<CrossSellingListSearchResponse> {
    const response = await this.get(`/search/product-cross-selling`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingListSearchResponse;

    throw new Error(
      `Failed to search for cross sellings: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSelling(id: string): Promise<CrossSellingSingleResponse> {
    const response = await this.get(`/product-cross-selling/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingSingleResponse;

    throw new Error(
      `Failed to fetch cross selling: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCrossSelling(id: string): Promise<void> {
    const response = await this.delete(`/product-cross-selling/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete cross selling: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingUpdateResponse;

    throw new Error(
      `Failed to update cross selling: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAggregate(
    request: CrossSellingAggregationRequest
  ): Promise<CrossSellingAggregationResponse> {
    const response = await this.post(`/aggregate/product-cross-selling`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAggregationResponse;

    throw new Error(
      `Failed to aggregate cross selling: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cross Selling Assigned Products **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProducts(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CrossSellingAssignedProductListResponse> {
    const response = await this.get(`/product-cross-selling-assigned-product`, {
      query: { limit, page, query }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductListResponse;

    throw new Error(
      `Failed to fetch cross selling assigned product list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductCreateResponse;

    throw new Error(
      `Failed to create cross selling assigned product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCrossSellingAssignedProducts(
    request: CrossSellingAssignedProductListSearchRequest
  ): Promise<CrossSellingAssignedProductListSearchResponse> {
    const response = await this.get(`/search/product-cross-selling-assigned-product`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductListSearchResponse;

    throw new Error(
      `Failed to search for cross selling assigned products: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProduct(
    id: string
  ): Promise<CrossSellingAssignedProductSingleResponse> {
    const response = await this.get(`/product-cross-selling-assigned-product/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductSingleResponse;

    throw new Error(
      `Failed to fetch cross selling assigned product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCrossSellingAssignedProduct(id: string): Promise<void> {
    const response = await this.delete(`/product-cross-selling-assigned-product/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete cross selling assigned product: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductUpdateResponse;

    throw new Error(
      `Failed to update cross selling assigned product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingAssignedProductAggregate(
    request: CrossSellingAssignedProductAggregationRequest
  ): Promise<CrossSellingAssignedProductAggregationResponse> {
    const response = await this.post(`/aggregate/product-cross-selling-assigned-product`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CrossSellingAssignedProductAggregationResponse;

    throw new Error(
      `Failed to aggregate cross selling assigned product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Downloads **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDownloads(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DownloadListResponse> {
    const response = await this.get(`/product-download`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadListResponse;

    throw new Error(
      `Failed to fetch download list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadCreateResponse;

    throw new Error(`Failed to create download: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDownloads(
    request: DownloadListSearchRequest
  ): Promise<DownloadListSearchResponse> {
    const response = await this.get(`/search/product-download`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadListSearchResponse;

    throw new Error(
      `Failed to search for downloads: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDownload(id: string): Promise<DownloadSingleResponse> {
    const response = await this.get(`/product-download/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadSingleResponse;

    throw new Error(`Failed to fetch download: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDownload(id: string): Promise<void> {
    const response = await this.delete(`/product-download/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete download: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadUpdateResponse;

    throw new Error(`Failed to update download: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDownloadAggregate(
    request: DownloadAggregationRequest
  ): Promise<DownloadAggregationResponse> {
    const response = await this.post(`/aggregate/product-download`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DownloadAggregationResponse;

    throw new Error(
      `Failed to aggregate download: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Exports **/

  /**
   * @throws {Error} if the request failed
   */
  public async getExports(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ExportListResponse> {
    const response = await this.get(`/product-export`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportListResponse;

    throw new Error(
      `Failed to fetch export list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportCreateResponse;

    throw new Error(`Failed to create export: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchExports(request: ExportListSearchRequest): Promise<ExportListSearchResponse> {
    const response = await this.get(`/search/product-export`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportListSearchResponse;

    throw new Error(
      `Failed to search for exports: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getExport(id: string): Promise<ExportSingleResponse> {
    const response = await this.get(`/product-export/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportSingleResponse;

    throw new Error(`Failed to fetch export: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteExport(id: string): Promise<void> {
    const response = await this.delete(`/product-export/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete export: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportUpdateResponse;

    throw new Error(`Failed to update export: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getExportAggregate(
    request: ExportAggregationRequest
  ): Promise<ExportAggregationResponse> {
    const response = await this.post(`/aggregate/product-export`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ExportAggregationResponse;

    throw new Error(`Failed to aggregate export: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Feature Sets **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSets(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FeatureSetListResponse> {
    const response = await this.get(`/product-feature-set`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetListResponse;

    throw new Error(
      `Failed to fetch feature set list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetCreateResponse;

    throw new Error(
      `Failed to create feature set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFeatureSets(
    request: FeatureSetListSearchRequest
  ): Promise<FeatureSetListSearchResponse> {
    const response = await this.get(`/search/product-feature-set`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetListSearchResponse;

    throw new Error(
      `Failed to search for feature sets: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSet(id: string): Promise<FeatureSetSingleResponse> {
    const response = await this.get(`/product-feature-set/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetSingleResponse;

    throw new Error(
      `Failed to fetch feature set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFeatureSet(id: string): Promise<void> {
    const response = await this.delete(`/product-feature-set/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete feature set: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetUpdateResponse;

    throw new Error(
      `Failed to update feature set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFeatureSetAggregate(
    request: FeatureSetAggregationRequest
  ): Promise<FeatureSetAggregationResponse> {
    const response = await this.post(`/aggregate/product-feature-set`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FeatureSetAggregationResponse;

    throw new Error(
      `Failed to aggregate feature set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Keyword Dictionaries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionaries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<KeywordDictionaryListResponse> {
    const response = await this.get(`/product-keyword-dictionary`, {
      query: { limit, page, query }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryListResponse;

    throw new Error(
      `Failed to fetch keyword dictionary list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryCreateResponse;

    throw new Error(
      `Failed to create keyword dictionary: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchKeywordDictionaries(
    request: KeywordDictionaryListSearchRequest
  ): Promise<KeywordDictionaryListSearchResponse> {
    const response = await this.get(`/search/product-keyword-dictionary`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryListSearchResponse;

    throw new Error(
      `Failed to search for keyword dictionaries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionary(id: string): Promise<KeywordDictionarySingleResponse> {
    const response = await this.get(`/product-keyword-dictionary/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionarySingleResponse;

    throw new Error(
      `Failed to fetch keyword dictionary: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteKeywordDictionary(id: string): Promise<void> {
    const response = await this.delete(`/product-keyword-dictionary/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete keyword dictionary: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryUpdateResponse;

    throw new Error(
      `Failed to update keyword dictionary: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getKeywordDictionaryAggregate(
    request: KeywordDictionaryAggregationRequest
  ): Promise<KeywordDictionaryAggregationResponse> {
    const response = await this.post(`/aggregate/product-keyword-dictionary`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as KeywordDictionaryAggregationResponse;

    throw new Error(
      `Failed to aggregate keyword dictionary: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Manufacturers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturers(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ManufacturerListResponse> {
    const response = await this.get(`/product-manufacturer`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerListResponse;

    throw new Error(
      `Failed to fetch manufacturer list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerCreateResponse;

    throw new Error(
      `Failed to create manufacturer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchManufacturers(
    request: ManufacturerListSearchRequest
  ): Promise<ManufacturerListSearchResponse> {
    const response = await this.get(`/search/product-manufacturer`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerListSearchResponse;

    throw new Error(
      `Failed to search for manufacturers: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturer(id: string): Promise<ManufacturerSingleResponse> {
    const response = await this.get(`/product-manufacturer/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerSingleResponse;

    throw new Error(
      `Failed to fetch manufacturer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteManufacturer(id: string): Promise<void> {
    const response = await this.delete(`/product-manufacturer/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete manufacturer: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerUpdateResponse;

    throw new Error(
      `Failed to update manufacturer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getManufacturerAggregate(
    request: ManufacturerAggregationRequest
  ): Promise<ManufacturerAggregationResponse> {
    const response = await this.post(`/aggregate/product-manufacturer`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ManufacturerAggregationResponse;

    throw new Error(
      `Failed to aggregate manufacturer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Media **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaList(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<MediaListResponse> {
    const response = await this.get(`/product-media`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListResponse;

    throw new Error(`Failed to fetch media list: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaCreateResponse;

    throw new Error(`Failed to create media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMedia(request: MediaListSearchRequest): Promise<MediaListSearchResponse> {
    const response = await this.get(`/search/product-media`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaListSearchResponse;

    throw new Error(`Failed to search for media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMedia(id: string): Promise<MediaSingleResponse> {
    const response = await this.get(`/product-media/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaSingleResponse;

    throw new Error(`Failed to fetch media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMedia(id: string): Promise<void> {
    const response = await this.delete(`/product-media/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete media: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaUpdateResponse;

    throw new Error(`Failed to update media: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMediaAggregate(
    request: MediaAggregationRequest
  ): Promise<MediaAggregationResponse> {
    const response = await this.post(`/aggregate/product-media`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MediaAggregationResponse;

    throw new Error(`Failed to aggregate media: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Price **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPrices(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PriceListResponse> {
    const response = await this.get(`/product-price`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListResponse;

    throw new Error(`Failed to fetch price list: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceCreateResponse;

    throw new Error(`Failed to create price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPrices(request: PriceListSearchRequest): Promise<PriceListSearchResponse> {
    const response = await this.get(`/search/product-price`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListSearchResponse;

    throw new Error(
      `Failed to search for prices: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPrice(id: string): Promise<PriceSingleResponse> {
    const response = await this.get(`/product-price/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceSingleResponse;

    throw new Error(`Failed to fetch price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePrice(id: string): Promise<void> {
    const response = await this.delete(`/product-price/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete price: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceUpdateResponse;

    throw new Error(`Failed to update price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPriceAggregate(
    request: PriceAggregationRequest
  ): Promise<PriceAggregationResponse> {
    const response = await this.post(`/aggregate/product-price`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceAggregationResponse;

    throw new Error(`Failed to aggregate price: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Reviews **/

  /**
   * @throws {Error} if the request failed
   */
  public async getReviews(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ReviewListResponse> {
    const response = await this.get(`/product-review`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewListResponse;

    throw new Error(
      `Failed to fetch review list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewCreateResponse;

    throw new Error(`Failed to create review: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchReviews(request: ReviewListSearchRequest): Promise<ReviewListSearchResponse> {
    const response = await this.get(`/search/product-review`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewListSearchResponse;

    throw new Error(
      `Failed to search for reviews: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getReview(id: string): Promise<ReviewSingleResponse> {
    const response = await this.get(`/product-review/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewSingleResponse;

    throw new Error(`Failed to fetch review: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteReview(id: string): Promise<void> {
    const response = await this.delete(`/product-review/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete review: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewUpdateResponse;

    throw new Error(`Failed to update review: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getReviewAggregate(
    request: ReviewAggregationRequest
  ): Promise<ReviewAggregationResponse> {
    const response = await this.post(`/aggregate/product-review`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ReviewAggregationResponse;

    throw new Error(`Failed to aggregate review: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Search Configs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigs(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SearchConfigListResponse> {
    const response = await this.get(`/product-search-config`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigListResponse;

    throw new Error(
      `Failed to fetch search config list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigCreateResponse;

    throw new Error(
      `Failed to create search config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchConfigs(
    request: SearchConfigListSearchRequest
  ): Promise<SearchConfigListSearchResponse> {
    const response = await this.get(`/search/product-search-config`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigListSearchResponse;

    throw new Error(
      `Failed to search for search configs: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfig(id: string): Promise<SearchConfigSingleResponse> {
    const response = await this.get(`/product-search-config/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigSingleResponse;

    throw new Error(
      `Failed to fetch search config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchConfig(id: string): Promise<void> {
    const response = await this.delete(`/product-search-config/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete search config: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigUpdateResponse;

    throw new Error(
      `Failed to update search config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigAggregate(
    request: SearchConfigAggregationRequest
  ): Promise<SearchConfigAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-config`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigAggregationResponse;

    throw new Error(
      `Failed to aggregate search config: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Search Config Fields **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigFields(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SearchConfigFieldListResponse> {
    const response = await this.get(`/product-search-config-field`, {
      query: { limit, page, query }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldListResponse;

    throw new Error(
      `Failed to fetch search config field list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldCreateResponse;

    throw new Error(
      `Failed to create search config field: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchConfigFields(
    request: SearchConfigFieldListSearchRequest
  ): Promise<SearchConfigFieldListSearchResponse> {
    const response = await this.get(`/search/product-search-config-field`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldListSearchResponse;

    throw new Error(
      `Failed to search for search config fields: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigField(id: string): Promise<SearchConfigFieldSingleResponse> {
    const response = await this.get(`/product-search-config-field/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldSingleResponse;

    throw new Error(
      `Failed to fetch search config field: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchConfigField(id: string): Promise<void> {
    const response = await this.delete(`/product-search-config-field/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete search config field: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldUpdateResponse;

    throw new Error(
      `Failed to update search config field: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchConfigFieldAggregate(
    request: SearchConfigFieldAggregationRequest
  ): Promise<SearchConfigFieldAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-config-field`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchConfigFieldAggregationResponse;

    throw new Error(
      `Failed to aggregate search config field: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Search Keywords **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeywords(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SearchKeywordListResponse> {
    const response = await this.get(`/product-search-keyword`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordListResponse;

    throw new Error(
      `Failed to fetch search keyword list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordCreateResponse;

    throw new Error(
      `Failed to create search keyword: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSearchKeywords(
    request: SearchKeywordListSearchRequest
  ): Promise<SearchKeywordListSearchResponse> {
    const response = await this.get(`/search/product-search-keyword`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordListSearchResponse;

    throw new Error(
      `Failed to search for search keywords: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeyword(id: string): Promise<SearchKeywordSingleResponse> {
    const response = await this.get(`/product-search-keyword/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordSingleResponse;

    throw new Error(
      `Failed to fetch search keyword: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSearchKeyword(id: string): Promise<void> {
    const response = await this.delete(`/product-search-keyword/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete search keyword: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordUpdateResponse;

    throw new Error(
      `Failed to update search keyword: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchKeywordAggregate(
    request: SearchKeywordAggregationRequest
  ): Promise<SearchKeywordAggregationResponse> {
    const response = await this.post(`/aggregate/product-search-keyword`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SearchKeywordAggregationResponse;

    throw new Error(
      `Failed to aggregate search keyword: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Sortings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSortings(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SortingListResponse> {
    const response = await this.get(`/product-sorting`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingListResponse;

    throw new Error(
      `Failed to fetch sorting list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingCreateResponse;

    throw new Error(`Failed to create sorting: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSortings(
    request: SortingListSearchRequest
  ): Promise<SortingListSearchResponse> {
    const response = await this.get(`/search/product-sorting`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingListSearchResponse;

    throw new Error(
      `Failed to search for sortings: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSorting(id: string): Promise<SortingSingleResponse> {
    const response = await this.get(`/product-sorting/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingSingleResponse;

    throw new Error(`Failed to fetch sorting: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSorting(id: string): Promise<void> {
    const response = await this.delete(`/product-sorting/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete sorting: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingUpdateResponse;

    throw new Error(`Failed to update sorting: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSortingAggregate(
    request: SortingAggregationRequest
  ): Promise<SortingAggregationResponse> {
    const response = await this.post(`/aggregate/product-sorting`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SortingAggregationResponse;

    throw new Error(
      `Failed to aggregate sorting: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Streams **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStreams(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<StreamListResponse> {
    const response = await this.get(`/product-stream`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamListResponse;

    throw new Error(
      `Failed to fetch stream list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamCreateResponse;

    throw new Error(`Failed to create stream: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStreams(request: StreamListSearchRequest): Promise<StreamListSearchResponse> {
    const response = await this.get(`/search/product-stream`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamListSearchResponse;

    throw new Error(
      `Failed to search for streams: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStream(id: string): Promise<StreamSingleResponse> {
    const response = await this.get(`/product-stream/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamSingleResponse;

    throw new Error(`Failed to fetch stream: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteStream(id: string): Promise<void> {
    const response = await this.delete(`/product-stream/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete stream: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamUpdateResponse;

    throw new Error(`Failed to update stream: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamAggregate(
    request: StreamAggregationRequest
  ): Promise<StreamAggregationResponse> {
    const response = await this.post(`/aggregate/product-stream`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamAggregationResponse;

    throw new Error(`Failed to aggregate stream: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Stream Filters **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilters(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<StreamFilterListResponse> {
    const response = await this.get(`/product-stream-filter`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterListResponse;

    throw new Error(
      `Failed to fetch stream filter list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterCreateResponse;

    throw new Error(
      `Failed to create stream filter: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStreamFilters(
    request: StreamFilterListSearchRequest
  ): Promise<StreamFilterListSearchResponse> {
    const response = await this.get(`/search/product-stream-filter`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterListSearchResponse;

    throw new Error(
      `Failed to search for stream filters: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilter(id: string): Promise<StreamFilterSingleResponse> {
    const response = await this.get(`/product-stream-filter/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterSingleResponse;

    throw new Error(
      `Failed to fetch stream filter: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteStreamFilter(id: string): Promise<void> {
    const response = await this.delete(`/product-stream-filter/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete stream filter: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterUpdateResponse;

    throw new Error(
      `Failed to update stream filter: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStreamFilterAggregate(
    request: StreamFilterAggregationRequest
  ): Promise<StreamFilterAggregationResponse> {
    const response = await this.post(`/aggregate/product-stream-filter`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StreamFilterAggregationResponse;

    throw new Error(
      `Failed to aggregate stream filter: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Visibilities **/

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibilities(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<VisibilityListResponse> {
    const response = await this.get(`/product-visibility`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityListResponse;

    throw new Error(
      `Failed to fetch visibility list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityCreateResponse;

    throw new Error(
      `Failed to create visibility: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchVisibilities(
    request: VisibilityListSearchRequest
  ): Promise<VisibilityListSearchResponse> {
    const response = await this.get(`/search/product-visibility`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityListSearchResponse;

    throw new Error(
      `Failed to search for visibilities: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibility(id: string): Promise<VisibilitySingleResponse> {
    const response = await this.get(`/product-visibility/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilitySingleResponse;

    throw new Error(`Failed to fetch visibility: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteVisibility(id: string): Promise<void> {
    const response = await this.delete(`/product-visibility/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete visibility: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityUpdateResponse;

    throw new Error(
      `Failed to update visibility: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getVisibilityAggregate(
    request: VisibilityAggregationRequest
  ): Promise<VisibilityAggregationResponse> {
    const response = await this.post(`/aggregate/product-visibility`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as VisibilityAggregationResponse;

    throw new Error(
      `Failed to aggregate visibility: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default ProductClient;
