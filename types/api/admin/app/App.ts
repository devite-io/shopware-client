import { GenericRecord } from "#types/api/global/GenericRecord";
import { Integration } from "../integration/Integration";
import { AclRole } from "../acl/AclRole";
import { CustomFieldSet } from "../custom/field/set/CustomFieldSet";
import { AppActionButton } from "./AppActionButton";
import { AppTemplate } from "./AppTemplate";
import { Webhook } from "../webhook/Webhook";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { TaxProvider } from "../tax/TaxProvider";
import { CmsBlock } from "../cms/CmsBlock";
import { AppFlowAction } from "../flow/app/AppFlowAction";
import { AppFlowEvent } from "../flow/app/AppFlowEvent";
import { AppShippingMethod } from "../shippingMethod/AppShippingMethod";

export interface App {
  id: string;
  name: string;
  path: string;
  author?: string;
  copyright?: string;
  license?: string;
  active?: boolean;
  configurable?: boolean;
  privacy?: string;
  version: string;
  readonly icon?: string;
  modules?: Array<object>;
  mainModule?: object;
  cookies?: Array<object>;
  allowDisable?: boolean;
  baseAppUrl?: string;
  allowedHosts?: Array<string>;
  templateLoadPriority?: number;
  checkoutGatewayUrl?: string;
  inAppPurchasesGatewayUrl?: string;
  sourceType?: string;
  sourceConfig?: object;
  selfManaged?: boolean;
  label: string;
  description?: string;
  privacyPolicyExtensions?: string;
  customFields?: GenericRecord;
  integrationId: string;
  aclRoleId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: GenericRecord;
  integration?: Integration;
  aclRole?: AclRole;
  customFieldSets?: Array<CustomFieldSet>;
  actionButtons?: Array<AppActionButton>;
  templates?: Array<AppTemplate>;
  webhooks?: Array<Webhook>;
  paymentMethods?: Array<PaymentMethod>;
  taxProviders?: Array<TaxProvider>;
  cmsBlocks?: Array<CmsBlock>;
  flowActions?: Array<AppFlowAction>;
  flowEvents?: Array<AppFlowEvent>;
  appShippingMethods?: Array<AppShippingMethod>;
}
