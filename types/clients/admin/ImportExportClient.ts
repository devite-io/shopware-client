import { ImportExportFile } from "#types/api/admin/importExport/ImportExportFile";
import { ImportExportLog } from "#types/api/admin/importExport/ImportExportLog";
import { ImportExportProfile } from "#types/api/admin/importExport/ImportExportProfile";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Files **/

export interface FileListResponse {
  total?: number;
  data?: Array<ImportExportFile>;
}

export type FileCreateRequest = ImportExportFile;
export type FileCreateResponse = { data: ImportExportFile };

export type FileListSearchRequest = Criteria;
export interface FileListSearchResponse {
  total?: number;
  data?: Array<ImportExportFile>;
}

export interface FileSingleResponse {
  data: ImportExportFile;
}

export type FileUpdateRequest = ImportExportFile;
export type FileUpdateResponse = { data: ImportExportFile };

export interface FileAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FileAggregationResponse {
  total?: number;
  data?: Array<ImportExportFile>;
}

/** Logs **/

export interface LogListResponse {
  total?: number;
  data?: Array<ImportExportLog>;
}

export type LogCreateRequest = ImportExportLog;
export type LogCreateResponse = { data: ImportExportLog };

export type LogListSearchRequest = Criteria;
export interface LogListSearchResponse {
  total?: number;
  data?: Array<ImportExportLog>;
}

export interface LogSingleResponse {
  data: ImportExportLog;
}

export type LogUpdateRequest = ImportExportLog;
export type LogUpdateResponse = { data: ImportExportLog };

export interface LogAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LogAggregationResponse {
  total?: number;
  data?: Array<ImportExportLog>;
}

/** Profiles **/

export interface ProfileListResponse {
  total?: number;
  data?: Array<ImportExportProfile>;
}

export type ProfileCreateRequest = ImportExportProfile;
export type ProfileCreateResponse = { data: ImportExportProfile };

export type ProfileListSearchRequest = Criteria;
export interface ProfileListSearchResponse {
  total?: number;
  data?: Array<ImportExportProfile>;
}

export interface ProfileSingleResponse {
  data: ImportExportProfile;
}

export type ProfileUpdateRequest = ImportExportProfile;
export type ProfileUpdateResponse = { data: ImportExportProfile };

export interface ProfileAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ProfileAggregationResponse {
  total?: number;
  data?: Array<ImportExportProfile>;
}
