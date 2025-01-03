import JsonPayload from "#payloads/JsonPayload";
import BinaryPayload from "#payloads/BinaryPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  AddressAggregationRequest,
  AddressAggregationResponse,
  AddressCreateRequest,
  AddressCreateResponse,
  AddressListResponse,
  AddressListSearchRequest,
  AddressListSearchResponse,
  AddressSingleResponse,
  AddressUpdateRequest,
  AddressUpdateResponse,
  CustomerAggregationRequest,
  CustomerAggregationResponse,
  CustomerCreateRequest,
  CustomerCreateResponse,
  CustomerListResponse,
  CustomerListSearchRequest,
  CustomerListSearchResponse,
  CustomerSingleResponse,
  CustomerUpdateRequest,
  CustomerUpdateResponse,
  DeliveryAggregationRequest,
  DeliveryAggregationResponse,
  DeliveryCreateRequest,
  DeliveryCreateResponse,
  DeliveryListResponse,
  DeliveryListSearchRequest,
  DeliveryListSearchResponse,
  DeliveryPositionAggregationRequest,
  DeliveryPositionAggregationResponse,
  DeliveryPositionCreateRequest,
  DeliveryPositionCreateResponse,
  DeliveryPositionListResponse,
  DeliveryPositionListSearchRequest,
  DeliveryPositionListSearchResponse,
  DeliveryPositionSingleResponse,
  DeliveryPositionUpdateRequest,
  DeliveryPositionUpdateResponse,
  DeliverySingleResponse,
  DeliveryUpdateRequest,
  DeliveryUpdateResponse,
  DocumentListCreateRequest,
  DownloadMergedRequest,
  DownloadMergedResponse,
  DownloadResponse,
  LineItemAggregationRequest,
  LineItemAggregationResponse,
  LineItemCreateRequest,
  LineItemCreateResponse,
  LineItemDownloadAggregationRequest,
  LineItemDownloadAggregationResponse,
  LineItemDownloadCreateRequest,
  LineItemDownloadCreateResponse,
  LineItemDownloadListResponse,
  LineItemDownloadListSearchRequest,
  LineItemDownloadListSearchResponse,
  LineItemDownloadSingleResponse,
  LineItemDownloadUpdateRequest,
  LineItemDownloadUpdateResponse,
  LineItemListResponse,
  LineItemListSearchRequest,
  LineItemListSearchResponse,
  LineItemSingleResponse,
  LineItemUpdateRequest,
  LineItemUpdateResponse,
  OrderAggregationRequest,
  OrderAggregationResponse,
  OrderCreateRequest,
  OrderCreateResponse,
  OrderListResponse,
  OrderListSearchRequest,
  OrderListSearchResponse,
  OrderSingleResponse,
  OrderUpdateRequest,
  OrderUpdateResponse,
  StateTransitionRequest,
  StateTransitionResponse,
  TransactionAggregationRequest,
  TransactionAggregationResponse,
  TransactionCaptureAggregationRequest,
  TransactionCaptureAggregationResponse,
  TransactionCaptureCreateRequest,
  TransactionCaptureCreateResponse,
  TransactionCaptureListResponse,
  TransactionCaptureListSearchRequest,
  TransactionCaptureListSearchResponse,
  TransactionCaptureRefundAggregationRequest,
  TransactionCaptureRefundAggregationResponse,
  TransactionCaptureRefundCreateRequest,
  TransactionCaptureRefundCreateResponse,
  TransactionCaptureRefundListResponse,
  TransactionCaptureRefundListSearchRequest,
  TransactionCaptureRefundListSearchResponse,
  TransactionCaptureRefundPositionAggregationRequest,
  TransactionCaptureRefundPositionAggregationResponse,
  TransactionCaptureRefundPositionCreateRequest,
  TransactionCaptureRefundPositionCreateResponse,
  TransactionCaptureRefundPositionListResponse,
  TransactionCaptureRefundPositionListSearchRequest,
  TransactionCaptureRefundPositionListSearchResponse,
  TransactionCaptureRefundPositionSingleResponse,
  TransactionCaptureRefundPositionUpdateRequest,
  TransactionCaptureRefundPositionUpdateResponse,
  TransactionCaptureRefundSingleResponse,
  TransactionCaptureRefundUpdateRequest,
  TransactionCaptureRefundUpdateResponse,
  TransactionCaptureSingleResponse,
  TransactionCaptureUpdateRequest,
  TransactionCaptureUpdateResponse,
  TransactionCreateRequest,
  TransactionCreateResponse,
  TransactionListResponse,
  TransactionListSearchRequest,
  TransactionListSearchResponse,
  TransactionSingleResponse,
  TransactionUpdateRequest,
  TransactionUpdateResponse
} from "#types/clients/admin/OrderClient";

class OrderClient extends Client {
  /** Document Management **/

  /**
   * @throws {Error} if the request failed
   */
  public async downloadMerged(request: DownloadMergedRequest): Promise<DownloadMergedResponse> {
    const response = await this.post(`/_action/order/document/download`, {
      headers: { Accept: "application/octet-stream" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DownloadMergedResponse;

    throw new ShopwareError("Failed to download merged document", response);
  }

  /**
   * @param documentTypeName - The `technicalName` of the document type.
   * @param request
   * @throws {Error} if the request failed
   */
  public async createDocuments(
    documentTypeName: string,
    request: DocumentListCreateRequest
  ): Promise<void> {
    const response = await this.post(`/_action/order/document/${documentTypeName}/create`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new ShopwareError("Failed to create documents", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async download(
    id: string,
    deepLinkCode: string,
    download?: boolean
  ): Promise<DownloadResponse> {
    const response = await this.get(`/_action/document/${id}/download/${deepLinkCode}`, {
      query: { download },
      headers: { Accept: "application/octet-stream" }
    });

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as DownloadResponse;

    throw new ShopwareError("Failed to download merged document", response);
  }

  /** Order Management **/

  /**
   * @throws {Error} if the request failed
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
   * @throws {Error} if the request failed
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
   * @throws {Error} if the request failed
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
   * @throws {Error} if the request failed
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

  /** Orders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getOrders(query?: Criteria): Promise<OrderListResponse> {
    const response = await this.get(`/order` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderListResponse;

    throw new ShopwareError("Failed to fetch order list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createOrder(
    request: OrderCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<OrderCreateResponse> {
    const response = await this.post(`/order`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderCreateResponse;

    throw new ShopwareError("Failed to create order", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchOrders(request: OrderListSearchRequest): Promise<OrderListSearchResponse> {
    const response = await this.get(`/search/order`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderListSearchResponse;

    throw new ShopwareError("Failed to search for orders", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getOrder(id: string, query?: Criteria): Promise<OrderSingleResponse> {
    const response = await this.get(`/order/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderSingleResponse;

    throw new ShopwareError("Failed to fetch order", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteOrder(id: string): Promise<void> {
    const response = await this.delete(`/order/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete order", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateOrder(
    id: string,
    request: OrderUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<OrderUpdateResponse> {
    const response = await this.patch(`/order/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderUpdateResponse;

    throw new ShopwareError("Failed to update order", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getOrderAggregate(
    request: OrderAggregationRequest
  ): Promise<OrderAggregationResponse> {
    const response = await this.post(`/aggregate/order`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderAggregationResponse;

    throw new ShopwareError("Failed to aggregate order", response);
  }

  /** Addresses **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAddresses(query?: Criteria): Promise<AddressListResponse> {
    const response = await this.get(`/order-address` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new ShopwareError("Failed to fetch address list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createAddress(
    request: AddressCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AddressCreateResponse> {
    const response = await this.post(`/order-address`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressCreateResponse;

    throw new ShopwareError("Failed to create address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAddresses(
    request: AddressListSearchRequest
  ): Promise<AddressListSearchResponse> {
    const response = await this.get(`/search/order-address`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListSearchResponse;

    throw new ShopwareError("Failed to search for addresses", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAddress(id: string, query?: Criteria): Promise<AddressSingleResponse> {
    const response = await this.get(`/order-address/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressSingleResponse;

    throw new ShopwareError("Failed to fetch address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAddress(id: string): Promise<void> {
    const response = await this.delete(`/order-address/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateAddress(
    id: string,
    request: AddressUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AddressUpdateResponse> {
    const response = await this.patch(`/order-address/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressUpdateResponse;

    throw new ShopwareError("Failed to update address", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAddressAggregate(
    request: AddressAggregationRequest
  ): Promise<AddressAggregationResponse> {
    const response = await this.post(`/aggregate/order-address`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressAggregationResponse;

    throw new ShopwareError("Failed to aggregate address", response);
  }

  /** Customers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomers(query?: Criteria): Promise<CustomerListResponse> {
    const response = await this.get(`/order-customer` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListResponse;

    throw new ShopwareError("Failed to fetch customer list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCustomer(
    request: CustomerCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomerCreateResponse> {
    const response = await this.post(`/order-customer`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerCreateResponse;

    throw new ShopwareError("Failed to create customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCustomers(
    request: CustomerListSearchRequest
  ): Promise<CustomerListSearchResponse> {
    const response = await this.get(`/search/order-customer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListSearchResponse;

    throw new ShopwareError("Failed to search for customers", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomer(id: string, query?: Criteria): Promise<CustomerSingleResponse> {
    const response = await this.get(`/order-customer/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerSingleResponse;

    throw new ShopwareError("Failed to fetch customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomer(id: string): Promise<void> {
    const response = await this.delete(`/order-customer/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCustomer(
    id: string,
    request: CustomerUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CustomerUpdateResponse> {
    const response = await this.patch(`/order-customer/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerUpdateResponse;

    throw new ShopwareError("Failed to update customer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomerAggregate(
    request: CustomerAggregationRequest
  ): Promise<CustomerAggregationResponse> {
    const response = await this.post(`/aggregate/order-customer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerAggregationResponse;

    throw new ShopwareError("Failed to aggregate customer", response);
  }

  /** Deliveries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveries(query?: Criteria): Promise<DeliveryListResponse> {
    const response = await this.get(`/order-delivery` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryListResponse;

    throw new ShopwareError("Failed to fetch delivery list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDelivery(
    request: DeliveryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryCreateResponse> {
    const response = await this.post(`/order-delivery`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryCreateResponse;

    throw new ShopwareError("Failed to create delivery", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDeliveries(
    request: DeliveryListSearchRequest
  ): Promise<DeliveryListSearchResponse> {
    const response = await this.get(`/search/order-delivery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryListSearchResponse;

    throw new ShopwareError("Failed to search for deliveries", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDelivery(id: string, query?: Criteria): Promise<DeliverySingleResponse> {
    const response = await this.get(`/order-delivery/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliverySingleResponse;

    throw new ShopwareError("Failed to fetch delivery", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDelivery(id: string): Promise<void> {
    const response = await this.delete(`/order-delivery/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete delivery", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDelivery(
    id: string,
    request: DeliveryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryUpdateResponse> {
    const response = await this.patch(`/order-delivery/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryUpdateResponse;

    throw new ShopwareError("Failed to update delivery", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryAggregate(
    request: DeliveryAggregationRequest
  ): Promise<DeliveryAggregationResponse> {
    const response = await this.post(`/aggregate/order-delivery`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryAggregationResponse;

    throw new ShopwareError("Failed to aggregate delivery", response);
  }

  /** Delivery Positions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryPositions(query?: Criteria): Promise<DeliveryPositionListResponse> {
    const response = await this.get(`/order-delivery-position` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionListResponse;

    throw new ShopwareError("Failed to fetch delivery position list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDeliveryPosition(
    request: DeliveryPositionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryPositionCreateResponse> {
    const response = await this.post(`/order-delivery-position`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionCreateResponse;

    throw new ShopwareError("Failed to create delivery position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDeliveryPositions(
    request: DeliveryPositionListSearchRequest
  ): Promise<DeliveryPositionListSearchResponse> {
    const response = await this.get(`/search/order-delivery-position`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionListSearchResponse;

    throw new ShopwareError("Failed to search for delivery positions", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryPosition(
    id: string,
    query?: Criteria
  ): Promise<DeliveryPositionSingleResponse> {
    const response = await this.get(`/order-delivery-position/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionSingleResponse;

    throw new ShopwareError("Failed to fetch delivery position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDeliveryPosition(id: string): Promise<void> {
    const response = await this.delete(`/order-delivery-position/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete delivery position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDeliveryPosition(
    id: string,
    request: DeliveryPositionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryPositionUpdateResponse> {
    const response = await this.patch(`/order-delivery-position/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionUpdateResponse;

    throw new ShopwareError("Failed to update delivery position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryPositionAggregate(
    request: DeliveryPositionAggregationRequest
  ): Promise<DeliveryPositionAggregationResponse> {
    const response = await this.post(`/aggregate/order-delivery-position`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionAggregationResponse;

    throw new ShopwareError("Failed to aggregate delivery position", response);
  }

  /** Line Items **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItems(query?: Criteria): Promise<LineItemListResponse> {
    const response = await this.get(`/order-line-item` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemListResponse;

    throw new ShopwareError("Failed to fetch line item list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLineItem(
    request: LineItemCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LineItemCreateResponse> {
    const response = await this.post(`/order-line-item`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemCreateResponse;

    throw new ShopwareError("Failed to create line item", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLineItems(
    request: LineItemListSearchRequest
  ): Promise<LineItemListSearchResponse> {
    const response = await this.get(`/search/order-line-item`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemListSearchResponse;

    throw new ShopwareError("Failed to search for line items", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItem(id: string, query?: Criteria): Promise<LineItemSingleResponse> {
    const response = await this.get(`/order-line-item/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemSingleResponse;

    throw new ShopwareError("Failed to fetch line item", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLineItem(id: string): Promise<void> {
    const response = await this.delete(`/order-line-item/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete line item", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLineItem(
    id: string,
    request: LineItemUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LineItemUpdateResponse> {
    const response = await this.patch(`/order-line-item/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemUpdateResponse;

    throw new ShopwareError("Failed to update line item", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemAggregate(
    request: LineItemAggregationRequest
  ): Promise<LineItemAggregationResponse> {
    const response = await this.post(`/aggregate/order-line-item`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemAggregationResponse;

    throw new ShopwareError("Failed to aggregate line item", response);
  }

  /** Line Item Downloads **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemDownloads(query?: Criteria): Promise<LineItemDownloadListResponse> {
    const response = await this.get(`/order-line-item-download` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadListResponse;

    throw new ShopwareError("Failed to fetch line item download list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLineItemDownload(
    request: LineItemDownloadCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LineItemDownloadCreateResponse> {
    const response = await this.post(`/order-line-item-download`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadCreateResponse;

    throw new ShopwareError("Failed to create line item download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLineItemDownloads(
    request: LineItemDownloadListSearchRequest
  ): Promise<LineItemDownloadListSearchResponse> {
    const response = await this.get(`/search/order-line-item-download`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadListSearchResponse;

    throw new ShopwareError("Failed to search for line item downloads", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemDownload(
    id: string,
    query?: Criteria
  ): Promise<LineItemDownloadSingleResponse> {
    const response = await this.get(`/order-line-item-download/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadSingleResponse;

    throw new ShopwareError("Failed to fetch line item download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLineItemDownload(id: string): Promise<void> {
    const response = await this.delete(`/order-line-item-download/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete line item download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLineItemDownload(
    id: string,
    request: LineItemDownloadUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LineItemDownloadUpdateResponse> {
    const response = await this.patch(`/order-line-item-download/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadUpdateResponse;

    throw new ShopwareError("Failed to update line item download", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemDownloadAggregate(
    request: LineItemDownloadAggregationRequest
  ): Promise<LineItemDownloadAggregationResponse> {
    const response = await this.post(`/aggregate/order-line-item-download`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadAggregationResponse;

    throw new ShopwareError("Failed to aggregate line item download", response);
  }

  /** Transactions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactions(query?: Criteria): Promise<TransactionListResponse> {
    const response = await this.get(`/order-transaction` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionListResponse;

    throw new ShopwareError("Failed to fetch transaction list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTransaction(
    request: TransactionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCreateResponse> {
    const response = await this.post(`/order-transaction`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCreateResponse;

    throw new ShopwareError("Failed to create transaction", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTransactions(
    request: TransactionListSearchRequest
  ): Promise<TransactionListSearchResponse> {
    const response = await this.get(`/search/order-transaction`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionListSearchResponse;

    throw new ShopwareError("Failed to search for transactions", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransaction(id: string, query?: Criteria): Promise<TransactionSingleResponse> {
    const response = await this.get(`/order-transaction/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionSingleResponse;

    throw new ShopwareError("Failed to fetch transaction", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransaction(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete transaction", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTransaction(
    id: string,
    request: TransactionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionUpdateResponse> {
    const response = await this.patch(`/order-transaction/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionUpdateResponse;

    throw new ShopwareError("Failed to update transaction", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionAggregate(
    request: TransactionAggregationRequest
  ): Promise<TransactionAggregationResponse> {
    const response = await this.post(`/aggregate/order-transaction`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionAggregationResponse;

    throw new ShopwareError("Failed to aggregate transaction", response);
  }

  /** Transaction Captures **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptures(query?: Criteria): Promise<TransactionCaptureListResponse> {
    const response = await this.get(`/order-transaction-capture` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureListResponse;

    throw new ShopwareError("Failed to fetch transaction capture list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTransactionCapture(
    request: TransactionCaptureCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureCreateResponse> {
    const response = await this.post(`/order-transaction-capture`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureCreateResponse;

    throw new ShopwareError("Failed to create transaction capture", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTransactionCaptures(
    request: TransactionCaptureListSearchRequest
  ): Promise<TransactionCaptureListSearchResponse> {
    const response = await this.get(`/search/order-transaction-capture`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureListSearchResponse;

    throw new ShopwareError("Failed to search for transaction captures", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCapture(
    id: string,
    query?: Criteria
  ): Promise<TransactionCaptureSingleResponse> {
    const response = await this.get(`/order-transaction-capture/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureSingleResponse;

    throw new ShopwareError("Failed to fetch transaction capture", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCapture(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete transaction capture", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTransactionCapture(
    id: string,
    request: TransactionCaptureUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureUpdateResponse> {
    const response = await this.patch(`/order-transaction-capture/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureUpdateResponse;

    throw new ShopwareError("Failed to update transaction capture", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureAggregate(
    request: TransactionCaptureAggregationRequest
  ): Promise<TransactionCaptureAggregationResponse> {
    const response = await this.post(`/aggregate/order-transaction-capture`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureAggregationResponse;

    throw new ShopwareError("Failed to aggregate transaction capture", response);
  }

  /** Transaction Capture Refunds **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefunds(
    query?: Criteria
  ): Promise<TransactionCaptureRefundListResponse> {
    const response = await this.get(`/order-transaction-capture-refund` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundListResponse;

    throw new ShopwareError("Failed to fetch transaction capture refund list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTransactionCaptureRefund(
    request: TransactionCaptureRefundCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureRefundCreateResponse> {
    const response = await this.post(`/order-transaction-capture-refund`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundCreateResponse;

    throw new ShopwareError("Failed to create transaction capture refund", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTransactionCaptureRefunds(
    request: TransactionCaptureRefundListSearchRequest
  ): Promise<TransactionCaptureRefundListSearchResponse> {
    const response = await this.get(`/search/order-transaction-capture-refund`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundListSearchResponse;

    throw new ShopwareError("Failed to search for transaction capture refunds", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefund(
    id: string,
    query?: Criteria
  ): Promise<TransactionCaptureRefundSingleResponse> {
    const response = await this.get(`/order-transaction-capture-refund/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundSingleResponse;

    throw new ShopwareError("Failed to fetch transaction capture refund", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCaptureRefund(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture-refund/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete transaction capture refund", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTransactionCaptureRefund(
    id: string,
    request: TransactionCaptureRefundUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureRefundUpdateResponse> {
    const response = await this.patch(`/order-transaction-capture-refund/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundUpdateResponse;

    throw new ShopwareError("Failed to update transaction capture refund", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundAggregate(
    request: TransactionCaptureRefundAggregationRequest
  ): Promise<TransactionCaptureRefundAggregationResponse> {
    const response = await this.post(`/aggregate/order-transaction-capture-refund`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundAggregationResponse;

    throw new ShopwareError("Failed to aggregate transaction capture refund", response);
  }

  /** Transaction Capture Refund Positions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundPositions(
    query?: Criteria
  ): Promise<TransactionCaptureRefundPositionListResponse> {
    const response = await this.get(
      `/order-transaction-capture-refund-position` + buildQuery(query),
      {
        headers: { Accept: "application/json" }
      }
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionListResponse;

    throw new ShopwareError("Failed to fetch transaction capture refund position list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTransactionCaptureRefundPosition(
    request: TransactionCaptureRefundPositionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureRefundPositionCreateResponse> {
    const response = await this.post(`/order-transaction-capture-refund-position`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionCreateResponse;

    throw new ShopwareError("Failed to create transaction capture refund position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTransactionCaptureRefundPositions(
    request: TransactionCaptureRefundPositionListSearchRequest
  ): Promise<TransactionCaptureRefundPositionListSearchResponse> {
    const response = await this.get(`/search/order-transaction-capture-refund-position`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload)
        .data as TransactionCaptureRefundPositionListSearchResponse;

    throw new ShopwareError("Failed to search for transaction capture refund positions", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundPosition(
    id: string,
    query?: Criteria
  ): Promise<TransactionCaptureRefundPositionSingleResponse> {
    const response = await this.get(
      `/order-transaction-capture-refund-position/${id}` + buildQuery(query),
      {
        headers: { Accept: "application/json" }
      }
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionSingleResponse;

    throw new ShopwareError("Failed to fetch transaction capture refund position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCaptureRefundPosition(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture-refund-position/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete transaction capture refund position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTransactionCaptureRefundPosition(
    id: string,
    request: TransactionCaptureRefundPositionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransactionCaptureRefundPositionUpdateResponse> {
    const response = await this.patch(`/order-transaction-capture-refund-position/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionUpdateResponse;

    throw new ShopwareError("Failed to update transaction capture refund position", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundPositionAggregate(
    request: TransactionCaptureRefundPositionAggregationRequest
  ): Promise<TransactionCaptureRefundPositionAggregationResponse> {
    const response = await this.post(`/aggregate/order-transaction-capture-refund-position`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload)
        .data as TransactionCaptureRefundPositionAggregationResponse;

    throw new ShopwareError("Failed to aggregate transaction capture refund position", response);
  }
}

export default OrderClient;
