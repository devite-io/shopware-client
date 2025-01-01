import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Salutation {
  id: string;
  salutationKey: string;
  displayName: string;
  letterName: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
