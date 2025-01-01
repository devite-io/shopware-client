import { Product } from "#types/api/admin/product/Product";
import { ProductConfiguratorSetting } from "#types/api/admin/product/ProductConfiguratorSetting";
import { ProductCrossSelling } from "#types/api/admin/product/crossSelling/ProductCrossSelling";
import { ProductCrossSellingAssignedProduct } from "#types/api/admin/product/crossSelling/ProductCrossSellingAssignedProduct";
import { ProductDownload } from "#types/api/admin/product/ProductDownload";
import { ProductExport } from "#types/api/admin/product/ProductExport";
import { ProductFeatureSet } from "#types/api/admin/product/ProductFeatureSet";
import { ProductKeywordDictionary } from "#types/api/admin/product/ProductKeywordDictionary";
import { ProductManufacturer } from "#types/api/admin/product/ProductManufacturer";
import { ProductMedia } from "#types/api/admin/product/ProductMedia";
import { ProductPrice } from "#types/api/admin/product/ProductPrice";
import { ProductReview } from "#types/api/admin/product/review/ProductReview";
import { ProductSearchConfig } from "#types/api/admin/product/search/config/ProductSearchConfig";
import { ProductSearchConfigField } from "#types/api/admin/product/search/config/ProductSearchConfigField";
import { ProductSearchKeyword } from "#types/api/admin/product/search/ProductSearchKeyword";
import { ProductSorting } from "#types/api/admin/product/ProductSorting";
import { ProductStream } from "#types/api/admin/product/stream/ProductStream";
import { ProductStreamFilter } from "#types/api/admin/product/stream/ProductStreamFilter";
import { ProductVisibility } from "#types/api/admin/product/ProductVisibility";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Products **/

export interface ProductListResponse {
  total?: number;
  data?: Array<Product>;
}

export type ProductCreateRequest = Product;
export type ProductCreateResponse = { data: Product };

export type ProductListSearchRequest = Criteria;
export interface ProductListSearchResponse {
  total?: number;
  data?: Array<Product>;
}

export interface ProductSingleResponse {
  data: Product;
}

export type ProductUpdateRequest = Product;
export type ProductUpdateResponse = { data: Product };

export interface ProductAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ProductAggregationResponse {
  total?: number;
  data?: Array<Product>;
}

/** Configurator Settings **/

export interface ConfiguratorSettingListResponse {
  total?: number;
  data?: Array<ProductConfiguratorSetting>;
}

export type ConfiguratorSettingCreateRequest = ProductConfiguratorSetting;
export type ConfiguratorSettingCreateResponse = { data: ProductConfiguratorSetting };

export type ConfiguratorSettingListSearchRequest = Criteria;
export interface ConfiguratorSettingListSearchResponse {
  total?: number;
  data?: Array<ProductConfiguratorSetting>;
}

export interface ConfiguratorSettingSingleResponse {
  data: ProductConfiguratorSetting;
}

export type ConfiguratorSettingUpdateRequest = ProductConfiguratorSetting;
export type ConfiguratorSettingUpdateResponse = { data: ProductConfiguratorSetting };

export interface ConfiguratorSettingAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ConfiguratorSettingAggregationResponse {
  total?: number;
  data?: Array<ProductConfiguratorSetting>;
}

/** Cross Sellings **/

export interface CrossSellingListResponse {
  total?: number;
  data?: Array<ProductCrossSelling>;
}

export type CrossSellingCreateRequest = ProductCrossSelling;
export type CrossSellingCreateResponse = { data: ProductCrossSelling };

export type CrossSellingListSearchRequest = Criteria;
export interface CrossSellingListSearchResponse {
  total?: number;
  data?: Array<ProductCrossSelling>;
}

export interface CrossSellingSingleResponse {
  data: ProductCrossSelling;
}

export type CrossSellingUpdateRequest = ProductCrossSelling;
export type CrossSellingUpdateResponse = { data: ProductCrossSelling };

export interface CrossSellingAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CrossSellingAggregationResponse {
  total?: number;
  data?: Array<ProductCrossSelling>;
}

/** Cross Selling Assigned Products **/

export interface CrossSellingAssignedProductListResponse {
  total?: number;
  data?: Array<ProductCrossSellingAssignedProduct>;
}

export type CrossSellingAssignedProductCreateRequest = ProductCrossSellingAssignedProduct;
export type CrossSellingAssignedProductCreateResponse = {
  data: ProductCrossSellingAssignedProduct;
};

export type CrossSellingAssignedProductListSearchRequest = Criteria;
export interface CrossSellingAssignedProductListSearchResponse {
  total?: number;
  data?: Array<ProductCrossSellingAssignedProduct>;
}

export interface CrossSellingAssignedProductSingleResponse {
  data: ProductCrossSellingAssignedProduct;
}

export type CrossSellingAssignedProductUpdateRequest = ProductCrossSellingAssignedProduct;
export type CrossSellingAssignedProductUpdateResponse = {
  data: ProductCrossSellingAssignedProduct;
};

export interface CrossSellingAssignedProductAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CrossSellingAssignedProductAggregationResponse {
  total?: number;
  data?: Array<ProductCrossSellingAssignedProduct>;
}

/** Downloads **/

export interface DownloadListResponse {
  total?: number;
  data?: Array<ProductDownload>;
}

export type DownloadCreateRequest = ProductDownload;
export type DownloadCreateResponse = { data: ProductDownload };

export type DownloadListSearchRequest = Criteria;
export interface DownloadListSearchResponse {
  total?: number;
  data?: Array<ProductDownload>;
}

export interface DownloadSingleResponse {
  data: ProductDownload;
}

export type DownloadUpdateRequest = ProductDownload;
export type DownloadUpdateResponse = { data: ProductDownload };

export interface DownloadAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DownloadAggregationResponse {
  total?: number;
  data?: Array<ProductDownload>;
}

/** Exports **/

export interface ExportListResponse {
  total?: number;
  data?: Array<ProductExport>;
}

export type ExportCreateRequest = ProductExport;
export type ExportCreateResponse = { data: ProductExport };

export type ExportListSearchRequest = Criteria;
export interface ExportListSearchResponse {
  total?: number;
  data?: Array<ProductExport>;
}

export interface ExportSingleResponse {
  data: ProductExport;
}

export type ExportUpdateRequest = ProductExport;
export type ExportUpdateResponse = { data: ProductExport };

export interface ExportAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ExportAggregationResponse {
  total?: number;
  data?: Array<ProductExport>;
}

/** Feature Sets **/

export interface FeatureSetListResponse {
  total?: number;
  data?: Array<ProductFeatureSet>;
}

export type FeatureSetCreateRequest = ProductFeatureSet;
export type FeatureSetCreateResponse = { data: ProductFeatureSet };

export type FeatureSetListSearchRequest = Criteria;
export interface FeatureSetListSearchResponse {
  total?: number;
  data?: Array<ProductFeatureSet>;
}

export interface FeatureSetSingleResponse {
  data: ProductFeatureSet;
}

export type FeatureSetUpdateRequest = ProductFeatureSet;
export type FeatureSetUpdateResponse = { data: ProductFeatureSet };

export interface FeatureSetAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FeatureSetAggregationResponse {
  total?: number;
  data?: Array<ProductFeatureSet>;
}

/** Keyword Dictionaries **/

export interface KeywordDictionaryListResponse {
  total?: number;
  data?: Array<ProductKeywordDictionary>;
}

export type KeywordDictionaryCreateRequest = ProductKeywordDictionary;
export type KeywordDictionaryCreateResponse = { data: ProductKeywordDictionary };

export type KeywordDictionaryListSearchRequest = Criteria;
export interface KeywordDictionaryListSearchResponse {
  total?: number;
  data?: Array<ProductKeywordDictionary>;
}

export interface KeywordDictionarySingleResponse {
  data: ProductKeywordDictionary;
}

export type KeywordDictionaryUpdateRequest = ProductKeywordDictionary;
export type KeywordDictionaryUpdateResponse = { data: ProductKeywordDictionary };

export interface KeywordDictionaryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface KeywordDictionaryAggregationResponse {
  total?: number;
  data?: Array<ProductKeywordDictionary>;
}

/** Manufacturers **/

export interface ManufacturerListResponse {
  total?: number;
  data?: Array<ProductManufacturer>;
}

export type ManufacturerCreateRequest = ProductManufacturer;
export type ManufacturerCreateResponse = { data: ProductManufacturer };

export type ManufacturerListSearchRequest = Criteria;
export interface ManufacturerListSearchResponse {
  total?: number;
  data?: Array<ProductManufacturer>;
}

export interface ManufacturerSingleResponse {
  data: ProductManufacturer;
}

export type ManufacturerUpdateRequest = ProductManufacturer;
export type ManufacturerUpdateResponse = { data: ProductManufacturer };

export interface ManufacturerAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ManufacturerAggregationResponse {
  total?: number;
  data?: Array<ProductManufacturer>;
}

/** Media **/

export interface MediaListResponse {
  total?: number;
  data?: Array<ProductMedia>;
}

export type MediaCreateRequest = ProductMedia;
export type MediaCreateResponse = { data: ProductMedia };

export type MediaListSearchRequest = Criteria;
export interface MediaListSearchResponse {
  total?: number;
  data?: Array<ProductMedia>;
}

export interface MediaSingleResponse {
  data: ProductMedia;
}

export type MediaUpdateRequest = ProductMedia;
export type MediaUpdateResponse = { data: ProductMedia };

export interface MediaAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface MediaAggregationResponse {
  total?: number;
  data?: Array<ProductMedia>;
}

/** Prices **/

export interface PriceListResponse {
  total?: number;
  data?: Array<ProductPrice>;
}

export type PriceCreateRequest = ProductPrice;
export type PriceCreateResponse = { data: ProductPrice };

export type PriceListSearchRequest = Criteria;
export interface PriceListSearchResponse {
  total?: number;
  data?: Array<ProductPrice>;
}

export interface PriceSingleResponse {
  data: ProductPrice;
}

export type PriceUpdateRequest = ProductPrice;
export type PriceUpdateResponse = { data: ProductPrice };

export interface PriceAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PriceAggregationResponse {
  total?: number;
  data?: Array<ProductPrice>;
}

/** Reviews **/

export interface ReviewListResponse {
  total?: number;
  data?: Array<ProductReview>;
}

export type ReviewCreateRequest = ProductReview;
export type ReviewCreateResponse = { data: ProductReview };

export type ReviewListSearchRequest = Criteria;
export interface ReviewListSearchResponse {
  total?: number;
  data?: Array<ProductReview>;
}

export interface ReviewSingleResponse {
  data: ProductReview;
}

export type ReviewUpdateRequest = ProductReview;
export type ReviewUpdateResponse = { data: ProductReview };

export interface ReviewAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ReviewAggregationResponse {
  total?: number;
  data?: Array<ProductReview>;
}

/** Search Configs **/

export interface SearchConfigListResponse {
  total?: number;
  data?: Array<ProductSearchConfig>;
}

export type SearchConfigCreateRequest = ProductSearchConfig;
export type SearchConfigCreateResponse = { data: ProductSearchConfig };

export type SearchConfigListSearchRequest = Criteria;
export interface SearchConfigListSearchResponse {
  total?: number;
  data?: Array<ProductSearchConfig>;
}

export interface SearchConfigSingleResponse {
  data: ProductSearchConfig;
}

export type SearchConfigUpdateRequest = ProductSearchConfig;
export type SearchConfigUpdateResponse = { data: ProductSearchConfig };

export interface SearchConfigAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SearchConfigAggregationResponse {
  total?: number;
  data?: Array<ProductSearchConfig>;
}

/** Search Config Fields **/

export interface SearchConfigFieldListResponse {
  total?: number;
  data?: Array<ProductSearchConfigField>;
}

export type SearchConfigFieldCreateRequest = ProductSearchConfigField;
export type SearchConfigFieldCreateResponse = { data: ProductSearchConfigField };

export type SearchConfigFieldListSearchRequest = Criteria;
export interface SearchConfigFieldListSearchResponse {
  total?: number;
  data?: Array<ProductSearchConfigField>;
}

export interface SearchConfigFieldSingleResponse {
  data: ProductSearchConfigField;
}

export type SearchConfigFieldUpdateRequest = ProductSearchConfigField;
export type SearchConfigFieldUpdateResponse = { data: ProductSearchConfigField };

export interface SearchConfigFieldAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SearchConfigFieldAggregationResponse {
  total?: number;
  data?: Array<ProductSearchConfigField>;
}

/** Search Keywords **/

export interface SearchKeywordListResponse {
  total?: number;
  data?: Array<ProductSearchKeyword>;
}

export type SearchKeywordCreateRequest = ProductSearchKeyword;
export type SearchKeywordCreateResponse = { data: ProductSearchKeyword };

export type SearchKeywordListSearchRequest = Criteria;
export interface SearchKeywordListSearchResponse {
  total?: number;
  data?: Array<ProductSearchKeyword>;
}

export interface SearchKeywordSingleResponse {
  data: ProductSearchKeyword;
}

export type SearchKeywordUpdateRequest = ProductSearchKeyword;
export type SearchKeywordUpdateResponse = { data: ProductSearchKeyword };

export interface SearchKeywordAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SearchKeywordAggregationResponse {
  total?: number;
  data?: Array<ProductSearchKeyword>;
}

/** Sortings **/

export interface SortingListResponse {
  total?: number;
  data?: Array<ProductSorting>;
}

export type SortingCreateRequest = ProductSorting;
export type SortingCreateResponse = { data: ProductSorting };

export type SortingListSearchRequest = Criteria;
export interface SortingListSearchResponse {
  total?: number;
  data?: Array<ProductSorting>;
}

export interface SortingSingleResponse {
  data: ProductSorting;
}

export type SortingUpdateRequest = ProductSorting;
export type SortingUpdateResponse = { data: ProductSorting };

export interface SortingAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SortingAggregationResponse {
  total?: number;
  data?: Array<ProductSorting>;
}

/** Streams **/

export interface StreamListResponse {
  total?: number;
  data?: Array<ProductStream>;
}

export type StreamCreateRequest = ProductStream;
export type StreamCreateResponse = { data: ProductStream };

export type StreamListSearchRequest = Criteria;
export interface StreamListSearchResponse {
  total?: number;
  data?: Array<ProductStream>;
}

export interface StreamSingleResponse {
  data: ProductStream;
}

export type StreamUpdateRequest = ProductStream;
export type StreamUpdateResponse = { data: ProductStream };

export interface StreamAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StreamAggregationResponse {
  total?: number;
  data?: Array<ProductStream>;
}

/** Stream Filters **/

export interface StreamFilterListResponse {
  total?: number;
  data?: Array<ProductStreamFilter>;
}

export type StreamFilterCreateRequest = ProductStreamFilter;
export type StreamFilterCreateResponse = { data: ProductStreamFilter };

export type StreamFilterListSearchRequest = Criteria;
export interface StreamFilterListSearchResponse {
  total?: number;
  data?: Array<ProductStreamFilter>;
}

export interface StreamFilterSingleResponse {
  data: ProductStreamFilter;
}

export type StreamFilterUpdateRequest = ProductStreamFilter;
export type StreamFilterUpdateResponse = { data: ProductStreamFilter };

export interface StreamFilterAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StreamFilterAggregationResponse {
  total?: number;
  data?: Array<ProductStreamFilter>;
}

/** Visibilities **/

export interface VisibilityListResponse {
  total?: number;
  data?: Array<ProductVisibility>;
}

export type VisibilityCreateRequest = ProductVisibility;
export type VisibilityCreateResponse = { data: ProductVisibility };

export type VisibilityListSearchRequest = Criteria;
export interface VisibilityListSearchResponse {
  total?: number;
  data?: Array<ProductVisibility>;
}

export interface VisibilitySingleResponse {
  data: ProductVisibility;
}

export type VisibilityUpdateRequest = ProductVisibility;
export type VisibilityUpdateResponse = { data: ProductVisibility };

export interface VisibilityAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface VisibilityAggregationResponse {
  total?: number;
  data?: Array<ProductVisibility>;
}
