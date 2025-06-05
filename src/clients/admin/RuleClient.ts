import Client from "../Client";
import { Rule } from "#types/api/admin/rule/Rule";
import { RuleCondition } from "#types/api/admin/rule/RuleCondition";
import createRestEndpoint from "../../utils/createRestEndpoint";

class RuleClient extends Client {
  public rules = createRestEndpoint<Rule>(this, "/rule", "rule");
  public conditions = createRestEndpoint<RuleCondition>(this, "/rule-condition", "rule condition");
}

export default RuleClient;
