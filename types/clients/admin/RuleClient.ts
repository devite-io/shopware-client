import { Rule } from "#types/api/admin/rule/Rule";
import { RuleCondition } from "#types/api/admin/rule/RuleCondition";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Rules **/

export interface RuleListResponse {
  total?: number;
  data?: Array<Rule>;
}

export type RuleCreateRequest = Rule;
export type RuleCreateResponse = { data: Rule };

export type RuleListSearchRequest = Criteria;
export interface RuleListSearchResponse {
  total?: number;
  data?: Array<Rule>;
}

export interface RuleSingleResponse {
  data: Rule;
}

export type RuleUpdateRequest = Rule;
export type RuleUpdateResponse = { data: Rule };

export interface RuleAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RuleAggregationResponse {
  total?: number;
  data?: Array<Rule>;
}

/** Conditions **/

export interface ConditionListResponse {
  total?: number;
  data?: Array<RuleCondition>;
}

export type ConditionCreateRequest = RuleCondition;
export type ConditionCreateResponse = { data: RuleCondition };

export type ConditionListSearchRequest = Criteria;
export interface ConditionListSearchResponse {
  total?: number;
  data?: Array<RuleCondition>;
}

export interface ConditionSingleResponse {
  data: RuleCondition;
}

export type ConditionUpdateRequest = RuleCondition;
export type ConditionUpdateResponse = { data: RuleCondition };

export interface ConditionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ConditionAggregationResponse {
  total?: number;
  data?: Array<RuleCondition>;
}
