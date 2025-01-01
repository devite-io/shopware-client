import { User } from "../user/User";
import { AclRole } from "./AclRole";

export interface AclUserRole {
  id?: string;
  userId: string;
  aclRoleId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  user?: User;
  aclRole?: AclRole;
}
