import { TaxRuleType } from "./TaxRuleType";
import { Country } from "../../country/Country";

export interface TaxRule {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  taxRuleTypeId: string;
  type?: TaxRuleType;
  activeFrom: string;
  taxRate: number;
  data: {
    states?: Array<object>;
    zipCode?: string;
    fromZipCode?: string;
    toZipCode?: string;
  };
  countryId: string;
  country?: Country;
}
