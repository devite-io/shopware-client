export type NewsletterConfirmRequest = {
  hash: string;
  em: string;
};

export type NewsletterSubscribeRequest = {
  email: string;
  option: "direct" | "subscribe" | "unsubscribe" | "confirmSubscribe";
  storefrontUrl: string;
  salutationId?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  zipCode?: string;
  tags?: string;
  languageId?: string;
  customFields?: string;
};

export type NewsletterUnsubscribeRequest = { email: string };
