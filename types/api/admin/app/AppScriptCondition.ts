import { App } from "./App";
import { RuleCondition } from "../rule/RuleCondition";

export interface AppScriptCondition {
  id: string;
  identifier: string;
  name: string;
  active: boolean;
  group?: string;
  script?: string;
  config?: object;
  appId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  app?: App;
  ruleConditions?: Array<RuleCondition>;
}
