import { TaxRuleType } from "./TaxRuleType";
import { Country } from "../../country/Country";
import { Tax } from "../Tax";

export interface TaxRule {
  id: string;
  taxRuleTypeId: string;
  countryId: string;
  taxRate: number;
  data: {
    states?: Array<object>;
    zipCode?: string;
    fromZipCode?: string;
    toZipCode?: string;
  };
  taxId: string;
  activeFrom: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  type?: TaxRuleType;
  country?: Country;
  tax?: Tax;
}
