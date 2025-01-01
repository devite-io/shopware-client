import { Media } from "#types/api/admin/media/Media";
import { MediaDefaultFolder } from "#types/api/admin/media/folder/MediaDefaultFolder";
import { MediaFolder } from "#types/api/admin/media/folder/MediaFolder";
import { MediaFolderConfiguration } from "#types/api/admin/media/folder/configuration/MediaFolderConfiguration";
import { MediaThumbnail } from "#types/api/admin/media/thumbnail/MediaThumbnail";
import { MediaThumbnailSize } from "#types/api/admin/media/thumbnail/MediaThumbnailSize";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Media **/

export interface MediaListResponse {
  total?: number;
  data?: Array<Media>;
}

export type MediaCreateRequest = Media;
export type MediaCreateResponse = { data: Media };

export type MediaListSearchRequest = Criteria;
export interface MediaListSearchResponse {
  total?: number;
  data?: Array<Media>;
}

export interface MediaSingleResponse {
  data: Media;
}

export type MediaUpdateRequest = Media;
export type MediaUpdateResponse = { data: Media };

export interface MediaAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface MediaAggregationResponse {
  total?: number;
  data?: Array<Media>;
}

/** Default Folders **/

export interface DefaultFolderListResponse {
  total?: number;
  data?: Array<MediaDefaultFolder>;
}

export type DefaultFolderCreateRequest = MediaDefaultFolder;
export type DefaultFolderCreateResponse = { data: MediaDefaultFolder };

export type DefaultFolderListSearchRequest = Criteria;
export interface DefaultFolderListSearchResponse {
  total?: number;
  data?: Array<MediaDefaultFolder>;
}

export interface DefaultFolderSingleResponse {
  data: MediaDefaultFolder;
}

export type DefaultFolderUpdateRequest = MediaDefaultFolder;
export type DefaultFolderUpdateResponse = { data: MediaDefaultFolder };

export interface DefaultFolderAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DefaultFolderAggregationResponse {
  total?: number;
  data?: Array<MediaDefaultFolder>;
}

/** Folders **/

export interface FolderListResponse {
  total?: number;
  data?: Array<MediaFolder>;
}

export type FolderCreateRequest = MediaFolder;
export type FolderCreateResponse = { data: MediaFolder };

export type FolderListSearchRequest = Criteria;
export interface FolderListSearchResponse {
  total?: number;
  data?: Array<MediaFolder>;
}

export interface FolderSingleResponse {
  data: MediaFolder;
}

export type FolderUpdateRequest = MediaFolder;
export type FolderUpdateResponse = { data: MediaFolder };

export interface FolderAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FolderAggregationResponse {
  total?: number;
  data?: Array<MediaFolder>;
}

/** Folder Configs **/

export interface FolderConfigListResponse {
  total?: number;
  data?: Array<MediaFolderConfiguration>;
}

export type FolderConfigCreateRequest = MediaFolderConfiguration;
export type FolderConfigCreateResponse = { data: MediaFolderConfiguration };

export type FolderConfigListSearchRequest = Criteria;
export interface FolderConfigListSearchResponse {
  total?: number;
  data?: Array<MediaFolderConfiguration>;
}

export interface FolderConfigSingleResponse {
  data: MediaFolderConfiguration;
}

export type FolderConfigUpdateRequest = MediaFolderConfiguration;
export type FolderConfigUpdateResponse = { data: MediaFolderConfiguration };

export interface FolderConfigAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface FolderConfigAggregationResponse {
  total?: number;
  data?: Array<MediaFolderConfiguration>;
}

/** Thumbnails **/

export interface ThumbnailListResponse {
  total?: number;
  data?: Array<MediaThumbnail>;
}

export type ThumbnailCreateRequest = MediaThumbnail;
export type ThumbnailCreateResponse = { data: MediaThumbnail };

export type ThumbnailListSearchRequest = Criteria;
export interface ThumbnailListSearchResponse {
  total?: number;
  data?: Array<MediaThumbnail>;
}

export interface ThumbnailSingleResponse {
  data: MediaThumbnail;
}

export type ThumbnailUpdateRequest = MediaThumbnail;
export type ThumbnailUpdateResponse = { data: MediaThumbnail };

export interface ThumbnailAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ThumbnailAggregationResponse {
  total?: number;
  data?: Array<MediaThumbnail>;
}

/** Thumbnail Sizes **/

export interface ThumbnailSizeListResponse {
  total?: number;
  data?: Array<MediaThumbnailSize>;
}

export type ThumbnailSizeCreateRequest = MediaThumbnailSize;
export type ThumbnailSizeCreateResponse = { data: MediaThumbnailSize };

export type ThumbnailSizeListSearchRequest = Criteria;
export interface ThumbnailSizeListSearchResponse {
  total?: number;
  data?: Array<MediaThumbnailSize>;
}

export interface ThumbnailSizeSingleResponse {
  data: MediaThumbnailSize;
}

export type ThumbnailSizeUpdateRequest = MediaThumbnailSize;
export type ThumbnailSizeUpdateResponse = { data: MediaThumbnailSize };

export interface ThumbnailSizeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ThumbnailSizeAggregationResponse {
  total?: number;
  data?: Array<MediaThumbnailSize>;
}
