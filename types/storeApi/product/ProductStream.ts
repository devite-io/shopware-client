import { GenericRecord } from "../GenericRecord";

export type ProductStream = {
  id: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
