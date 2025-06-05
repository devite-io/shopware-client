import Client from "../Client";
import { StateMachine } from "#types/api/admin/stateMachine/StateMachine";
import { StateMachineState } from "#types/api/admin/stateMachine/StateMachineState";
import { StateMachineTransition } from "#types/api/admin/stateMachine/StateMachineTransition";
import createRestEndpoint from "../../utils/createRestEndpoint";

class StateMachineClient extends Client {
  public stateMachines = createRestEndpoint<StateMachine>(this, "/state-machine", "state machine");
  public states = createRestEndpoint<StateMachineState>(
    this,
    "state-machine-state",
    "state machine state"
  );
  public transitions = createRestEndpoint<StateMachineTransition>(
    this,
    "state-machine-transition",
    "state machine transition"
  );
}

export default StateMachineClient;
