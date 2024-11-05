import { GenericRecord } from "./GenericRecord";

export type Salutation = {
  id: string;
  salutationKey: string;
  displayName: string;
  letterName: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
