import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Salutation {
  id: string;
  salutationKey: string;
  position: number;
  displayName: string;
  letterName: string;
  customFields?: GenericRecord;
  readonly createdAt: string;
  readonly updatedAt?: string;
  translated?: Record<string, any>;
}
