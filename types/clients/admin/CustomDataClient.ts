import { CustomEntity } from "#types/api/admin/custom/CustomEntity";
import { CustomField } from "#types/api/admin/custom/field/CustomField";
import { CustomFieldSet } from "#types/api/admin/custom/field/set/CustomFieldSet";
import { CustomFieldSetRelation } from "#types/api/admin/custom/field/set/CustomFieldSetRelation";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Custom Entities **/

export interface CustomEntityListResponse {
  total?: number;
  data?: Array<CustomEntity>;
}

export type CustomEntityCreateRequest = CustomEntity;
export type CustomEntityCreateResponse = { data: CustomEntity };

export type CustomEntityListSearchRequest = Criteria;
export interface CustomEntityListSearchResponse {
  total?: number;
  data?: Array<CustomEntity>;
}

export interface CustomEntitySingleResponse {
  data: CustomEntity;
}

export type CustomEntityUpdateRequest = CustomEntity;
export type CustomEntityUpdateResponse = { data: CustomEntity };

export interface CustomEntityAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomEntityAggregationResponse {
  total?: number;
  data?: Array<CustomEntity>;
}

/** Custom Fields **/

export interface CustomFieldListResponse {
  total?: number;
  data?: Array<CustomField>;
}

export type CustomFieldCreateRequest = CustomField;
export type CustomFieldCreateResponse = { data: CustomField };

export type CustomFieldListSearchRequest = Criteria;
export interface CustomFieldListSearchResponse {
  total?: number;
  data?: Array<CustomField>;
}

export interface CustomFieldSingleResponse {
  data: CustomField;
}

export type CustomFieldUpdateRequest = CustomField;
export type CustomFieldUpdateResponse = { data: CustomField };

export interface CustomFieldAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomFieldAggregationResponse {
  total?: number;
  data?: Array<CustomField>;
}

/** Custom Field Sets **/

export interface CustomFieldSetListResponse {
  total?: number;
  data?: Array<CustomFieldSet>;
}

export type CustomFieldSetCreateRequest = CustomFieldSet;
export type CustomFieldSetCreateResponse = { data: CustomFieldSet };

export type CustomFieldSetListSearchRequest = Criteria;
export interface CustomFieldSetListSearchResponse {
  total?: number;
  data?: Array<CustomFieldSet>;
}

export interface CustomFieldSetSingleResponse {
  data: CustomFieldSet;
}

export type CustomFieldSetUpdateRequest = CustomFieldSet;
export type CustomFieldSetUpdateResponse = { data: CustomFieldSet };

export interface CustomFieldSetAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomFieldSetAggregationResponse {
  total?: number;
  data?: Array<CustomFieldSet>;
}

/** Custom Field Set Relations **/

export interface CustomFieldSetRelationListResponse {
  total?: number;
  data?: Array<CustomFieldSetRelation>;
}

export type CustomFieldSetRelationCreateRequest = CustomFieldSetRelation;
export type CustomFieldSetRelationCreateResponse = { data: CustomFieldSetRelation };

export type CustomFieldSetRelationListSearchRequest = Criteria;
export interface CustomFieldSetRelationListSearchResponse {
  total?: number;
  data?: Array<CustomFieldSetRelation>;
}

export interface CustomFieldSetRelationSingleResponse {
  data: CustomFieldSetRelation;
}

export type CustomFieldSetRelationUpdateRequest = CustomFieldSetRelation;
export type CustomFieldSetRelationUpdateResponse = { data: CustomFieldSetRelation };

export interface CustomFieldSetRelationAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomFieldSetRelationAggregationResponse {
  total?: number;
  data?: Array<CustomFieldSetRelation>;
}
