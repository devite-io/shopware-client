import { GenericRecord } from "./GenericRecord";

export type Currency = {
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
  itemRounding: {
    decimals: number;
    interval: number;
    roundForNet: boolean;
  };
  totalRounding: {
    decimals: number;
    interval: number;
    roundForNet: boolean;
  };
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
};
