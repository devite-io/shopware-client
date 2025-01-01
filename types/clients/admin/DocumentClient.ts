import { ShopwareDocument } from "#types/api/admin/document/ShopwareDocument";
import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfig";
import { ShopwareDocumentBaseConfigSalesChannel } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfigSalesChannel";
import { ShopwareDocumentType } from "#types/api/admin/document/ShopwareDocumentType";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Document Management **/

export interface NumberReservationResponse {
  number?: string;
}

export interface UploadResponse {
  documentId?: string;
  documentDeepLink?: string;
}

/** Documents **/

export interface DocumentListResponse {
  total?: number;
  data?: Array<ShopwareDocument>;
}

export type DocumentCreateRequest = ShopwareDocument;
export type DocumentCreateResponse = { data: ShopwareDocument };

export type DocumentListSearchRequest = Criteria;
export interface DocumentListSearchResponse {
  total?: number;
  data?: Array<ShopwareDocument>;
}

export interface DocumentSingleResponse {
  data: ShopwareDocument;
}

export type DocumentUpdateRequest = ShopwareDocument;
export type DocumentUpdateResponse = { data: ShopwareDocument };

export interface DocumentAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DocumentAggregationResponse {
  total?: number;
  data?: Array<ShopwareDocument>;
}

/** Document Base Configs **/

export interface BaseConfigListResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfig>;
}

export type BaseConfigCreateRequest = ShopwareDocumentBaseConfig;
export type BaseConfigCreateResponse = { data: ShopwareDocumentBaseConfig };

export type BaseConfigListSearchRequest = Criteria;
export interface BaseConfigListSearchResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfig>;
}

export interface BaseConfigSingleResponse {
  data: ShopwareDocumentBaseConfig;
}

export type BaseConfigUpdateRequest = ShopwareDocumentBaseConfig;
export type BaseConfigUpdateResponse = { data: ShopwareDocumentBaseConfig };

export interface BaseConfigAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface BaseConfigAggregationResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfig>;
}

/** Document Base Config Sales Channels **/

export interface BaseConfigSalesChannelListResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfigSalesChannel>;
}

export type BaseConfigSalesChannelCreateRequest = ShopwareDocumentBaseConfigSalesChannel;
export type BaseConfigSalesChannelCreateResponse = { data: ShopwareDocumentBaseConfigSalesChannel };

export type BaseConfigSalesChannelListSearchRequest = Criteria;
export interface BaseConfigSalesChannelListSearchResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfigSalesChannel>;
}

export interface BaseConfigSalesChannelSingleResponse {
  data: ShopwareDocumentBaseConfigSalesChannel;
}

export type BaseConfigSalesChannelUpdateRequest = ShopwareDocumentBaseConfigSalesChannel;
export type BaseConfigSalesChannelUpdateResponse = { data: ShopwareDocumentBaseConfigSalesChannel };

export interface BaseConfigSalesChannelAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface BaseConfigSalesChannelAggregationResponse {
  total?: number;
  data?: Array<ShopwareDocumentBaseConfigSalesChannel>;
}

/** Document Types **/

export interface DocumentTypeListResponse {
  total?: number;
  data?: Array<ShopwareDocumentType>;
}

export type DocumentTypeCreateRequest = ShopwareDocumentType;
export type DocumentTypeCreateResponse = { data: ShopwareDocumentType };

export type DocumentTypeListSearchRequest = Criteria;
export interface DocumentTypeListSearchResponse {
  total?: number;
  data?: Array<ShopwareDocumentType>;
}

export interface DocumentTypeSingleResponse {
  data: ShopwareDocumentType;
}

export type DocumentTypeUpdateRequest = ShopwareDocumentType;
export type DocumentTypeUpdateResponse = { data: ShopwareDocumentType };

export interface DocumentTypeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DocumentTypeAggregationResponse {
  total?: number;
  data?: Array<ShopwareDocumentType>;
}
