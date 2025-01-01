import { AclRole } from "#types/api/admin/acl/AclRole";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface AclRoleListResponse {
  total?: number;
  data?: Array<AclRole>;
}

export type AclRoleCreateRequest = AclRole;
export type AclRoleCreateResponse = { data: AclRole };

export type AclRoleListSearchRequest = Criteria;
export interface AclRoleListSearchResponse {
  total?: number;
  data?: Array<AclRole>;
}

export interface AclRoleSingleResponse {
  data: AclRole;
}

export type AclRoleUpdateRequest = AclRole;
export type AclRoleUpdateResponse = { data: AclRole };

export interface AclRoleAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AclRoleAggregationResponse {
  total?: number;
  data?: Array<AclRole>;
}
