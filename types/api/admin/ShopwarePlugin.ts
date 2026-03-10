import { GenericRecord } from "#types/api/global/GenericRecord";
import { PaymentMethod } from "./paymentMethod/PaymentMethod";

export interface ShopwarePlugin {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly installedAt?: string;
  active?: boolean;
  path?: string;
  autoload?: string;
  baseClass: string;
  managedByComposer?: boolean;
  name: string;
  composerName?: string;
  label: string;
  description?: string;
  version: string;
  upgradeVersion?: string;
  author?: string;
  paymentMethods?: Array<PaymentMethod>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
