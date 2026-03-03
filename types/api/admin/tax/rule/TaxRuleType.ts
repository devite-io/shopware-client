import { TaxRule } from "./TaxRule";

export interface TaxRuleType {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly technicalName: string;
  position: number;
  typeName: string;
  rules?: Array<TaxRule>;
  translated?: Record<string, any>;
}
