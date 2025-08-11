import JsonPayload from "#payloads/JsonPayload";
import BinaryPayload from "#payloads/BinaryPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  DocumentListCreateRequest,
  DocumentListCreateResponse,
  DownloadMergedRequest,
  DownloadMergedResponse,
  StateTransitionRequest,
  StateTransitionResponse
} from "#types/clients/admin/OrderClient";
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
import createRestEndpoint from "../../utils/createRestEndpoint";

class OrderClient extends Client {
  /** Document Management **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async downloadMerged(request: DownloadMergedRequest): Promise<DownloadMergedResponse> {
    const response = await this.post(`/_action/order/document/download`, {
      headers: { Accept: "application/octet-stream" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DownloadMergedResponse;

    throw new ShopwareError("Failed to download merged documents", response);
  }

  /**
   * @param documentTypeName - The `technicalName` of the document type.
   * @param request
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createDocuments(
    documentTypeName: string,
    request: DocumentListCreateRequest
  ): Promise<DocumentListCreateResponse> {
    const response = await this.post(`/_action/order/document/${documentTypeName}/create`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DocumentListCreateResponse;

    throw new ShopwareError("Failed to create documents", response);
  }

  /** Order Management **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async refundTransactionCapture(refundId: string): Promise<void> {
    const response = await this.post(`/_action/order_transaction_capture_refund/${refundId}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to refund transaction capture", response);
  }

  /**
   * @param transactionId
   * @param transition - The `action_name` of the StateMachineTransition.
   * @param request
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async transitionTransactionState(
    transactionId: string,
    transition: string,
    request?: StateTransitionRequest
  ): Promise<StateTransitionResponse> {
    const response = await this.post(
      `/_action/order_transaction/${transactionId}/state/${transition}`,
      {
        headers: { Accept: "application/json" },
        body: new JsonPayload(request)
      }
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateTransitionResponse;

    throw new ShopwareError("Failed to transition transaction state", response);
  }

  /**
   * @param orderId
   * @param transition - The `action_name` of the StateMachineTransition.
   * @param request
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async transitionState(
    orderId: string,
    transition: string,
    request: StateTransitionRequest
  ) {
    const response = await this.post(`/_action/order/${orderId}/state/${transition}`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateTransitionResponse;

    throw new ShopwareError("Failed to transition state", response);
  }

  /**
   * @param deliveryId
   * @param transition - The `action_name` of the StateMachineTransition.
   * @param request
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async transitionDeliveryState(
    deliveryId: string,
    transition: string,
    request: StateTransitionRequest
  ) {
    const response = await this.post(`/_action/order_delivery/${deliveryId}/state/${transition}`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateTransitionResponse;

    throw new ShopwareError("Failed to transition delivery state", response);
  }

  /** Rest Endpoints **/

  public orders = createRestEndpoint<Order>(this, "order", "order");
  public addresses = createRestEndpoint<OrderAddress>(this, "order-address", "order address");
  public customers = createRestEndpoint<OrderCustomer>(this, "order-customer", "order customer");
  public deliveries = createRestEndpoint<OrderDelivery>(this, "order-delivery", "order delivery");
  public deliveryPositions = createRestEndpoint<OrderDeliveryPosition>(
    this,
    "order-delivery-position",
    "order delivery position"
  );
  public lineItems = createRestEndpoint<OrderLineItem>(this, "order-line-item", "order line item");
  public lineItemDownloads = createRestEndpoint<OrderLineItemDownload>(
    this,
    "order-line-item-download",
    "order line item download"
  );
  public transactions = createRestEndpoint<OrderTransaction>(
    this,
    "order-transaction",
    "order transaction"
  );
  public transactionCaptures = createRestEndpoint<OrderTransactionCapture>(
    this,
    "order-transaction-capture",
    "order transaction capture"
  );
  public transactionCaptureRefunds = createRestEndpoint<OrderTransactionCaptureRefund>(
    this,
    "order-transaction-capture-refund",
    "order transaction capture refund"
  );
  public transactionCaptureRefundPositions =
    createRestEndpoint<OrderTransactionCaptureRefundPosition>(
      this,
      "order-transaction-capture-refund-position",
      "order transaction capture refund position"
    );
}

export default OrderClient;
