import Client from "../Client";
import { PaymentMethod } from "#types/api/admin/paymentMethod/PaymentMethod";
import createRestEndpoint from "../../utils/createRestEndpoint";

class PaymentMethodClient extends Client {
  public paymentMethods = createRestEndpoint<PaymentMethod>(
    this,
    "payment-method",
    "payment method"
  );
}

export default PaymentMethodClient;
