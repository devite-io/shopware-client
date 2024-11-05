import { GenericRecord } from "./GenericRecord";

export type Rule = {
  id?: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  extensions?: any;
};
