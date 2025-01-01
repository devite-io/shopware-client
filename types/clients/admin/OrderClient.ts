import { ShopwareDocumentBaseConfig } from "#types/api/admin/document/baseConfig/ShopwareDocumentBaseConfig";
import { StateMachineTransition } from "#types/api/admin/stateMachine/StateMachineTransition";
import { Order } from "#types/api/admin/order/Order";
import { OrderAddress } from "#types/api/admin/order/OrderAddress";
import { OrderCustomer } from "#types/api/admin/order/OrderCustomer";
import { OrderDelivery } from "#types/api/admin/order/delivery/OrderDelivery";
import { OrderDeliveryPosition } from "#types/api/admin/order/delivery/OrderDeliveryPosition";
import { OrderLineItem } from "#types/api/admin/order/lineItem/OrderLineItem";
import { OrderLineItemDownload } from "#types/api/admin/order/lineItem/OrderLineItemDownload";
import { OrderTransaction } from "#types/api/admin/order/transaction/OrderTransaction";
import { OrderTransactionCapture } from "#types/api/admin/order/transaction/capture/OrderTransactionCapture";
import { OrderTransactionCaptureRefund } from "#types/api/admin/order/transaction/capture/OrderTransactionCaptureRefund";
import { OrderTransactionCaptureRefundPosition } from "#types/api/admin/order/transaction/capture/OrderTransactionCaptureRefundPosition";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Document Management **/

export interface DownloadMergedRequest {
  documentIds?: Array<string>;
}
export type DownloadMergedResponse = Blob;

export type DocumentListCreateRequest = Array<{
  orderId: string;
  type: string;
  fileType?: string;
  static: boolean;
  referencedDocumentId?: string;
  config?: ShopwareDocumentBaseConfig;
}>;

export type DownloadResponse = Blob;

/** Order Management **/

export interface StateTransitionRequest {
  sendMail?: boolean;
  documentIds?: Array<string>;
  mediaIds?: Array<string>;
  /** @default "stateId" */
  stateFieldName?: string;
}
export type StateTransitionResponse = StateMachineTransition;

/** Orders **/

export interface OrderListResponse {
  total?: number;
  data?: Array<Order>;
}

export type OrderCreateRequest = Order;
export type OrderCreateResponse = { data: Order };

export type OrderListSearchRequest = Criteria;
export interface OrderListSearchResponse {
  total?: number;
  data?: Array<Order>;
}

export interface OrderSingleResponse {
  data: Order;
}

export type OrderUpdateRequest = Order;
export type OrderUpdateResponse = { data: Order };

export interface OrderAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface OrderAggregationResponse {
  total?: number;
  data?: Array<Order>;
}

/** Addresses **/

export interface AddressListResponse {
  total?: number;
  data?: Array<OrderAddress>;
}

export type AddressCreateRequest = OrderAddress;
export type AddressCreateResponse = { data: OrderAddress };

export type AddressListSearchRequest = Criteria;
export interface AddressListSearchResponse {
  total?: number;
  data?: Array<OrderAddress>;
}

export interface AddressSingleResponse {
  data: OrderAddress;
}

export type AddressUpdateRequest = OrderAddress;
export type AddressUpdateResponse = { data: OrderAddress };

export interface AddressAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AddressAggregationResponse {
  total?: number;
  data?: Array<OrderAddress>;
}

/** Customers **/

export interface CustomerListResponse {
  total?: number;
  data?: Array<OrderCustomer>;
}

export type CustomerCreateRequest = OrderCustomer;
export type CustomerCreateResponse = { data: OrderCustomer };

export type CustomerListSearchRequest = Criteria;
export interface CustomerListSearchResponse {
  total?: number;
  data?: Array<OrderCustomer>;
}

export interface CustomerSingleResponse {
  data: OrderCustomer;
}

export type CustomerUpdateRequest = OrderCustomer;
export type CustomerUpdateResponse = { data: OrderCustomer };

export interface CustomerAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CustomerAggregationResponse {
  total?: number;
  data?: Array<OrderCustomer>;
}

/** Deliveries **/

export interface DeliveryListResponse {
  total?: number;
  data?: Array<OrderDelivery>;
}

export type DeliveryCreateRequest = OrderDelivery;
export type DeliveryCreateResponse = { data: OrderDelivery };

export type DeliveryListSearchRequest = Criteria;
export interface DeliveryListSearchResponse {
  total?: number;
  data?: Array<OrderDelivery>;
}

export interface DeliverySingleResponse {
  data: OrderDelivery;
}

export type DeliveryUpdateRequest = OrderDelivery;
export type DeliveryUpdateResponse = { data: OrderDelivery };

export interface DeliveryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DeliveryAggregationResponse {
  total?: number;
  data?: Array<OrderDelivery>;
}

/** Delivery Positions **/

export interface DeliveryPositionListResponse {
  total?: number;
  data?: Array<OrderDeliveryPosition>;
}

export type DeliveryPositionCreateRequest = OrderDeliveryPosition;
export type DeliveryPositionCreateResponse = { data: OrderDeliveryPosition };

export type DeliveryPositionListSearchRequest = Criteria;
export interface DeliveryPositionListSearchResponse {
  total?: number;
  data?: Array<OrderDeliveryPosition>;
}

export interface DeliveryPositionSingleResponse {
  data: OrderDeliveryPosition;
}

export type DeliveryPositionUpdateRequest = OrderDeliveryPosition;
export type DeliveryPositionUpdateResponse = { data: OrderDeliveryPosition };

export interface DeliveryPositionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DeliveryPositionAggregationResponse {
  total?: number;
  data?: Array<OrderDeliveryPosition>;
}

/** Line Items **/

export interface LineItemListResponse {
  total?: number;
  data?: Array<OrderLineItem>;
}

export type LineItemCreateRequest = OrderLineItem;
export type LineItemCreateResponse = { data: OrderLineItem };

export type LineItemListSearchRequest = Criteria;
export interface LineItemListSearchResponse {
  total?: number;
  data?: Array<OrderLineItem>;
}

export interface LineItemSingleResponse {
  data: OrderLineItem;
}

export type LineItemUpdateRequest = OrderLineItem;
export type LineItemUpdateResponse = { data: OrderLineItem };

export interface LineItemAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LineItemAggregationResponse {
  total?: number;
  data?: Array<OrderLineItem>;
}

/** Line Item Downloads **/

export interface LineItemDownloadListResponse {
  total?: number;
  data?: Array<OrderLineItemDownload>;
}

export type LineItemDownloadCreateRequest = OrderLineItemDownload;
export type LineItemDownloadCreateResponse = { data: OrderLineItemDownload };

export type LineItemDownloadListSearchRequest = Criteria;
export interface LineItemDownloadListSearchResponse {
  total?: number;
  data?: Array<OrderLineItemDownload>;
}

export interface LineItemDownloadSingleResponse {
  data: OrderLineItemDownload;
}

export type LineItemDownloadUpdateRequest = OrderLineItemDownload;
export type LineItemDownloadUpdateResponse = { data: OrderLineItemDownload };

export interface LineItemDownloadAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LineItemDownloadAggregationResponse {
  total?: number;
  data?: Array<OrderLineItemDownload>;
}

/** Transactions **/

export interface TransactionListResponse {
  total?: number;
  data?: Array<OrderTransaction>;
}

export type TransactionCreateRequest = OrderTransaction;
export type TransactionCreateResponse = { data: OrderTransaction };

export type TransactionListSearchRequest = Criteria;
export interface TransactionListSearchResponse {
  total?: number;
  data?: Array<OrderTransaction>;
}

export interface TransactionSingleResponse {
  data: OrderTransaction;
}

export type TransactionUpdateRequest = OrderTransaction;
export type TransactionUpdateResponse = { data: OrderTransaction };

export interface TransactionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TransactionAggregationResponse {
  total?: number;
  data?: Array<OrderTransaction>;
}

/** Transaction Captures **/

export interface TransactionCaptureListResponse {
  total?: number;
  data?: Array<OrderTransactionCapture>;
}

export type TransactionCaptureCreateRequest = OrderTransactionCapture;
export type TransactionCaptureCreateResponse = { data: OrderTransactionCapture };

export type TransactionCaptureListSearchRequest = Criteria;
export interface TransactionCaptureListSearchResponse {
  total?: number;
  data?: Array<OrderTransactionCapture>;
}

export interface TransactionCaptureSingleResponse {
  data: OrderTransactionCapture;
}

export type TransactionCaptureUpdateRequest = OrderTransactionCapture;
export type TransactionCaptureUpdateResponse = { data: OrderTransactionCapture };

export interface TransactionCaptureAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TransactionCaptureAggregationResponse {
  total?: number;
  data?: Array<OrderTransactionCapture>;
}

/** Transaction Capture Refunds **/

export interface TransactionCaptureRefundListResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefund>;
}

export type TransactionCaptureRefundCreateRequest = OrderTransactionCaptureRefund;
export type TransactionCaptureRefundCreateResponse = { data: OrderTransactionCaptureRefund };

export type TransactionCaptureRefundListSearchRequest = Criteria;
export interface TransactionCaptureRefundListSearchResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefund>;
}

export interface TransactionCaptureRefundSingleResponse {
  data: OrderTransactionCaptureRefund;
}

export type TransactionCaptureRefundUpdateRequest = OrderTransactionCaptureRefund;
export type TransactionCaptureRefundUpdateResponse = { data: OrderTransactionCaptureRefund };

export interface TransactionCaptureRefundAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TransactionCaptureRefundAggregationResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefund>;
}

/** Transaction Capture Refund Positions **/

export interface TransactionCaptureRefundPositionListResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefundPosition>;
}

export type TransactionCaptureRefundPositionCreateRequest = OrderTransactionCaptureRefundPosition;
export type TransactionCaptureRefundPositionCreateResponse = {
  data: OrderTransactionCaptureRefundPosition;
};

export type TransactionCaptureRefundPositionListSearchRequest = Criteria;
export interface TransactionCaptureRefundPositionListSearchResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefundPosition>;
}

export interface TransactionCaptureRefundPositionSingleResponse {
  data: OrderTransactionCaptureRefundPosition;
}

export type TransactionCaptureRefundPositionUpdateRequest = OrderTransactionCaptureRefundPosition;
export type TransactionCaptureRefundPositionUpdateResponse = {
  data: OrderTransactionCaptureRefundPosition;
};

export interface TransactionCaptureRefundPositionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TransactionCaptureRefundPositionAggregationResponse {
  total?: number;
  data?: Array<OrderTransactionCaptureRefundPosition>;
}
