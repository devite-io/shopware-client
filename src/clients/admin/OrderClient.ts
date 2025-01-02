import JsonPayload from "#payloads/JsonPayload";
import BinaryPayload from "#payloads/BinaryPayload";
import Client from "#clients/Client";
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

    throw new Error(
      `Failed to download merged document: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create documents: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to download merged document: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Order Management **/

  /**
   * @throws {Error} if the request failed
   */
  public async refundTransactionCapture(refundId: string): Promise<void> {
    const response = await this.post(`/_action/order_transaction_capture_refund/${refundId}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to refund transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to transition transaction state: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to transition state: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to transition delivery state: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Orders **/

  /**
   * @throws {Error} if the request failed
   */
  public async getOrders(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<OrderListResponse> {
    const response = await this.get(`/order`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderListResponse;

    throw new Error(`Failed to fetch order list: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to create order: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for orders: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getOrder(id: string): Promise<OrderSingleResponse> {
    const response = await this.get(`/order/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderSingleResponse;

    throw new Error(`Failed to fetch order: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteOrder(id: string): Promise<void> {
    const response = await this.delete(`/order/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete order: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update order: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to aggregate order: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Addresses **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAddresses(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<AddressListResponse> {
    const response = await this.get(`/order-address`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressListResponse;

    throw new Error(
      `Failed to fetch address list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create address: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for addresses: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAddress(id: string): Promise<AddressSingleResponse> {
    const response = await this.get(`/order-address/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AddressSingleResponse;

    throw new Error(`Failed to fetch address: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAddress(id: string): Promise<void> {
    const response = await this.delete(`/order-address/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete address: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update address: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate address: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Customers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomers(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CustomerListResponse> {
    const response = await this.get(`/order-customer`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerListResponse;

    throw new Error(
      `Failed to fetch customer list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create customer: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for customers: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCustomer(id: string): Promise<CustomerSingleResponse> {
    const response = await this.get(`/order-customer/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CustomerSingleResponse;

    throw new Error(`Failed to fetch customer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCustomer(id: string): Promise<void> {
    const response = await this.delete(`/order-customer/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete customer: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update customer: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate customer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Deliveries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DeliveryListResponse> {
    const response = await this.get(`/order-delivery`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryListResponse;

    throw new Error(
      `Failed to fetch delivery list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create delivery: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for deliveries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDelivery(id: string): Promise<DeliverySingleResponse> {
    const response = await this.get(`/order-delivery/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliverySingleResponse;

    throw new Error(`Failed to fetch delivery: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDelivery(id: string): Promise<void> {
    const response = await this.delete(`/order-delivery/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete delivery: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update delivery: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate delivery: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Delivery Positions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryPositions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DeliveryPositionListResponse> {
    const response = await this.get(`/order-delivery-position`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionListResponse;

    throw new Error(
      `Failed to fetch delivery position list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create delivery position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for delivery positions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryPosition(id: string): Promise<DeliveryPositionSingleResponse> {
    const response = await this.get(`/order-delivery-position/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryPositionSingleResponse;

    throw new Error(
      `Failed to fetch delivery position: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDeliveryPosition(id: string): Promise<void> {
    const response = await this.delete(`/order-delivery-position/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete delivery position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update delivery position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate delivery position: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Line Items **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItems(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<LineItemListResponse> {
    const response = await this.get(`/order-line-item`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemListResponse;

    throw new Error(
      `Failed to fetch line item list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create line item: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for line items: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItem(id: string): Promise<LineItemSingleResponse> {
    const response = await this.get(`/order-line-item/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemSingleResponse;

    throw new Error(`Failed to fetch line item: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLineItem(id: string): Promise<void> {
    const response = await this.delete(`/order-line-item/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete line item: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update line item: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate line item: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Line Item Downloads **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemDownloads(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<LineItemDownloadListResponse> {
    const response = await this.get(`/order-line-item-download`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadListResponse;

    throw new Error(
      `Failed to fetch line item download list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create line item download: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for line item downloads: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLineItemDownload(id: string): Promise<LineItemDownloadSingleResponse> {
    const response = await this.get(`/order-line-item-download/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LineItemDownloadSingleResponse;

    throw new Error(
      `Failed to fetch line item download: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLineItemDownload(id: string): Promise<void> {
    const response = await this.delete(`/order-line-item-download/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete line item download: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update line item download: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate line item download: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Transactions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TransactionListResponse> {
    const response = await this.get(`/order-transaction`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionListResponse;

    throw new Error(
      `Failed to fetch transaction list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create transaction: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for transactions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransaction(id: string): Promise<TransactionSingleResponse> {
    const response = await this.get(`/order-transaction/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionSingleResponse;

    throw new Error(
      `Failed to fetch transaction: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransaction(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete transaction: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update transaction: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate transaction: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Transaction Captures **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptures(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TransactionCaptureListResponse> {
    const response = await this.get(`/order-transaction-capture`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureListResponse;

    throw new Error(
      `Failed to fetch transaction capture list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for transaction captures: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCapture(id: string): Promise<TransactionCaptureSingleResponse> {
    const response = await this.get(`/order-transaction-capture/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureSingleResponse;

    throw new Error(
      `Failed to fetch transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCapture(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate transaction capture: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Transaction Capture Refunds **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefunds(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TransactionCaptureRefundListResponse> {
    const response = await this.get(`/order-transaction-capture-refund`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundListResponse;

    throw new Error(
      `Failed to fetch transaction capture refund list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create transaction capture refund: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for transaction capture refunds: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefund(
    id: string
  ): Promise<TransactionCaptureRefundSingleResponse> {
    const response = await this.get(`/order-transaction-capture-refund/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundSingleResponse;

    throw new Error(
      `Failed to fetch transaction capture refund: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCaptureRefund(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture-refund/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete transaction capture refund: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update transaction capture refund: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate transaction capture refund: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Transaction Capture Refund Positions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundPositions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TransactionCaptureRefundPositionListResponse> {
    const response = await this.get(`/order-transaction-capture-refund-position`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionListResponse;

    throw new Error(
      `Failed to fetch transaction capture refund position list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create transaction capture refund position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for transaction capture refund positions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransactionCaptureRefundPosition(
    id: string
  ): Promise<TransactionCaptureRefundPositionSingleResponse> {
    const response = await this.get(`/order-transaction-capture-refund-position/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransactionCaptureRefundPositionSingleResponse;

    throw new Error(
      `Failed to fetch transaction capture refund position: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransactionCaptureRefundPosition(id: string): Promise<void> {
    const response = await this.delete(`/order-transaction-capture-refund-position/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete transaction capture refund position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update transaction capture refund position: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate transaction capture refund position: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default OrderClient;
