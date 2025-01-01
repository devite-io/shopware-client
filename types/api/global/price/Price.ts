export interface Price {
  currencyId: string;
  gross: number;
  net: number;
  linked?: boolean;
  listPrice?: {
    currencyId?: string;
    gross: number;
    net: number;
    linked?: boolean;
  };
  regulationPrice: {
    currencyId?: string;
    gross: number;
    net: number;
    linked?: boolean;
  };
}
