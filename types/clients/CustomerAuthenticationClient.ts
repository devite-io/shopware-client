import { Customer, CustomerAddress, CustomerGroup } from "../storeApi";

export type CustomerLoginRequest = {
  username: string;
  password: string;
};
export type CustomerLoginResponse = { redirectUrl?: string };

export type CustomerLogoutResponse = { redirectUrl?: string };

export type CustomerRegisterRequest = {
  email: string;
  password: string;
  salutationId: string;
  firstName: string;
  lastName: string;
  acceptedDataProtection: boolean;
  storefrontUrl: string;
  billingAddress: CustomerAddress;
  shippingAddress?: CustomerAddress;
  accountType?: "private" | "business";
  guest?: boolean;
  birthdayDay?: number;
  birthdayMonth?: number;
  birthdayYear?: number;
  title?: string;
  affiliateCode?: string;
  campaignCode?: string;
};
export type CustomerRegisterResponse = Customer;

export type CustomerRegisterGroupConfigResponse = CustomerGroup;

export type CustomerRegistrationConfirmRequest = {
  hash: string;
  em: string;
};

export type CustomerLoginImitateRequest = {
  token: string;
  customerId: string;
  userId: string;
};
export type CustomerLoginImitateResponse = { redirectUrl?: string };
