import Client from "../Client";
import createRestEndpoint from "../../utils/createRestEndpoint";
import { Script } from "#types/api/admin/Script";

class ScriptClient extends Client {
  public scripts = createRestEndpoint<Script>(this, "script", "script");
}

export default ScriptClient;
