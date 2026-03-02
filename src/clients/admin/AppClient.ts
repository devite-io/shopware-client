import Client from "../Client";
import { App } from "#types/api/admin/app/App";
import { AppActionButton } from "#types/api/admin/app/AppActionButton";
import { AppShippingMethod } from "#types/api/admin/shippingMethod/AppShippingMethod";
import createRestEndpoint from "../../utils/createRestEndpoint";

class AppClient extends Client {
  public apps = createRestEndpoint<App>(this, "app", "app");
  public actionButtons = createRestEndpoint<AppActionButton>(
    this,
    "app-action-button",
    "app action button"
  );
  public shippingMethods = createRestEndpoint<AppShippingMethod>(
    this,
    "app-shipping-method",
    "app shipping method"
  );
}

export default AppClient;
