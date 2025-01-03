import { Criteria } from "#types/api/global/query/Criteria";
import { stringify } from "qs";

/**
 * Builds a query string from a criteria object.
 * @param {Criteria} criteria
 * @returns {string} the query string
 */
export function buildQuery(criteria?: Criteria): string {
  return criteria ? `?${stringify(criteria, { encode: false })}` : "";
}
