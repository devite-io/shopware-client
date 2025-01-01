import { GenericRecord } from "#types/api/global/GenericRecord";
import { NumberRangeType } from "./NumberRangeType";
import { NumberRangeSalesChannel } from "./NumberRangeSalesChannel";
import { NumberRangeState } from "./NumberRangeState";

export interface NumberRange {
  id: string;
  typeId: string;
  global: boolean;
  name: string;
  description?: string;
  pattern: string;
  start: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  type?: NumberRangeType;
  numberRangeSalesChannels?: Array<NumberRangeSalesChannel>;
  state?: NumberRangeState;
}
