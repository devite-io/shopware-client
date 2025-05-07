export interface OrderPrice {
  netPrice: number;
  totalPrice: number;
  calculatedTaxes?: Array<{
    tax: number;
    taxRate: number;
    price: number;
  }>;
  taxRules?: object;
  positionPrice: number;
  rawTotal: number;
  taxStatus: "Free" | "Net" | "Gross";
}
