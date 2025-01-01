import { StateMachine } from "#types/api/admin/stateMachine/StateMachine";
import { StateMachineState } from "#types/api/admin/stateMachine/StateMachineState";
import { StateMachineTransition } from "#types/api/admin/stateMachine/StateMachineTransition";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** State Machines **/

export interface StateMachineListResponse {
  total?: number;
  data?: Array<StateMachine>;
}

export type StateMachineCreateRequest = StateMachine;
export type StateMachineCreateResponse = { data: StateMachine };

export type StateMachineListSearchRequest = Criteria;
export interface StateMachineListSearchResponse {
  total?: number;
  data?: Array<StateMachine>;
}

export interface StateMachineSingleResponse {
  data: StateMachine;
}

export type StateMachineUpdateRequest = StateMachine;
export type StateMachineUpdateResponse = { data: StateMachine };

export interface StateMachineAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StateMachineAggregationResponse {
  total?: number;
  data?: Array<StateMachine>;
}

/** States **/

export interface StateListResponse {
  total?: number;
  data?: Array<StateMachineState>;
}

export type StateCreateRequest = StateMachineState;
export type StateCreateResponse = { data: StateMachineState };

export type StateListSearchRequest = Criteria;
export interface StateListSearchResponse {
  total?: number;
  data?: Array<StateMachineState>;
}

export interface StateSingleResponse {
  data: StateMachineState;
}

export type StateUpdateRequest = StateMachineState;
export type StateUpdateResponse = { data: StateMachineState };

export interface StateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StateAggregationResponse {
  total?: number;
  data?: Array<StateMachineState>;
}

/** Transitions **/

export interface TransitionListResponse {
  total?: number;
  data?: Array<StateMachineTransition>;
}

export type TransitionCreateRequest = StateMachineTransition;
export type TransitionCreateResponse = { data: StateMachineTransition };

export type TransitionListSearchRequest = Criteria;
export interface TransitionListSearchResponse {
  total?: number;
  data?: Array<StateMachineTransition>;
}

export interface TransitionSingleResponse {
  data: StateMachineTransition;
}

export type TransitionUpdateRequest = StateMachineTransition;
export type TransitionUpdateResponse = { data: StateMachineTransition };

export interface TransitionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TransitionAggregationResponse {
  total?: number;
  data?: Array<StateMachineTransition>;
}
