import { App } from "#types/api/admin/app/App";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";
import { AppActionButton } from "#types/api/admin/app/AppActionButton";
import { Criteria } from "#types/api/global/query/Criteria";
import { AppAdministrationSnippet } from "#types/api/admin/app/AppAdministrationSnippet";
import { AppCmsBlock } from "#types/api/admin/app/AppCmsBlock";
import { AppFlowAction } from "#types/api/admin/flow/app/AppFlowAction";
import { AppFlowEvent } from "#types/api/admin/flow/app/AppFlowEvent";
import { AppPaymentMethod } from "#types/api/admin/paymentMethod/AppPaymentMethod";
import { AppScriptCondition } from "#types/api/admin/app/AppScriptCondition";
import { AppShippingMethod } from "#types/api/admin/shippingMethod/AppShippingMethod";
import { AppTemplate } from "#types/api/admin/app/AppTemplate";

/** Apps **/

export interface AppListResponse {
  total?: number;
  data?: Array<App>;
}

export type AppCreateRequest = App;
export type AppCreateResponse = { data: App };

export type AppListSearchRequest = Criteria;
export interface AppListSearchResponse {
  total?: number;
  data?: Array<App>;
}

export interface AppSingleResponse {
  data: App;
}

export type AppUpdateRequest = App;
export type AppUpdateResponse = { data: App };

export interface AppAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AppAggregationResponse {
  total?: number;
  data?: Array<App>;
}

/** Action Buttons **/

export interface ActionButtonListResponse {
  total?: number;
  data?: Array<AppActionButton>;
}

export type ActionButtonCreateRequest = AppActionButton;
export type ActionButtonCreateResponse = { data: AppActionButton };

export type ActionButtonListSearchRequest = Criteria;
export interface ActionButtonListSearchResponse {
  total?: number;
  data?: Array<AppActionButton>;
}

export interface ActionButtonSingleResponse {
  data: AppActionButton;
}

export type ActionButtonUpdateRequest = AppActionButton;
export type ActionButtonUpdateResponse = { data: AppActionButton };

export interface ActionButtonAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ActionButtonAggregationResponse {
  total?: number;
  data?: Array<AppActionButton>;
}

/** Admin Snippets **/

export interface AdminSnippetListResponse {
  total?: number;
  data?: Array<AppAdministrationSnippet>;
}

export type AdminSnippetCreateRequest = AppAdministrationSnippet;
export type AdminSnippetCreateResponse = { data: AppAdministrationSnippet };

export type AdminSnippetListSearchRequest = Criteria;
export interface AdminSnippetListSearchResponse {
  total?: number;
  data?: Array<AppAdministrationSnippet>;
}

export interface AdminSnippetSingleResponse {
  data: AppAdministrationSnippet;
}

export type AdminSnippetUpdateRequest = AppAdministrationSnippet;
export type AdminSnippetUpdateResponse = { data: AppAdministrationSnippet };

export interface AdminSnippetAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AdminSnippetAggregationResponse {
  total?: number;
  data?: Array<AppAdministrationSnippet>;
}

/** Cms Block **/

export interface CmsBlockListResponse {
  total?: number;
  data?: Array<AppCmsBlock>;
}

export type CmsBlockCreateRequest = AppCmsBlock;
export type CmsBlockCreateResponse = { data: AppCmsBlock };

export type CmsBlockListSearchRequest = Criteria;
export interface CmsBlockListSearchResponse {
  total?: number;
  data?: Array<AppCmsBlock>;
}

export interface CmsBlockSingleResponse {
  data: AppCmsBlock;
}

export type CmsBlockUpdateRequest = AppCmsBlock;
export type CmsBlockUpdateResponse = { data: AppCmsBlock };

export interface CmsBlockAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CmsBlockAggregationResponse {
  total?: number;
  data?: Array<AppCmsBlock>;
}

/** Flow Actions **/

export interface FlowActionListResponse {
  total?: number;
  data?: Array<AppFlowAction>;
}

export type FlowActionCreateRequest = AppFlowAction;
export type FlowActionCreateResponse = { data: AppFlowAction };

export type FlowActionListSearchRequest = Criteria;
export interface FlowActionListSearchResponse {
  total?: number;
  data?: Array<AppFlowAction>;
}

export interface FlowActionSingleResponse {
  data: AppFlowAction;
}

export type FlowActionUpdateRequest = AppFlowAction;
export type FlowActionUpdateResponse = { data: AppFlowAction };

export interface FlowActionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FlowActionAggregationResponse {
  total?: number;
  data?: Array<AppFlowAction>;
}

/** Flow Events **/

export interface FlowEventListResponse {
  total?: number;
  data?: Array<AppFlowEvent>;
}

export type FlowEventCreateRequest = AppFlowEvent;
export type FlowEventCreateResponse = { data: AppFlowEvent };

export type FlowEventListSearchRequest = Criteria;
export interface FlowEventListSearchResponse {
  total?: number;
  data?: Array<AppFlowEvent>;
}

export interface FlowEventSingleResponse {
  data: AppFlowEvent;
}

export type FlowEventUpdateRequest = AppFlowEvent;
export type FlowEventUpdateResponse = { data: AppFlowEvent };

export interface FlowEventAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FlowEventAggregationResponse {
  total?: number;
  data?: Array<AppFlowEvent>;
}

/** Payment Methods **/

export interface PaymentMethodListResponse {
  total?: number;
  data?: Array<AppPaymentMethod>;
}

export type PaymentMethodCreateRequest = AppPaymentMethod;
export type PaymentMethodCreateResponse = { data: AppPaymentMethod };

export type PaymentMethodListSearchRequest = Criteria;
export interface PaymentMethodListSearchResponse {
  total?: number;
  data?: Array<AppPaymentMethod>;
}

export interface PaymentMethodSingleResponse {
  data: AppPaymentMethod;
}

export type PaymentMethodUpdateRequest = AppPaymentMethod;
export type PaymentMethodUpdateResponse = { data: AppPaymentMethod };

export interface PaymentMethodAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PaymentMethodAggregationResponse {
  total?: number;
  data?: Array<AppPaymentMethod>;
}

/** Script Conditions **/

export interface ScriptConditionListResponse {
  total?: number;
  data?: Array<AppScriptCondition>;
}

export type ScriptConditionCreateRequest = AppScriptCondition;
export type ScriptConditionCreateResponse = { data: AppScriptCondition };

export type ScriptConditionListSearchRequest = Criteria;
export interface ScriptConditionListSearchResponse {
  total?: number;
  data?: Array<AppScriptCondition>;
}

export interface ScriptConditionSingleResponse {
  data: AppScriptCondition;
}

export type ScriptConditionUpdateRequest = AppScriptCondition;
export type ScriptConditionUpdateResponse = { data: AppScriptCondition };

export interface ScriptConditionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ScriptConditionAggregationResponse {
  total?: number;
  data?: Array<AppScriptCondition>;
}

/** Shipping Methods **/

export interface ShippingMethodListResponse {
  total?: number;
  data?: Array<AppShippingMethod>;
}

export type ShippingMethodCreateRequest = AppShippingMethod;
export type ShippingMethodCreateResponse = { data: AppShippingMethod };

export type ShippingMethodListSearchRequest = Criteria;
export interface ShippingMethodListSearchResponse {
  total?: number;
  data?: Array<AppShippingMethod>;
}

export interface ShippingMethodSingleResponse {
  data: AppShippingMethod;
}

export type ShippingMethodUpdateRequest = AppShippingMethod;
export type ShippingMethodUpdateResponse = { data: AppShippingMethod };

export interface ShippingMethodAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ShippingMethodAggregationResponse {
  total?: number;
  data?: Array<AppShippingMethod>;
}

/** Templates **/

export interface TemplateListResponse {
  total?: number;
  data?: Array<AppTemplate>;
}

export type TemplateCreateRequest = AppTemplate;
export type TemplateCreateResponse = { data: AppTemplate };

export type TemplateListSearchRequest = Criteria;
export interface TemplateListSearchResponse {
  total?: number;
  data?: Array<AppTemplate>;
}

export interface TemplateSingleResponse {
  data: AppTemplate;
}

export type TemplateUpdateRequest = AppTemplate;
export type TemplateUpdateResponse = { data: AppTemplate };

export interface TemplateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TemplateAggregationResponse {
  total?: number;
  data?: Array<AppTemplate>;
}
