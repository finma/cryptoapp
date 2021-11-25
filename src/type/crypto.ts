/* eslint-disable @typescript-eslint/naming-convention */
export interface CoinTypes {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CoinDetailTypes {
  additional_notices: any;
  asset_platform_id: string;
  block_time_in_minutes: number;
  categories: any;
  coingecko_rank: number;
  coingecko_score: number;
  community_data: any;
  community_score: number;
  contract_address: string;
  country_origin: string;
  description: any;
  developer_data: any;
  developer_score: number;
  genesis_date: any;
  hashing_algorithm: any;
  id: string;
  image: any;
  last_updated: string;
  links: any;
  liquidity_score: number;
  localization: any;
  market_cap_rank: number;
  market_data: any;
  name: string;
  platforms: any;
  public_interest_score: number;
  public_interest_stats: any;
  public_notice: any;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any;
  symbol: string;
  tickers: any;
}
