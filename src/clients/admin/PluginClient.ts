import Client from "../Client";
import { ShopwarePlugin } from "#types/api/admin/ShopwarePlugin";
import createRestEndpoint from "../../utils/createRestEndpoint";

class PluginClient extends Client {
  public plugins = createRestEndpoint<ShopwarePlugin>(this, "plugin", "plugin");
}

export default PluginClient;
