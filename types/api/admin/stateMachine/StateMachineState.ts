import { StateMachineState as StoreApiStateMachineState } from "#types/api/store/StateMachineState";
import { StateMachine } from "./StateMachine";

export type StateMachineState = StoreApiStateMachineState & {
  stateMachineId: string;
  stateMachine?: StateMachine;
};
