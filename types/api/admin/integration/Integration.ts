import { GenericRecord } from "#types/api/global/GenericRecord";
import { App } from "../app/App";
import { AclRole } from "../acl/AclRole";

export interface Integration {
  id: string;
  label: string;
  accessKey: string;
  secretAccessKey: string;
  lastUsageAt?: string;
  admin?: boolean;
  customFields?: GenericRecord;
  deletedAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  extensions?: {
    createdNotifications?: {
      links?: { related?: string };
      data?: Array<{ type?: string; id?: string }>;
    };
  };
  app?: App;
  aclRoles?: Array<AclRole>;
  /** @deprecated */
  writeAccess?: any;
  integrationId?: any;
  aclRoleId?: any;
}
