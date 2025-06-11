import Client from "../Client";
import { Salutation } from "#types/api/admin/Salutation";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SalutationClient extends Client {
  public salutations = createRestEndpoint<Salutation>(this, "salutation", "salutation");
}

export default SalutationClient;
