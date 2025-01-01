import { GenericRecord } from "#types/api/global/GenericRecord";
import { PaymentMethod } from "./paymentMethod/PaymentMethod";

export interface ShopwarePlugin {
  id: string;
  baseClass: string;
  name: string;
  composerName?: string;
  autoload?: string;
  active?: boolean;
  managedByComposer?: boolean;
  path?: string;
  author?: string;
  copyright?: string;
  license?: string;
  version: string;
  upgradeVersion?: string;
  installedAt?: string;
  readonly icon?: string;
  label: string;
  description?: string;
  manufacturerLink?: string;
  supportLink?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  paymentMethods?: Array<PaymentMethod>;
  /** @deprecated */
  changelog?: any;
}
