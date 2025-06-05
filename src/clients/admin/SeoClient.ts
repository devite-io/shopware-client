import Client from "../Client";
import { SeoUrl } from "#types/api/admin/seo/SeoUrl";
import { SeoUrlTemplate } from "#types/api/admin/seo/SeoUrlTemplate";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SeoClient extends Client {
  public urls = createRestEndpoint<SeoUrl>(this, "/seo-url", "seo url");
  public urlTemplates = createRestEndpoint<SeoUrlTemplate>(
    this,
    "seo-url-template",
    "seo url template"
  );
}

export default SeoClient;
