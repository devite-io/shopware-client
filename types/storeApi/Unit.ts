import { GenericRecord } from "./GenericRecord";

export type Unit = {
  id: string;
  shortCode: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
