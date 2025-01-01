import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "./StateMachineState";
import { StateMachineTransition } from "./StateMachineTransition";
import { StateMachineHistory } from "./StateMachineHistory";

export interface StateMachine {
  id: string;
  technicalName: string;
  name: string;
  customFields?: GenericRecord;
  initialStateId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  states?: Array<StateMachineState>;
  transitions?: Array<StateMachineTransition>;
  historyEntries?: Array<StateMachineHistory>;
}
