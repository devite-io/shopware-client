import Client from "../Client";
import { CustomEntity } from "#types/api/admin/custom/CustomEntity";
import { CustomFieldSet } from "#types/api/admin/custom/field/set/CustomFieldSet";
import { CustomFieldSetRelation } from "#types/api/admin/custom/field/set/CustomFieldSetRelation";
import { CustomField } from "#types/api/admin/custom/field/CustomField";
import createRestEndpoint from "../../utils/createRestEndpoint";

class CustomDataClient extends Client {
  public entities = createRestEndpoint<CustomEntity>(this, "/custom-entity", "custom entity");
  public fieldSets = createRestEndpoint<CustomFieldSet>(
    this,
    "custom-field-set",
    "custom field set"
  );
  public fieldSetRelations = createRestEndpoint<CustomFieldSetRelation>(
    this,
    "custom-field-set-relation",
    "custom field set relation"
  );
  public fields = createRestEndpoint<CustomField>(this, "/custom-field", "custom field");
}

export default CustomDataClient;
