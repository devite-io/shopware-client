import Client from "../Client";
import { Unit } from "#types/api/admin/Unit";
import createRestEndpoint from "../../utils/createRestEndpoint";

class UnitClient extends Client {
  public units = createRestEndpoint<Unit>(this, "unit", "unit");
}

export default UnitClient;
