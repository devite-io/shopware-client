import { Criteria, Customer } from "../storeApi";

export type AccountEmailChangeRequest = {
  email: string;
  emailConfirmation: string;
  password: string;
};
export type AccountEmailChangeResponse = { success?: boolean };

export type AccountGetRequest = Criteria;
export type AccountGetResponse = Customer;

export type AccountLanguageChangeRequest = { language?: string };
export type AccountLanguageChangeResponse = { success?: boolean };

export type AccountNewsletterRecipientListRequest = Criteria;
export type AccountNewsletterRecipientListResponse = {
  apiAlias: "account_newsletter_recipient";
  status: "undefined" | "notSet" | "direct" | "optIn" | "optOut";
};

export type AccountPasswordChangeRequest = {
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
};
export type AccountPasswordChangeResponse = { success?: boolean };

export type AccountPasswordRecoveryMailRequest = {
  email: string;
  storefrontUrl: string;
};
export type AccountPasswordRecoveryMailResponse = { success?: boolean };

export type AccountPasswordRecoveryRequest = {
  hash: string;
  newPassword: string;
  newPasswordConfirm: string;
};
export type AccountPasswordRecoveryResponse = { success?: boolean };

export type AccountPaymentMethodChangeResponse = { success?: boolean };

export type AccountRecoveryExpiryCheckRequest = { hash: string };
export type AccountRecoveryExpiryCheckResponse = {
  apiAlias?: "array_struct";
  data?: { isExpired: boolean };
};

export type AccountUpdateRequest = {
  salutationId?: string;
  title?: string;
  firstName: string;
  lastName: string;
  company?: string;
  birthdayDay?: number;
  birthdayMonth?: number;
  birthdayYear?: number;
};
export type AccountUpdateResponse = { success?: boolean };
