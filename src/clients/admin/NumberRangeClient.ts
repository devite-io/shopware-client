import Client from "../Client";
import JsonPayload from "@payloads/JsonPayload";
import ShopwareError from "@http/ShopwareError";
import createRestEndpoint from "@utils/createRestEndpoint";
import { NumberRange } from "#types/api/admin/numberRange/NumberRange";
import { NumberRangeState } from "#types/api/admin/numberRange/NumberRangeState";
import { NumberRangeType } from "#types/api/admin/numberRange/NumberRangeType";
import { NumberReservationResponse } from "#types/clients/admin/NumberRangeClient";

class NumberRangeClient extends Client {
  /* Number range reservation */

  /**
   * @param salesChannelId
   * @param type - The `technicalName` of the document type.
   * @param preview - If `true`, the document number range will not be incremented.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async reserveNumber(
    salesChannelId: string,
    type: string,
    preview?: boolean
  ): Promise<NumberReservationResponse> {
    const response = await this.get(`/_action/number-range/reserve/${type}/${salesChannelId}`, {
      query: { preview },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NumberReservationResponse;

    throw new ShopwareError("Failed to reserve number", response);
  }

  /** Rest Endpoints **/

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
