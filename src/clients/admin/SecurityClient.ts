import Client from "../Client";
import { AclRole } from "#types/api/admin/acl/AclRole";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SecurityClient extends Client {
  public aclRoles = createRestEndpoint<AclRole>(this, "/acl-role", "acl role");
}

export default SecurityClient;
