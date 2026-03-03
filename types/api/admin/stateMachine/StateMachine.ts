import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "./StateMachineState";
import { StateMachineTransition } from "./StateMachineTransition";
import { StateMachineHistory } from "./StateMachineHistory";

export interface StateMachine {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  technicalName: string;
  name: string;
  initialStateId?: string;
  states?: Array<StateMachineState>;
  transitions?: Array<StateMachineTransition>;
  historyEntries?: Array<StateMachineHistory>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
