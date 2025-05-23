import { GenericRecord } from "#types/api/global/GenericRecord";
import { CustomerGroup } from "./CustomerGroup";
import { Language } from "../locale/Language";
import { PaymentMethod } from "../PaymentMethod";
import { CustomerAddress } from "./address/CustomerAddress";
import { Salutation } from "../Salutation";
import { Tag } from "../Tag";

export interface Customer {
  apiAlias: "customer";
  id: string;
  groupId: string;
  salesChannelId: string;
  languageId: string;
  lastPaymentMethodId?: string;
  defaultBillingAddressId: string;
  defaultShippingAddressId: string;
  customerNumber: string;
  salutationId?: string;
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  title?: string;
  vatIds?: Array<string>;
  affiliateCode?: string;
  campaignCode?: string;
  active?: boolean;
  doubleOptInRegistration?: boolean;
  doubleOptInEmailSentDate?: string;
  doubleOptInConfirmDate?: string;
  hash?: string;
  guest?: boolean;
  firstLogin?: string;
  lastLogin?: string;
  birthday?: string;
  readonly lastOrderDate?: string;
  readonly orderCount?: number;
  readonly orderTotalAmount?: number;
  readonly reviewCount?: number;
  customFields?: GenericRecord;
  readonly tagIds?: Array<string>;
  accountType?: "private" | "business";
  createdById?: string;
  updatedById?: string;
  defaultPaymentMethodId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  group?: CustomerGroup;
  language?: Language;
  lastPaymentMethod?: PaymentMethod;
  defaultBillingAddress?: CustomerAddress;
  activeBillingAddress: CustomerAddress;
  defaultShippingAddress?: CustomerAddress;
  activeShippingAddress: CustomerAddress;
  salutation?: Salutation;
  addresses?: Array<CustomerAddress>;
  tags?: Array<Tag>;
  defaultPaymentMethod?: PaymentMethod;
  extensions?: { specificFeatures?: any };
}
