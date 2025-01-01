import { MediaThumbnail as StoreApiMediaThumbnail } from "#types/api/store/media/MediaThumbnail";
import { Media } from "../Media";

export type MediaThumbnail = StoreApiMediaThumbnail & {
  media?: Media;
};
