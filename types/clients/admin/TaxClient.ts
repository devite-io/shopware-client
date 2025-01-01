import { Tax } from "#types/api/admin/tax/Tax";
import { TaxProvider } from "#types/api/admin/tax/TaxProvider";
import { TaxRule } from "#types/api/admin/tax/rule/TaxRule";
import { TaxRuleType } from "#types/api/admin/tax/rule/TaxRuleType";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Taxes **/

export interface TaxListResponse {
  total?: number;
  data?: Array<Tax>;
}

export type TaxCreateRequest = Tax;
export type TaxCreateResponse = { data: Tax };

export type TaxListSearchRequest = Criteria;
export interface TaxListSearchResponse {
  total?: number;
  data?: Array<Tax>;
}

export interface TaxSingleResponse {
  data: Tax;
}

export type TaxUpdateRequest = Tax;
export type TaxUpdateResponse = { data: Tax };

export interface TaxAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TaxAggregationResponse {
  total?: number;
  data?: Array<Tax>;
}

/** Providers **/

export interface ProviderListResponse {
  total?: number;
  data?: Array<TaxProvider>;
}

export type ProviderCreateRequest = TaxProvider;
export type ProviderCreateResponse = { data: TaxProvider };

export type ProviderListSearchRequest = Criteria;
export interface ProviderListSearchResponse {
  total?: number;
  data?: Array<TaxProvider>;
}

export interface ProviderSingleResponse {
  data: TaxProvider;
}

export type ProviderUpdateRequest = TaxProvider;
export type ProviderUpdateResponse = { data: TaxProvider };

export interface ProviderAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ProviderAggregationResponse {
  total?: number;
  data?: Array<TaxProvider>;
}

/** Rules **/

export interface RuleListResponse {
  total?: number;
  data?: Array<TaxRule>;
}

export type RuleCreateRequest = TaxRule;
export type RuleCreateResponse = { data: TaxRule };

export type RuleListSearchRequest = Criteria;
export interface RuleListSearchResponse {
  total?: number;
  data?: Array<TaxRule>;
}

export interface RuleSingleResponse {
  data: TaxRule;
}

export type RuleUpdateRequest = TaxRule;
export type RuleUpdateResponse = { data: TaxRule };

export interface RuleAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RuleAggregationResponse {
  total?: number;
  data?: Array<TaxRule>;
}

/** Rule Types **/

export interface RuleTypeListResponse {
  total?: number;
  data?: Array<TaxRuleType>;
}

export type RuleTypeCreateRequest = TaxRuleType;
export type RuleTypeCreateResponse = { data: TaxRuleType };

export type RuleTypeListSearchRequest = Criteria;
export interface RuleTypeListSearchResponse {
  total?: number;
  data?: Array<TaxRuleType>;
}

export interface RuleTypeSingleResponse {
  data: TaxRuleType;
}

export type RuleTypeUpdateRequest = TaxRuleType;
export type RuleTypeUpdateResponse = { data: TaxRuleType };

export interface RuleTypeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RuleTypeAggregationResponse {
  total?: number;
  data?: Array<TaxRuleType>;
}
