import { TaxRule } from "./TaxRule";

export interface TaxRuleType {
  id: string;
  readonly technicalName: string;
  position: number;
  typeName: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  rules?: Array<TaxRule>;
}
