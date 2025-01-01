import { User } from "#types/api/admin/user/User";
import { UserAccessKey } from "#types/api/admin/user/UserAccessKey";
import { UserConfig } from "#types/api/admin/user/UserConfig";
import { UserRecovery } from "#types/api/admin/user/UserRecovery";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Users **/

export interface UserListResponse {
  total?: number;
  data?: Array<User>;
}

export type UserCreateRequest = User;
export type UserCreateResponse = { data: User };

export type UserListSearchRequest = Criteria;
export interface UserListSearchResponse {
  total?: number;
  data?: Array<User>;
}

export interface UserSingleResponse {
  data: User;
}

export type UserUpdateRequest = User;
export type UserUpdateResponse = { data: User };

export interface UserAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface UserAggregationResponse {
  total?: number;
  data?: Array<User>;
}

/** Access Keys **/

export interface AccessKeyListResponse {
  total?: number;
  data?: Array<UserAccessKey>;
}

export type AccessKeyCreateRequest = UserAccessKey;
export type AccessKeyCreateResponse = { data: UserAccessKey };

export type AccessKeyListSearchRequest = Criteria;
export interface AccessKeyListSearchResponse {
  total?: number;
  data?: Array<UserAccessKey>;
}

export interface AccessKeySingleResponse {
  data: UserAccessKey;
}

export type AccessKeyUpdateRequest = UserAccessKey;
export type AccessKeyUpdateResponse = { data: UserAccessKey };

export interface AccessKeyAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AccessKeyAggregationResponse {
  total?: number;
  data?: Array<UserAccessKey>;
}

/** Configs **/

export interface ConfigListResponse {
  total?: number;
  data?: Array<UserConfig>;
}

export type ConfigCreateRequest = UserConfig;
export type ConfigCreateResponse = { data: UserConfig };

export type ConfigListSearchRequest = Criteria;
export interface ConfigListSearchResponse {
  total?: number;
  data?: Array<UserConfig>;
}

export interface ConfigSingleResponse {
  data: UserConfig;
}

export type ConfigUpdateRequest = UserConfig;
export type ConfigUpdateResponse = { data: UserConfig };

export interface ConfigAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ConfigAggregationResponse {
  total?: number;
  data?: Array<UserConfig>;
}

/** Recoveries **/

export interface RecoveryListResponse {
  total?: number;
  data?: Array<UserRecovery>;
}

export type RecoveryCreateRequest = UserRecovery;
export type RecoveryCreateResponse = { data: UserRecovery };

export type RecoveryListSearchRequest = Criteria;
export interface RecoveryListSearchResponse {
  total?: number;
  data?: Array<UserRecovery>;
}

export interface RecoverySingleResponse {
  data: UserRecovery;
}

export type RecoveryUpdateRequest = UserRecovery;
export type RecoveryUpdateResponse = { data: UserRecovery };

export interface RecoveryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RecoveryAggregationResponse {
  total?: number;
  data?: Array<UserRecovery>;
}
