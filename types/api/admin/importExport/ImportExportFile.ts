import { ImportExportLog } from "./ImportExportLog";

export interface ImportExportFile {
  id: string;
  originalName: string;
  path: string;
  expireDate: string;
  size?: number;
  accessToken?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  log?: ImportExportLog;
}
