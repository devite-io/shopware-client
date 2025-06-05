import Client from "../Client";
import { Snippet } from "#types/api/admin/snippet/Snippet";
import { SnippetSet } from "#types/api/admin/snippet/SnippetSet";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SnippetClient extends Client {
  public snippets = createRestEndpoint<Snippet>(this, "/snippet", "snippet");
  public sets = createRestEndpoint<SnippetSet>(this, "/snippet-set", "snippet set");
}

export default SnippetClient;
