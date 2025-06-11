import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import BinaryPayload from "../../payloads/BinaryPayload";
import { Media } from "#types/api/admin/media/Media";
import { MediaDefaultFolder } from "#types/api/admin/media/folder/MediaDefaultFolder";
import { MediaFolder } from "#types/api/admin/media/folder/MediaFolder";
import { MediaFolderConfiguration } from "#types/api/admin/media/folder/configuration/MediaFolderConfiguration";
import { MediaThumbnail } from "#types/api/admin/media/thumbnail/MediaThumbnail";
import { MediaThumbnailSize } from "#types/api/admin/media/thumbnail/MediaThumbnailSize";
import createRestEndpoint from "../../utils/createRestEndpoint";

class MediaClient extends Client {
  /** Asset Management **/

  /**
   * @return The url for the uploaded media.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async upload(
    id: string,
    extension: string,
    contents: Blob,
    fileName?: string
  ): Promise<string> {
    const response = await this.post(`/_action/media/${id}/upload`, {
      query: { extension, fileName },
      body: new BinaryPayload(contents)
    });

    if (response.statusCode === 200) return response.headers?.get("Location") as string;

    throw new ShopwareError("Failed to upload asset", response);
  }

  /**
   * Requires `shopware.media.enable_url_upload_feature` to be enabled.
   *
   * @return The url for the uploaded media.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async uploadFromUrl(
    id: string,
    extension: string,
    url: string,
    fileName?: string
  ): Promise<string> {
    const response = await this.post(`/_action/media/${id}/upload`, {
      query: { extension, fileName },
      body: new JsonPayload({ url })
    });

    if (response.statusCode === 200) return response.headers?.get("Location") as string;

    throw new ShopwareError("Failed to upload asset from url", response);
  }

  /** Rest Endpoints **/

  public media = createRestEndpoint<Media>(this, "media", "media");
  public defaultFolders = createRestEndpoint<MediaDefaultFolder>(
    this,
    "media-default-folder",
    "default media folder"
  );
  public folders = createRestEndpoint<MediaFolder>(this, "media-folder", "media folder");
  public folderConfigs = createRestEndpoint<MediaFolderConfiguration>(
    this,
    "media-folder-configuration",
    "media folder configuration"
  );
  public thumbnails = createRestEndpoint<MediaThumbnail>(
    this,
    "media-thumbnail",
    "media thumbnail"
  );
  public thumbnailSizes = createRestEndpoint<MediaThumbnailSize>(
    this,
    "media-thumbnail-size",
    "media thumbnail size"
  );
}

export default MediaClient;
