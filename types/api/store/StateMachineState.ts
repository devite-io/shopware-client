import { GenericRecord } from "#types/api/global/GenericRecord";

export interface StateMachineState {
  id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  technicalName: string;
  name: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
