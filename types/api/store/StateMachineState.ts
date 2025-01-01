import { GenericRecord } from "#types/api/global/GenericRecord";

export interface StateMachineState {
  id?: string;
  technicalName: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
