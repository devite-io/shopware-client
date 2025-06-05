import Client from "../Client";
import { Country } from "#types/api/admin/country/Country";
import { CountryState } from "#types/api/admin/country/CountryState";
import createRestEndpoint from "../../utils/createRestEndpoint";

class CountryClient extends Client {
  public countries = createRestEndpoint<Country>(this, "/country", "country");
  public states = createRestEndpoint<CountryState>(this, "/country-state", "country-state");
}

export default CountryClient;
