import { NumberRange } from "./NumberRange";

export interface NumberRangeState {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  lastValue: number;
  numberRangeId: string;
  numberRange?: NumberRange;
}
