import { GenericRecord } from "#types/api/global/GenericRecord";
import { User } from "./User";

export interface UserAccessKey {
  id: string;
  userId: string;
  accessKey: string;
  secretAccessKey: string;
  lastUsageAt?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  user?: User;
}
