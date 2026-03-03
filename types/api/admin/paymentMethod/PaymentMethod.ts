import { PaymentMethod as StoreApiPaymentMethod } from "#types/api/store/PaymentMethod";
import { Media } from "../media/Media";
import { Rule } from "../rule/Rule";

export type PaymentMethod = Omit<StoreApiPaymentMethod, "media"> & {
  handlerIdentifier?: string;
  readonly formattedHandlerIdentifier?: string;
  availabilityRuleId?: string;
  availabilityRule?: Rule;
  media?: Media;
};
