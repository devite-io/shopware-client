import { Integration } from "./Integration";
import { AclRole } from "../acl/AclRole";

export interface IntegrationRole {
  id?: string;
  integrationId: string;
  aclRoleId: string;
  integration?: Integration;
  role?: AclRole;
}
