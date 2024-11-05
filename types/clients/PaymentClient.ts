export type OrderPaymentInitiateRequest = {
  orderId: string;
  finishUrl?: string;
  errorUrl?: string;
};
export type OrderPaymentInitiateResponse = { redirectUrl: string };
