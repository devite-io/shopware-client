import Client from "../Client";
import { ImportExportFile } from "#types/api/admin/importExport/ImportExportFile";
import { ImportExportLog } from "#types/api/admin/importExport/ImportExportLog";
import { ImportExportProfile } from "#types/api/admin/importExport/ImportExportProfile";
import createRestEndpoint from "../../utils/createRestEndpoint";

class ImportExportClient extends Client {
  public importExportFiles = createRestEndpoint<ImportExportFile>(
    this,
    "import-export-file",
    "import/export file"
  );
  public importExportLogs = createRestEndpoint<ImportExportLog>(
    this,
    "import-export-log",
    "import/export log"
  );
  public importExportProfiles = createRestEndpoint<ImportExportProfile>(
    this,
    "import-export-profile",
    "import/export profile"
  );
}

export default ImportExportClient;
