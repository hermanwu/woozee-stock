export class Tradable {
  ticker: string;
  uuid: string;
  name: string;
  displayName: string;
  organizationUuid: string;
  irAddress?: string;
  logoLink?: string;
  largeLogoLink?: string;
  marketCap?: number;
  description?: string;
  homePageUrl?: string;
  market?: string;
  sicDescription?: string;
  primaryExchange?: string;
  weightedSharesOutstanding?: number;
}

export interface StockModel {
  irAddress?: string;
  address?: {
    city?: string;
    postal_code?: string;
    state?: string;
  };
  description?: string;
  homepage_url?: string;
  list_date?: string;
  market?: string;
  market_cap?: number;
  name?: string;
  primary_exchange?: string;
  sic_description?: string;
  ticker?: string;
  branding?: {
    icon_url?: string;
    logo_url?: string;
  };
  weighted_shares_outstanding?: number;
  display_name?: string;
}
