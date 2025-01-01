import { StateMachineState } from "#types/api/store/StateMachineState";
import { Order } from "#types/api/store/order/Order";
import { Criteria } from "#types/api/global/query/Criteria";
import { EntitySearchResult } from "#types/api/store/EntitySearchResult";

export interface OrderPaymentInitiateRequest {
  orderId: string;
  finishUrl?: string;
  errorUrl?: string;
}
export interface OrderPaymentInitiateResponse {
  redirectUrl: string;
}

export interface OrderCancelRequest {
  orderId: string;
}
export type OrderCancelResponse = StateMachineState;

export type OrderDownloadFileResponse = Blob;

export interface OrderFromCartRequest {
  customerComment?: string;
  affiliateCode?: string;
  campaignCode?: string;
}
export type OrderFromCartResponse = Order;

export type OrderListRequest = Criteria & { checkPromotion?: boolean };
export interface OrderListResponse {
  orders: Array<Order> & EntitySearchResult;
  paymentChangeable: Record<string, boolean>;
}

export interface OrderUpdatePaymentMethodRequest {
  paymentMethodId: string;
  orderId: string;
}
export interface OrderUpdatePaymentMethodResponse {
  success?: boolean;
}
