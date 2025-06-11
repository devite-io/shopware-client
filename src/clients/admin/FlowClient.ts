import Client from "../Client";
import { Flow } from "#types/api/admin/flow/Flow";
import { FlowSequence } from "#types/api/admin/flow/FlowSequence";
import { FlowTemplate } from "#types/api/admin/flow/FlowTemplate";
import createRestEndpoint from "../../utils/createRestEndpoint";

class FlowClient extends Client {
  public flows = createRestEndpoint<Flow>(this, "flow", "flow");
  public sequences = createRestEndpoint<FlowSequence>(this, "flow-sequence", "flow sequence");
  public flowTemplates = createRestEndpoint<FlowTemplate>(this, "flow-template", "flow template");
}

export default FlowClient;
