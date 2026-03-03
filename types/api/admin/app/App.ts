import { GenericRecord } from "#types/api/global/GenericRecord";
import { CustomFieldSet } from "../custom/field/set/CustomFieldSet";
import { AppActionButton } from "./AppActionButton";
import { Webhook } from "../webhook/Webhook";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { AppShippingMethod } from "../shippingMethod/AppShippingMethod";

export interface App {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  allowDisable?: boolean;
  path: string;
  version: string;
  label: string;
  name: string;
  description?: string;
  author?: string;
  customFieldSets?: Array<CustomFieldSet>;
  actionButtons?: Array<AppActionButton>;
  paymentMethods?: Array<PaymentMethod>;
  appShippingMethods?: Array<AppShippingMethod>;
  webhooks?: Array<Webhook>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
