import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import NumberFormat from "react-number-format";
import { CryptoState } from "src/context/CryptoContex";
import { getTrendingCoins } from "src/service/crypto";

export const ReactCarousel = () => {
  const { currency, symbol } = CryptoState();
  const [trending, setTrending] = useState([]);

  const getTrendingCoinsFromCallback = useCallback(async () => {
    const res = await getTrendingCoins(currency).then((res) => {
      return res;
    });

    setTrending(res);
  }, [currency]);

  useEffect(() => {
    getTrendingCoinsFromCallback();
  }, [currency, getTrendingCoinsFromCallback]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="flex items-center h-[50%]">
      <Carousel
        isRTL={false}
        breakPoints={breakPoints}
        transitionMs={2000}
        enableAutoPlay
        autoPlaySpeed={2000}
        disableArrowsOnEnd={false}
      >
        {trending.map((coin: any) => {
          const isProfit = coin?.price_change_percentage_24h >= 0;

          return (
            <Link href={`/coins/${coin.id}`} key={coin.id}>
              <a>
                <div className="flex flex-col items-center text-white uppercase cursor-pointer">
                  <Image src={coin?.image} alt={coin.name} width={80} height={80} />
                  <span>
                    {coin?.symbol}
                    &nbsp;
                    <span className={`${isProfit ? "text-green-500" : "text-red-600"}`}>
                      {isProfit && "+"}
                      {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </span>
                  <span style={{ fontSize: 22, fontWeight: 500 }}>
                    <NumberFormat
                      value={coin?.current_price}
                      prefix={`${symbol} `}
                      thousandSeparator="."
                      decimalSeparator=","
                      displayType="text"
                    />
                  </span>
                </div>
              </a>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};
