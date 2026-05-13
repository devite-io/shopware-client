import { TaxRule } from "./TaxRule";

export interface TaxRuleType {
  id: string;
  readonly technicalName: string;
  position: number;
  typeName: string;
  rules?: Array<TaxRule>;
  readonly createdAt: string;
  readonly updatedAt?: string;
  translated?: Record<string, any>;
}
