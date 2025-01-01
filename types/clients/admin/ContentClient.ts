import { CmsBlock } from "#types/api/admin/cms/CmsBlock";
import { CmsPage } from "#types/api/admin/cms/CmsPage";
import { CmsSection } from "#types/api/admin/cms/CmsSection";
import { CmsSlot } from "#types/api/admin/cms/CmsSlot";
import { LandingPage } from "#types/api/admin/cms/landingPage/LandingPage";
import { Theme } from "#types/api/admin/theme/Theme";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Cms Blocks **/

export interface CmsBlockListResponse {
  total?: number;
  data?: Array<CmsBlock>;
}

export type CmsBlockCreateRequest = CmsBlock;
export type CmsBlockCreateResponse = { data: CmsBlock };

export type CmsBlockListSearchRequest = Criteria;
export interface CmsBlockListSearchResponse {
  total?: number;
  data?: Array<CmsBlock>;
}

export interface CmsBlockSingleResponse {
  data: CmsBlock;
}

export type CmsBlockUpdateRequest = CmsBlock;
export type CmsBlockUpdateResponse = { data: CmsBlock };

export interface CmsBlockAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CmsBlockAggregationResponse {
  total?: number;
  data?: Array<CmsBlock>;
}

/** Cms Pages **/

export interface CmsPageListResponse {
  total?: number;
  data?: Array<CmsPage>;
}

export type CmsPageCreateRequest = CmsPage;
export type CmsPageCreateResponse = { data: CmsPage };

export type CmsPageListSearchRequest = Criteria;
export interface CmsPageListSearchResponse {
  total?: number;
  data?: Array<CmsPage>;
}

export interface CmsPageSingleResponse {
  data: CmsPage;
}

export type CmsPageUpdateRequest = CmsPage;
export type CmsPageUpdateResponse = { data: CmsPage };

export interface CmsPageAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CmsPageAggregationResponse {
  total?: number;
  data?: Array<CmsPage>;
}

/** Cms Sections **/

export interface CmsSectionListResponse {
  total?: number;
  data?: Array<CmsSection>;
}

export type CmsSectionCreateRequest = CmsSection;
export type CmsSectionCreateResponse = { data: CmsSection };

export type CmsSectionListSearchRequest = Criteria;
export interface CmsSectionListSearchResponse {
  total?: number;
  data?: Array<CmsSection>;
}

export interface CmsSectionSingleResponse {
  data: CmsSection;
}

export type CmsSectionUpdateRequest = CmsSection;
export type CmsSectionUpdateResponse = { data: CmsSection };

export interface CmsSectionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CmsSectionAggregationResponse {
  total?: number;
  data?: Array<CmsSection>;
}

/** Cms Slots **/

export interface CmsSlotListResponse {
  total?: number;
  data?: Array<CmsSlot>;
}

export type CmsSlotCreateRequest = CmsSlot;
export type CmsSlotCreateResponse = { data: CmsSlot };

export type CmsSlotListSearchRequest = Criteria;
export interface CmsSlotListSearchResponse {
  total?: number;
  data?: Array<CmsSlot>;
}

export interface CmsSlotSingleResponse {
  data: CmsSlot;
}

export type CmsSlotUpdateRequest = CmsSlot;
export type CmsSlotUpdateResponse = { data: CmsSlot };

export interface CmsSlotAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CmsSlotAggregationResponse {
  total?: number;
  data?: Array<CmsSlot>;
}

/** Landing Pages **/

export interface LandingPageListResponse {
  total?: number;
  data?: Array<LandingPage>;
}

export type LandingPageCreateRequest = LandingPage;
export type LandingPageCreateResponse = { data: LandingPage };

export type LandingPageListSearchRequest = Criteria;
export interface LandingPageListSearchResponse {
  total?: number;
  data?: Array<LandingPage>;
}

export interface LandingPageSingleResponse {
  data: LandingPage;
}

export type LandingPageUpdateRequest = LandingPage;
export type LandingPageUpdateResponse = { data: LandingPage };

export interface LandingPageAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LandingPageAggregationResponse {
  total?: number;
  data?: Array<LandingPage>;
}

/** Themes **/

export interface ThemeListResponse {
  total?: number;
  data?: Array<Theme>;
}

export type ThemeCreateRequest = Theme;
export type ThemeCreateResponse = { data: Theme };

export type ThemeListSearchRequest = Criteria;
export interface ThemeListSearchResponse {
  total?: number;
  data?: Array<Theme>;
}

export interface ThemeSingleResponse {
  data: Theme;
}

export type ThemeUpdateRequest = Theme;
export type ThemeUpdateResponse = { data: Theme };

export interface ThemeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ThemeAggregationResponse {
  total?: number;
  data?: Array<Theme>;
}
