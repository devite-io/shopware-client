import { Flow } from "#types/api/admin/flow/Flow";
import { FlowSequence } from "#types/api/admin/flow/FlowSequence";
import { FlowTemplate } from "#types/api/admin/flow/FlowTemplate";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Flows **/

export interface FlowListResponse {
  total?: number;
  data?: Array<Flow>;
}

export type FlowCreateRequest = Flow;
export type FlowCreateResponse = { data: Flow };

export type FlowListSearchRequest = Criteria;
export interface FlowListSearchResponse {
  total?: number;
  data?: Array<Flow>;
}

export interface FlowSingleResponse {
  data: Flow;
}

export type FlowUpdateRequest = Flow;
export type FlowUpdateResponse = { data: Flow };

export interface FlowAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FlowAggregationResponse {
  total?: number;
  data?: Array<Flow>;
}

/** Flow Sequences **/

export interface FlowSequenceListResponse {
  total?: number;
  data?: Array<FlowSequence>;
}

export type FlowSequenceCreateRequest = FlowSequence;
export type FlowSequenceCreateResponse = { data: FlowSequence };

export type FlowSequenceListSearchRequest = Criteria;
export interface FlowSequenceListSearchResponse {
  total?: number;
  data?: Array<FlowSequence>;
}

export interface FlowSequenceSingleResponse {
  data: FlowSequence;
}

export type FlowSequenceUpdateRequest = FlowSequence;
export type FlowSequenceUpdateResponse = { data: FlowSequence };

export interface FlowSequenceAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FlowSequenceAggregationResponse {
  total?: number;
  data?: Array<FlowSequence>;
}

/** Flow Templates **/

export interface FlowTemplateListResponse {
  total?: number;
  data?: Array<FlowTemplate>;
}

export type FlowTemplateCreateRequest = FlowTemplate;
export type FlowTemplateCreateResponse = { data: FlowTemplate };

export type FlowTemplateListSearchRequest = Criteria;
export interface FlowTemplateListSearchResponse {
  total?: number;
  data?: Array<FlowTemplate>;
}

export interface FlowTemplateSingleResponse {
  data: FlowTemplate;
}

export type FlowTemplateUpdateRequest = FlowTemplate;
export type FlowTemplateUpdateResponse = { data: FlowTemplate };

export interface FlowTemplateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FlowTemplateAggregationResponse {
  total?: number;
  data?: Array<FlowTemplate>;
}
