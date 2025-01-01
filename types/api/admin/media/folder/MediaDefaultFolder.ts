import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaFolder } from "./MediaFolder";

export interface MediaDefaultFolder {
  id: string;
  entity?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  folder?: MediaFolder;
}
