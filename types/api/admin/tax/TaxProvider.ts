import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "../rule/Rule";
import { App } from "../app/App";

export interface TaxProvider {
  id: string;
  identifier: string;
  active?: boolean;
  name: string;
  priority: number;
  processUrl?: string;
  availabilityRuleId?: string;
  appId?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  availabilityRule?: Rule;
  app?: App;
}
