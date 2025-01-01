import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachine } from "./StateMachine";
import { StateMachineState } from "./StateMachineState";

export interface StateMachineTransition {
  id: string;
  actionName: string;
  stateMachineId: string;
  fromStateId: string;
  toStateId: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachine?: StateMachine;
  fromStateMachineState?: StateMachineState;
  toStateMachineState?: StateMachineState;
}
