import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  StateAggregationRequest,
  StateAggregationResponse,
  StateCreateRequest,
  StateCreateResponse,
  StateListResponse,
  StateListSearchRequest,
  StateListSearchResponse,
  StateMachineAggregationRequest,
  StateMachineAggregationResponse,
  StateMachineCreateRequest,
  StateMachineCreateResponse,
  StateMachineListResponse,
  StateMachineListSearchRequest,
  StateMachineListSearchResponse,
  StateMachineSingleResponse,
  StateMachineUpdateRequest,
  StateMachineUpdateResponse,
  StateSingleResponse,
  StateUpdateRequest,
  StateUpdateResponse,
  TransitionAggregationRequest,
  TransitionAggregationResponse,
  TransitionCreateRequest,
  TransitionCreateResponse,
  TransitionListResponse,
  TransitionListSearchRequest,
  TransitionListSearchResponse,
  TransitionSingleResponse,
  TransitionUpdateRequest,
  TransitionUpdateResponse
} from "#types/clients/admin/StateMachineClient";

class DeliveryTimeClient extends Client {
  /** State Machines **/

  /**
   * Requires `state-machine:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStateMachines(query?: Criteria): Promise<StateMachineListResponse> {
    const response = await this.get(`/state-machine` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineListResponse;

    throw new ShopwareError("Failed to fetch state machine list", response);
  }

  /**
   * Requires `state-machine:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createStateMachine(
    request: StateMachineCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateMachineCreateResponse> {
    const response = await this.post(`/state-machine`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateMachineCreateResponse;

    throw new ShopwareError("Failed to create state machine", response);
  }

  /**
   * Requires `state-machine:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchStateMachines(
    request: StateMachineListSearchRequest
  ): Promise<StateMachineListSearchResponse> {
    const response = await this.post(`/search/state-machine`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineListSearchResponse;

    throw new ShopwareError("Failed to search for state machines", response);
  }

  /**
   * Requires `state-machine:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStateMachine(id: string, query?: Criteria): Promise<StateMachineSingleResponse> {
    const response = await this.get(`/state-machine/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineSingleResponse;

    throw new ShopwareError("Failed to fetch state machine", response);
  }

  /**
   * Requires `state-machine:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteStateMachine(id: string): Promise<void> {
    const response = await this.delete(`/state-machine/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete state machine", response);
  }

  /**
   * Requires `state-machine:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateStateMachine(
    id: string,
    request: StateMachineUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateMachineUpdateResponse> {
    const response = await this.patch(`/state-machine/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateMachineUpdateResponse;

    throw new ShopwareError("Failed to update state machine", response);
  }

  /**
   * Requires `state-machine:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStateMachineAggregate(
    request: StateMachineAggregationRequest
  ): Promise<StateMachineAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineAggregationResponse;

    throw new ShopwareError("Failed to aggregate state machine", response);
  }

  /** States **/

  /**
   * Requires `state-machine-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStates(query?: Criteria): Promise<StateListResponse> {
    const response = await this.get(`/state-machine-state` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListResponse;

    throw new ShopwareError("Failed to fetch state list", response);
  }

  /**
   * Requires `state-machine-state:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createState(
    request: StateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateCreateResponse> {
    const response = await this.post(`/state-machine-state`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateCreateResponse;

    throw new ShopwareError("Failed to create state", response);
  }

  /**
   * Requires `state-machine-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchStates(request: StateListSearchRequest): Promise<StateListSearchResponse> {
    const response = await this.post(`/search/state-machine-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListSearchResponse;

    throw new ShopwareError("Failed to search for states", response);
  }

  /**
   * Requires `state-machine-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getState(id: string, query?: Criteria): Promise<StateSingleResponse> {
    const response = await this.get(`/state-machine-state/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateSingleResponse;

    throw new ShopwareError("Failed to fetch state", response);
  }

  /**
   * Requires `state-machine-state:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteState(id: string): Promise<void> {
    const response = await this.delete(`/state-machine-state/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete state", response);
  }

  /**
   * Requires `state-machine-state:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateState(
    id: string,
    request: StateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateUpdateResponse> {
    const response = await this.patch(`/state-machine-state/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateUpdateResponse;

    throw new ShopwareError("Failed to update state", response);
  }

  /**
   * Requires `state-machine-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStateAggregate(
    request: StateAggregationRequest
  ): Promise<StateAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateAggregationResponse;

    throw new ShopwareError("Failed to aggregate state", response);
  }

  /** Transitions **/

  /**
   * Requires `state-machine-transition:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTransitions(query?: Criteria): Promise<TransitionListResponse> {
    const response = await this.get(`/state-machine-transition` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionListResponse;

    throw new ShopwareError("Failed to fetch transition list", response);
  }

  /**
   * Requires `state-machine-transition:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createTransition(
    request: TransitionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransitionCreateResponse> {
    const response = await this.post(`/state-machine-transition`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TransitionCreateResponse;

    throw new ShopwareError("Failed to create transition", response);
  }

  /**
   * Requires `state-machine-transition:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTransitions(
    request: TransitionListSearchRequest
  ): Promise<TransitionListSearchResponse> {
    const response = await this.post(`/search/state-machine-transition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionListSearchResponse;

    throw new ShopwareError("Failed to search for transitions", response);
  }

  /**
   * Requires `state-machine-transition:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTransition(id: string, query?: Criteria): Promise<TransitionSingleResponse> {
    const response = await this.get(`/state-machine-transition/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionSingleResponse;

    throw new ShopwareError("Failed to fetch transition", response);
  }

  /**
   * Requires `state-machine-transition:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteTransition(id: string): Promise<void> {
    const response = await this.delete(`/state-machine-transition/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete transition", response);
  }

  /**
   * Requires `state-machine-transition:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateTransition(
    id: string,
    request: TransitionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransitionUpdateResponse> {
    const response = await this.patch(`/state-machine-transition/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TransitionUpdateResponse;

    throw new ShopwareError("Failed to update transition", response);
  }

  /**
   * Requires `state-machine-transition:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTransitionAggregate(
    request: TransitionAggregationRequest
  ): Promise<TransitionAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine-transition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionAggregationResponse;

    throw new ShopwareError("Failed to aggregate transition", response);
  }
}

export default DeliveryTimeClient;
