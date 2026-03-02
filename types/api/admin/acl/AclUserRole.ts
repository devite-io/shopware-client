import { User } from "../user/User";
import { AclRole } from "./AclRole";

export interface AclUserRole {
  id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  userId: string;
  user?: User;
  aclRoleId: string;
  aclRole?: AclRole;
}
