import { SalesChannel } from "./SalesChannel";
import { Country } from "../country/Country";

export interface SalesChannelCountry {
  id?: string;
  salesChannelId: string;
  countryId: string;
  salesChannel?: SalesChannel;
  country?: Country;
}
