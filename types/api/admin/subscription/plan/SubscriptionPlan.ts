export interface SubscriptionPlan {
  id?: string;
  name?: string;
  description?: string;
  active?: boolean;
  minimumExecutionCount?: number;
  activeStorefrontLabel?: boolean;
  availabilityRuleId?: string;
  label?: string;
  translated?: object;
}
