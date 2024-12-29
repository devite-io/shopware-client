import { SalesChannelContext } from "../storeApi/salesChannel/SalesChannelContext";

export type ContextGetRequest = { id: string };
export type ContextGetResponse = SalesChannelContext;

export type ContextUpdateRequest = {
  currencyId?: string;
  languageId?: string;
  billingAddressId?: string;
  shippingAddressId?: string;
  paymentMethodId?: string;
  shippingMethodId?: string;
  countryId?: string;
  countryStateId?: string;
};
export type ContextUpdateResponse = {
  redirectUrl?: string;
};
