import Client from "../Client";
import { User } from "#types/api/admin/user/User";
import { UserAccessKey } from "#types/api/admin/user/UserAccessKey";
import { UserConfig } from "#types/api/admin/user/UserConfig";
import createRestEndpoint from "../../utils/createRestEndpoint";

class UserClient extends Client {
  public users = createRestEndpoint<User>(this, "user", "user");
  public accessKeys = createRestEndpoint<UserAccessKey>(this, "user-access-key", "user access key");
  public userConfigs = createRestEndpoint<UserConfig>(this, "user-config", "user config");
}

export default UserClient;
