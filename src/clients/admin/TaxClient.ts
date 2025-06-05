import Client from "../Client";
import { Tax } from "#types/api/admin/tax/Tax";
import { TaxProvider } from "#types/api/admin/tax/TaxProvider";
import { TaxRule } from "#types/api/admin/tax/rule/TaxRule";
import { TaxRuleType } from "#types/api/admin/tax/rule/TaxRuleType";
import createRestEndpoint from "../../utils/createRestEndpoint";

class TaxClient extends Client {
  public taxes = createRestEndpoint<Tax>(this, "/tax", "tax");
  public providers = createRestEndpoint<TaxProvider>(this, "/tax-provider", "tax provider");
  public rules = createRestEndpoint<TaxRule>(this, "/tax-rule", "tax rule");
  public ruleTypes = createRestEndpoint<TaxRuleType>(this, "/tax-rule-type", "tax rule type");
}

export default TaxClient;
