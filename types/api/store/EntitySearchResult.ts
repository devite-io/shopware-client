export interface EntitySearchResult {
  apiAlias: "dal_entity_search_result";
  entity?: string;
  total?: number;
  aggregations?: Array<object>;
  page?: number;
  limit?: number;
}
