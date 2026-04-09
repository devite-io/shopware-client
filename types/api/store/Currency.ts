import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rounding } from "#types/api/global/Rounding";

export interface Currency {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  isSystemDefault?: boolean;
  shortName: string;
  name: string;
  isoCode: string;
  symbol: string;
  factor: number;
  position?: number;
  itemRounding: Rounding;
  totalRounding: Rounding;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
