import { ImportExportLog } from "./ImportExportLog";

export interface ImportExportProfile {
  id: string;
  label: string;
  type?: string;
  systemDefault?: boolean;
  sourceEntity: string;
  fileType: string;
  delimiter: string;
  enclosure: string;
  mapping?: object;
  updateBy?: object;
  config?: object;
  technicalName?: string;
  name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  importExportLogs?: Array<ImportExportLog>;
}
