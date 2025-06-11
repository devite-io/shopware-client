import Client from "../Client";
import { App } from "#types/api/admin/app/App";
import { AppActionButton } from "#types/api/admin/app/AppActionButton";
import { AppAdministrationSnippet } from "#types/api/admin/app/AppAdministrationSnippet";
import { AppCmsBlock } from "#types/api/admin/app/AppCmsBlock";
import { AppFlowAction } from "#types/api/admin/flow/app/AppFlowAction";
import { AppFlowEvent } from "#types/api/admin/flow/app/AppFlowEvent";
import { AppPaymentMethod } from "#types/api/admin/paymentMethod/AppPaymentMethod";
import { AppScriptCondition } from "#types/api/admin/app/AppScriptCondition";
import { AppShippingMethod } from "#types/api/admin/shippingMethod/AppShippingMethod";
import { AppTemplate } from "#types/api/admin/app/AppTemplate";
import createRestEndpoint from "../../utils/createRestEndpoint";

class AppClient extends Client {
  public apps = createRestEndpoint<App>(this, "app", "app");
  public actionButtons = createRestEndpoint<AppActionButton>(
    this,
    "app-action-button",
    "app action button"
  );
  public adminSnippets = createRestEndpoint<AppAdministrationSnippet>(
    this,
    "app-administration-snippet",
    "app administration snippet"
  );
  public cmsBlocks = createRestEndpoint<AppCmsBlock>(this, "app-cms-block", "app cms block");
  public flowActions = createRestEndpoint<AppFlowAction>(
    this,
    "app-flow-action",
    "app flow action"
  );
  public flowEvents = createRestEndpoint<AppFlowEvent>(this, "app-flow-event", "app flow event");
  public paymentMethods = createRestEndpoint<AppPaymentMethod>(
    this,
    "app-payment-method",
    "app payment method"
  );
  public scriptConditions = createRestEndpoint<AppScriptCondition>(
    this,
    "app-script-condition",
    "app script condition"
  );
  public shippingMethods = createRestEndpoint<AppShippingMethod>(
    this,
    "app-shipping-method",
    "app shipping method"
  );
  public templates = createRestEndpoint<AppTemplate>(this, "app-template", "app template");
}

export default AppClient;
