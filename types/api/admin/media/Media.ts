import { Media as StoreApiMedia } from "#types/api/store/media/Media";
import { User } from "../user/User";

export type Media = StoreApiMedia & {
  userId?: string;
  user?: User;
  mediaFolderId?: string;
};
