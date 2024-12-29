import { StateMachineState } from "#types/storeApi/StateMachineState";
import { Order } from "#types/storeApi/order/Order";
import { Criteria } from "#types/storeApi/query/Criteria";
import { EntitySearchResult } from "#types/storeApi/EntitySearchResult";

export type OrderCancelRequest = { orderId: string };
export type OrderCancelResponse = StateMachineState;

export type OrderDownloadFileResponse = Blob;

export type OrderFromCartRequest = {
  customerComment?: string;
  affiliateCode?: string;
  campaignCode?: string;
};
export type OrderFromCartResponse = Order;

export type OrderListRequest = Criteria & { checkPromotion?: boolean };
export type OrderListResponse = {
  orders: Array<Order> & EntitySearchResult;
  paymentChangeable: Record<string, boolean>;
};

export type OrderUpdatePaymentMethodRequest = {
  paymentMethodId: string;
  orderId: string;
};
export type OrderUpdatePaymentMethodResponse = { success?: boolean };
