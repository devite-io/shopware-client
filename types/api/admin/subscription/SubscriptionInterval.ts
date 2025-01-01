export interface SubscriptionInterval {
  id?: string;
  name?: string;
  active?: boolean;
  dateInterval?: string;
  cronInterval?: string;
  availabilityRuleId?: string;
  translated?: object;
}
