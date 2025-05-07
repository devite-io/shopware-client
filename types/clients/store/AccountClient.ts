import { Criteria } from "#types/api/global/query/Criteria";
import { Customer } from "#types/api/store/customer/Customer";
import { CustomerAddress } from "#types/api/store/customer/address/CustomerAddress";
import { CustomerGroup } from "#types/api/store";
import { GenericRecord } from "#types/api/global";

export interface AccountEmailChangeRequest {
  email: string;
  emailConfirmation: string;
  password: string;
}
export interface AccountEmailChangeResponse {
  success?: boolean;
}

export type AccountGetRequest = Criteria;
export type AccountGetResponse = Customer;

export interface AccountLanguageChangeRequest {
  language?: string;
}
export interface AccountLanguageChangeResponse {
  success?: boolean;
}

export type AccountNewsletterRecipientListRequest = Criteria;
export interface AccountNewsletterRecipientListResponse {
  apiAlias: "account_newsletter_recipient";
  status: "undefined" | "notSet" | "direct" | "optIn" | "optOut";
}

export interface AccountPasswordChangeRequest {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}
export interface AccountPasswordChangeResponse {
  success?: boolean;
}

export interface AccountPasswordRecoveryMailRequest {
  email: string;
  storefrontUrl: string;
}
export interface AccountPasswordRecoveryMailResponse {
  success?: boolean;
}

export interface AccountPasswordRecoveryRequest {
  hash: string;
  newPassword: string;
  newPasswordConfirm: string;
}
export interface AccountPasswordRecoveryResponse {
  success?: boolean;
}

export interface AccountPaymentMethodChangeResponse {
  success?: boolean;
}

export interface AccountRecoveryExpiryCheckRequest {
  hash: string;
}
export interface AccountRecoveryExpiryCheckResponse {
  apiAlias?: "array_struct";
  data?: { isExpired: boolean };
}

export interface AccountUpdateRequest {
  accountType?: "private" | "business";
  salutationId?: string;
  title?: string;
  firstName: string;
  lastName: string;
  company?: string;
  birthdayDay?: number;
  birthdayMonth?: number;
  birthdayYear?: number;
  vatIds?: Array<string>;
  customFields?: GenericRecord;
}
export interface AccountUpdateResponse {
  success?: boolean;
}

export interface CustomerRegisterRequest {
  email: string;
  password?: string;
  salutationId: string;
  firstName: string;
  lastName: string;
  acceptedDataProtection: boolean;
  storefrontUrl: string;
  billingAddress: CustomerAddress;
  shippingAddress?: CustomerAddress;
  guest?: boolean;
  birthdayDay?: number;
  birthdayMonth?: number;
  birthdayYear?: number;
  title?: string;
  affiliateCode?: string;
  campaignCode?: string;
  /** @default "private" */
  accountType?: "private" | "business";
  company?: string;
  vatIds?: Array<string>;
  customFields?: GenericRecord;
}
export type CustomerRegisterResponse = { accountType: "private" | "business" };

export type CustomerRegisterGroupConfigResponse = CustomerGroup;

export interface CustomerRegistrationConfirmRequest {
  hash: string;
  em: string;
}
