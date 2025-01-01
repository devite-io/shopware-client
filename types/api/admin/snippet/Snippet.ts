import { GenericRecord } from "#types/api/global/GenericRecord";
import { SnippetSet } from "./SnippetSet";

export interface Snippet {
  id: string;
  setId: string;
  translationKey: string;
  value: string;
  author: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  set?: SnippetSet;
}
