import Client from "../Client";
import { Locale } from "#types/api/admin/locale/Locale";
import { Language } from "#types/api/admin/locale/Language";
import createRestEndpoint from "../../utils/createRestEndpoint";

class LocaleClient extends Client {
  public locales = createRestEndpoint<Locale>(this, "locale", "locale");
  public languages = createRestEndpoint<Language>(this, "language", "language");
}

export default LocaleClient;
