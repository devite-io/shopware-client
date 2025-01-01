import { User } from "../user/User";
import { ImportExportProfile } from "./ImportExportProfile";
import { ImportExportFile } from "./ImportExportFile";

export interface ImportExportLog {
  id: string;
  activity: string;
  state: string;
  record: number;
  userId?: string;
  profileId?: string;
  fileId?: string;
  invalidRecordsLogId?: string;
  username?: string;
  profileName?: string;
  config: object;
  result?: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  user?: User;
  profile?: ImportExportProfile;
  file?: ImportExportFile;
  invalidRecordsLog?: ImportExportLog;
  failedImportLog?: ImportExportLog;
}
