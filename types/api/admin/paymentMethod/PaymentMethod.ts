import { PaymentMethod as StoreApiPaymentMethod } from "#types/api/store/PaymentMethod";
import { Media } from "../media/Media";
import { Rule } from "../rule/Rule";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { ShopwarePlugin } from "../ShopwarePlugin";
import { Customer } from "../customer/Customer";
import { OrderTransaction } from "../order/transaction/OrderTransaction";
import { AppPaymentMethod } from "./AppPaymentMethod";

export type PaymentMethod = StoreApiPaymentMethod & {
  pluginId?: string;
  handlerIdentifier?: string;
  availabilityRuleId?: string;
  readonly formattedHandlerIdentifier?: string;
  media?: Media;
  availabilityRule?: Rule;
  salesChannelDefaultAssignments?: Array<SalesChannel>;
  plugin?: ShopwarePlugin;
  customers?: Array<Customer>;
  orderTransactions?: Array<OrderTransaction>;
  salesChannels?: Array<SalesChannel>;
  appPaymentMethod?: AppPaymentMethod;
};
