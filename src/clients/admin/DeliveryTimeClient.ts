import Client from "../Client";
import { DeliveryTime } from "#types/api/admin/DeliveryTime";
import createRestEndpoint from "../../utils/createRestEndpoint";

class DeliveryTimeClient extends Client {
  public deliveryTimes = createRestEndpoint<DeliveryTime>(this, "delivery-time", "delivery time");
}

export default DeliveryTimeClient;
