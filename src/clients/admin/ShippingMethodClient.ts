import Client from "../Client";
import { ShippingMethod } from "#types/api/admin/shippingMethod/ShippingMethod";
import { ShippingMethodPrice } from "#types/api/admin/shippingMethod/ShippingMethodPrice";
import createRestEndpoint from "../../utils/createRestEndpoint";

class ShippingMethodClient extends Client {
  public shippingMethods = createRestEndpoint<ShippingMethod>(
    this,
    "shipping-method",
    "shipping method"
  );
  public prices = createRestEndpoint<ShippingMethodPrice>(
    this,
    "shipping-method-price",
    "shipping method price"
  );
}

export default ShippingMethodClient;
