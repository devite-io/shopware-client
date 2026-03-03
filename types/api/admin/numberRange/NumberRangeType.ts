import { GenericRecord } from "#types/api/global/GenericRecord";

export interface NumberRangeType {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  technicalName?: string;
  typeName: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
