import { GenericRecord } from "./GenericRecord";

export type StateMachineState = {
  id?: string;
  technicalName: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
