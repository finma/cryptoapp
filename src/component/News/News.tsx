/* eslint-disable jsx-a11y/no-onchange */
import { LinearProgress } from "@material-ui/core";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { NewsCard } from "src/component/News/NewsCard";
import { CryptoState } from "src/context/CryptoContex";
import { getCoinList } from "src/service/crypto";
import { getNews } from "src/service/news";
import type { CoinTypes, NewsTypes } from "src/type/crypto";

export const News = () => {
  const [crypto, setCrypto] = useState("Cryptocurrency");
  const [coins, setCoins] = useState<CoinTypes[]>([]);
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currency } = CryptoState();

  const fetchNews = useCallback(async () => {
    setIsLoading(true);

    const res = await getNews(crypto, 8);
    const coins = await getCoinList(currency);

    setCoins(coins);
    setNews(res.value);
    setIsLoading(false);
  }, [crypto, currency]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews, crypto]);

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    setCrypto(e.target.value as string);
  };

  if (isLoading) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  if (news.length === 0) return <p>News not found</p>;

  return (
    <div className="container m-auto min-h-screen">
      <div className="flex justify-center my-8">
        <div className="inline-block relative m-auto">
          <select
            value={crypto}
            onChange={handleChange}
            className="block py-2 px-4 pr-8 w-full leading-tight text-white bg-black-custom rounded-md border border-white hover:border-white shadow appearance-none focus:outline-none "
          >
            {coins?.map((coin) => {
              return (
                <option value={coin.id} key={coin.id}>
                  {coin.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap flex-grow flex-shrink justify-center">
        {news?.map((item) => {
          return (
            <NewsCard
              key={item.url}
              title={item.name}
              image={item.image}
              description={item.description}
              url={item.url}
              name={""}
            />
          );
        })}
      </div>
    </div>
  );
};
