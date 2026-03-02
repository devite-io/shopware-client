import { Rule as StoreApiRule } from "#types/api/store/Rule";
import { Tag } from "../Tag";

export type Rule = StoreApiRule & {
  priority?: number;
  readonly invalid?: boolean;
  readonly areas?: Array<object>;
  tags?: Array<Tag>;
};
