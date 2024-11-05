import { GenericRecord } from "../GenericRecord";

export type Locale = {
  id: string;
  code: string;
  name: string;
  territory: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
