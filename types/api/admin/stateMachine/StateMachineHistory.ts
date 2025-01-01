import { StateMachine } from "./StateMachine";
import { StateMachineState } from "./StateMachineState";
import { User } from "../user/User";

export interface StateMachineHistory {
  id: string;
  referencedId: string;
  referencedVersionId: string;
  stateMachineId: string;
  entityName: string;
  fromStateId: string;
  toStateId: string;
  transactionActionName?: string;
  userId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachine?: StateMachine;
  fromStateMachineState?: StateMachineState;
  toStateMachineState?: StateMachineState;
  user?: User;
  entityId?: any;
}
