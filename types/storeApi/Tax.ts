import { GenericRecord } from "./GenericRecord";

export type Tax = {
  id: string;
  taxRate: number;
  name: string;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
