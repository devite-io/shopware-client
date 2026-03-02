export interface Price {
  net: number;
  gross: number;
  listPrice?: { net: number; gross: number };
  regulationPrice: { net: number; gross: number };
  currencyId: string;
}
