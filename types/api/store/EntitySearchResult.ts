export interface EntitySearchResult {
  apiAlias: "dal_entity_search_result";
  total?: number;
  page?: number;
  limit?: number;
  aggregations?: Array<object>;
}
