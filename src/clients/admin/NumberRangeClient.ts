import Client from "../Client";
import { NumberRange } from "#types/api/admin/numberRange/NumberRange";
import { NumberRangeState } from "#types/api/admin/numberRange/NumberRangeState";
import { NumberRangeType } from "#types/api/admin/numberRange/NumberRangeType";
import createRestEndpoint from "../../utils/createRestEndpoint";

class NumberRangeClient extends Client {
  public numberRanges = createRestEndpoint<NumberRange>(this, "number-range", "number range");
  public states = createRestEndpoint<NumberRangeState>(
    this,
    "number-range-state",
    "number range state"
  );
  public types = createRestEndpoint<NumberRangeType>(
    this,
    "number-range-type",
    "number range type"
  );
}

export default NumberRangeClient;
