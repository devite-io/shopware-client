export interface OrderPrice {
  netPrice: number;
  totalPrice: number;
  calculatedTaxes?: object;
  taxRules?: object;
  positionPrice: number;
  rawTotal: number;
  taxStatus: "Free" | "Net" | "Gross";
}
