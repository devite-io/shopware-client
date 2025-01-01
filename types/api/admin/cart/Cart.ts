export interface Cart {
  id?: any;
  errors?: {
    key?: any;
    level?: any;
    message?: any;
  };
  transactions?: { paymentMethodId?: any };
  modified?: any;
}
