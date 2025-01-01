import { NumberRange } from "./NumberRange";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { NumberRangeType } from "./NumberRangeType";

export interface NumberRangeSalesChannel {
  id: string;
  numberRangeId: string;
  salesChannelId: string;
  numberRangeTypeId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  numberRange?: NumberRange;
  salesChannel?: SalesChannel;
  numberRangeType?: NumberRangeType;
}
