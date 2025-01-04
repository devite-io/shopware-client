import { GenericRecord } from "#types/api/global/GenericRecord";

export interface DeliveryTime {
  apiAlias: "delivery_time";
  id: string;
  name: string;
  min: number;
  max: number;
  unit: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
