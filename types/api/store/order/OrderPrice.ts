export interface OrderPrice {
  positionPrice: number;
  netPrice: number;
  totalPrice: number;
  calculatedTaxes?: Array<{ taxRate: number; tax: number; price: number }>;
}
