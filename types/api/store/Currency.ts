import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rounding } from "#types/api/global/Rounding";

export interface Currency {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  shortName: string;
  name: string;
  isoCode: string;
  symbol: string;
  position?: number;
  isSystemDefault?: boolean;
  itemRounding: Rounding;
  totalRounding: Rounding;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
