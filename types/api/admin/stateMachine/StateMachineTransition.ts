import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachine } from "./StateMachine";
import { StateMachineState } from "./StateMachineState";

export interface StateMachineTransition {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  actionName: string;
  stateMachineId: string;
  stateMachine?: StateMachine;
  fromStateId: string;
  fromStateMachineState?: StateMachineState;
  toStateId: string;
  toStateMachineState?: StateMachineState;
  customFields?: GenericRecord;
}
