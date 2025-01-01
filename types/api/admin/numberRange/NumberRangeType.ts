import { GenericRecord } from "#types/api/global/GenericRecord";
import { NumberRange } from "./NumberRange";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface NumberRangeType {
  id: string;
  technicalName?: string;
  typeName: string;
  global: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  numberRanges?: Array<NumberRange>;
  numberRangeSalesChannels?: Array<SalesChannel>;
}
