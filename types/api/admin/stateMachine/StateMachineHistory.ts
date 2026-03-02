import { StateMachine } from "./StateMachine";
import { StateMachineState } from "./StateMachineState";
import { User } from "../user/User";

export interface StateMachineHistory {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  referencedId: string;
  referencedVersionId: string;
  entityId?: any;
  entityName: string;
  userId?: string;
  user?: User;
  transactionActionName?: string;
  stateMachineId: string;
  stateMachine?: StateMachine;
  fromStateId: string;
  fromStateMachineState?: StateMachineState;
  toStateId: string;
  toStateMachineState?: StateMachineState;
}
