import { GenericRecord } from "#types/api/global/GenericRecord";
import { Locale } from "../locale/Locale";
import { Media } from "../media/Media";
import { UserAccessKey } from "./UserAccessKey";
import { UserConfig } from "./UserConfig";
import { StateMachineHistory } from "../stateMachine/StateMachineHistory";
import { ImportExportLog } from "../importExport/ImportExportLog";
import { AclRole } from "../acl/AclRole";
import { UserRecovery } from "./UserRecovery";
import { Order } from "../order/Order";
import { Customer } from "../customer/Customer";

export interface User {
  id: string;
  localeId: string;
  username: string;
  firstName: string;
  lastName: string;
  title?: string;
  email: string;
  active?: boolean;
  admin?: boolean;
  lastUpdatedPasswordAt?: string;
  timeZone?: string;
  customFields?: GenericRecord;
  avatarId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  extensions?: {
    createdNotifications?: {
      links?: { related?: string };
      data?: Array<{ type?: string; id?: string }>;
    };
  };
  locale?: Locale;
  avatarMedia?: Media;
  media?: Array<Media>;
  accessKeys?: Array<UserAccessKey>;
  configs?: Array<UserConfig>;
  stateMachineHistoryEntries?: Array<StateMachineHistory>;
  importExportLogEntries?: Array<ImportExportLog>;
  aclRoles?: Array<AclRole>;
  recoveryUser?: UserRecovery;
  createdOrders?: Array<Order>;
  updatedOrders?: Array<Order>;
  createdCustomers?: Array<Customer>;
  updatedCustomers?: Array<Customer>;
}
