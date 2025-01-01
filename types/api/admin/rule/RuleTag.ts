import { Rule } from "./Rule";
import { Tag } from "../Tag";

export interface RuleTag {
  id?: string;
  ruleId: string;
  tagId: string;
  rule?: Rule;
  tag?: Tag;
}
