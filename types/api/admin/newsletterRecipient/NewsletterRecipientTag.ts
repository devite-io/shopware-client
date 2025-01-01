import { NewsletterRecipient } from "./NewsletterRecipient";
import { Tag } from "../Tag";

export interface NewsletterRecipientTag {
  id?: string;
  newsletterRecipientId: string;
  tagId: string;
  newsletterRecipient?: NewsletterRecipient;
  tag?: Tag;
}
