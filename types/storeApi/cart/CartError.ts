export type CartError = {
  items?: {
    key?: string;
    level?: 0 | 10 | 20;
    message?: string;
    messageKey?: string;
  };
};
