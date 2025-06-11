import Client from "../Client";
import { Integration } from "#types/api/admin/integration/Integration";
import createRestEndpoint from "../../utils/createRestEndpoint";

class IntegrationClient extends Client {
  public integrations = createRestEndpoint<Integration>(this, "integration", "integration");
}

export default IntegrationClient;
