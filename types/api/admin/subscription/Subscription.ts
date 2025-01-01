import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rounding } from "#types/api/global/Rounding";

export interface Subscription {
  id?: string;
  convertedOrder?: Array<any>;
  subscriptionNumber?: number;
  nextSchedule?: string;
  salesChannelId?: string;
  subscriptionPlanId?: string;
  subscriptionPlanName?: string;
  subscriptionIntervalId?: string;
  subscriptionIntervalName?: string;
  dateInterval?: string;
  cronInterval?: string;
  initialExecutionCount?: number;
  remainingExecutionCount?: number;
  billingAddressId?: string;
  shippingAddressId?: string;
  shippingMethodId?: string;
  paymentMethodId?: string;
  currencyId?: string;
  languageId?: string;
  stateId?: string;
  customFields?: GenericRecord;
  itemRounding?: Rounding;
  totalRounding?: Rounding;
}
