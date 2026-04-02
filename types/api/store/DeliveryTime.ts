import { GenericRecord } from "#types/api/global/GenericRecord";

export interface DeliveryTime {
  apiAlias: "delivery_time";
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  min: number;
  max: number;
  unit: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
