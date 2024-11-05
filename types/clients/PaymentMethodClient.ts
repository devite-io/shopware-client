import { Criteria, PaymentMethod } from "../storeApi";

export type PaymentMethodListRequest = Criteria & { onlyAvailable?: boolean };
export type PaymentMethodListResponse = {
  total?: number;
  aggregations?: object;
  elements?: Array<PaymentMethod>;
};
