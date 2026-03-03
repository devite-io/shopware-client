import { GenericRecord } from "#types/api/global/GenericRecord";
import { NumberRangeType } from "./NumberRangeType";
import { NumberRangeState } from "./NumberRangeState";

export interface NumberRange {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  description?: string;
  pattern: string;
  start: number;
  typeId: string;
  type?: NumberRangeType;
  state?: NumberRangeState;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
