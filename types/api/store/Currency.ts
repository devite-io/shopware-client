import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rounding } from "#types/api/global/Rounding";

export interface Currency {
  id: string;
  factor: number;
  symbol: string;
  isoCode: string;
  shortName: string;
  name: string;
  position?: number;
  isSystemDefault?: boolean;
  taxFreeFrom?: number;
  customFields?: GenericRecord;
  itemRounding: Rounding;
  totalRounding: Rounding;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
