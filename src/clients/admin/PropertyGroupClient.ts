import Client from "../Client";
import { PropertyGroup } from "#types/api/admin/propertyGroup/PropertyGroup";
import { PropertyGroupOption } from "#types/api/admin/propertyGroup/PropertyGroupOption";
import createRestEndpoint from "../../utils/createRestEndpoint";

class PropertyGroupClient extends Client {
  public propertyGroups = createRestEndpoint<PropertyGroup>(
    this,
    "property-group",
    "property group"
  );
  public propertyGroupOptions = createRestEndpoint<PropertyGroupOption>(
    this,
    "property-group-option",
    "property group option"
  );
}

export default PropertyGroupClient;
