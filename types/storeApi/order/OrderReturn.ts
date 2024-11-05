import { CalculatedPrice } from "../price";

export type OrderReturn = {
  id?: string;
  versionId?: string;
  orderId?: string;
  orderVersionId?: string;
  price?: CalculatedPrice;
  shippingCosts?: CalculatedPrice;
  stateId?: string;
  returnNumber?: string;
  requestedAt?: string;
  amountTotal?: number;
  amountNet?: number;
};
