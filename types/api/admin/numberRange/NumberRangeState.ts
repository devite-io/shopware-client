import { NumberRange } from "./NumberRange";

export interface NumberRangeState {
  id: string;
  numberRangeId: string;
  lastValue: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  numberRange?: NumberRange;
}
