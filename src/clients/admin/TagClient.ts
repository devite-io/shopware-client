import Client from "../Client";
import { Tag } from "#types/api/admin/Tag";
import createRestEndpoint from "../../utils/createRestEndpoint";

class TagClient extends Client {
  public tags = createRestEndpoint<Tag>(this, "/tag", "tag");
}

export default TagClient;
