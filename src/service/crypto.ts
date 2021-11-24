import axios from "axios";

// export const CoinList = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// export const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

// export const HistoricalChart = (id, days = 365, currency) =>
//   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// export const TrendingCoins = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

const ROOT_API = "https://api.coingecko.com/api/v3/coins/";

export const getCoinList = async (currency: string) => {
  const url = `${ROOT_API}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getTrendingCoins = async (currency: string) => {
  const url = `${ROOT_API}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
