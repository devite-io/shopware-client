export interface Webhook {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  eventName: string;
  name: string;
  url: string;
  readonly errorCount?: number;
}
