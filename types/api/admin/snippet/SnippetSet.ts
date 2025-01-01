import { GenericRecord } from "#types/api/global/GenericRecord";
import { Snippet } from "./Snippet";
import { SalesChannelDomain } from "../salesChannel/SalesChannelDomain";

export interface SnippetSet {
  id: string;
  name: string;
  baseFile: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  snippets?: Array<Snippet>;
  salesChannelDomains?: Array<SalesChannelDomain>;
}
