import { GenericRecord } from "#types/api/global/GenericRecord";

export interface UserAccessKey {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  accessKey: string;
  secretAccessKey: string;
  lastUsageAt?: string;
  customFields?: GenericRecord;
}
