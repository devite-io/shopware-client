import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getStateMachines(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<StateMachineListResponse> {
    const response = await this.get(`/state-machine`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineListResponse;

    throw new Error(
      `Failed to fetch state machine list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createStateMachine(
    request: StateMachineCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateMachineCreateResponse> {
    const response = await this.post(`/state-machine`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineCreateResponse;

    throw new Error(
      `Failed to create state machine: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStateMachines(
    request: StateMachineListSearchRequest
  ): Promise<StateMachineListSearchResponse> {
    const response = await this.get(`/search/state-machine`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineListSearchResponse;

    throw new Error(
      `Failed to search for state machines: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStateMachine(id: string): Promise<StateMachineSingleResponse> {
    const response = await this.get(`/state-machine/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineSingleResponse;

    throw new Error(
      `Failed to fetch state machine: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteStateMachine(id: string): Promise<void> {
    const response = await this.delete(`/state-machine/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete state machine: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateStateMachine(
    id: string,
    request: StateMachineUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateMachineUpdateResponse> {
    const response = await this.patch(`/state-machine/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineUpdateResponse;

    throw new Error(
      `Failed to update state machine: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStateMachineAggregate(
    request: StateMachineAggregationRequest
  ): Promise<StateMachineAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateMachineAggregationResponse;

    throw new Error(
      `Failed to aggregate state machine: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** States **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStates(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<StateListResponse> {
    const response = await this.get(`/state-machine-state`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListResponse;

    throw new Error(`Failed to fetch state list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createState(
    request: StateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateCreateResponse> {
    const response = await this.post(`/state-machine-state`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateCreateResponse;

    throw new Error(`Failed to create state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStates(request: StateListSearchRequest): Promise<StateListSearchResponse> {
    const response = await this.get(`/search/state-machine-state`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListSearchResponse;

    throw new Error(
      `Failed to search for states: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getState(id: string): Promise<StateSingleResponse> {
    const response = await this.get(`/state-machine-state/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateSingleResponse;

    throw new Error(`Failed to fetch state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteState(id: string): Promise<void> {
    const response = await this.delete(`/state-machine-state/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateState(
    id: string,
    request: StateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateUpdateResponse> {
    const response = await this.patch(`/state-machine-state/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateUpdateResponse;

    throw new Error(`Failed to update state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStateAggregate(
    request: StateAggregationRequest
  ): Promise<StateAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine-state`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateAggregationResponse;

    throw new Error(`Failed to aggregate state: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Transitions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTransitions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TransitionListResponse> {
    const response = await this.get(`/state-machine-transition`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionListResponse;

    throw new Error(
      `Failed to fetch transition list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTransition(
    request: TransitionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransitionCreateResponse> {
    const response = await this.post(`/state-machine-transition`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionCreateResponse;

    throw new Error(
      `Failed to create transition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTransitions(
    request: TransitionListSearchRequest
  ): Promise<TransitionListSearchResponse> {
    const response = await this.get(`/search/state-machine-transition`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionListSearchResponse;

    throw new Error(
      `Failed to search for transitions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransition(id: string): Promise<TransitionSingleResponse> {
    const response = await this.get(`/state-machine-transition/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionSingleResponse;

    throw new Error(`Failed to fetch transition: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTransition(id: string): Promise<void> {
    const response = await this.delete(`/state-machine-transition/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete transition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTransition(
    id: string,
    request: TransitionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TransitionUpdateResponse> {
    const response = await this.patch(`/state-machine-transition/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionUpdateResponse;

    throw new Error(
      `Failed to update transition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTransitionAggregate(
    request: TransitionAggregationRequest
  ): Promise<TransitionAggregationResponse> {
    const response = await this.post(`/aggregate/state-machine-transition`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TransitionAggregationResponse;

    throw new Error(
      `Failed to aggregate transition: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DeliveryTimeClient;
