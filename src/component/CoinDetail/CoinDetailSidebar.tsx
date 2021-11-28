import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
import NumberFormat from "react-number-format";
import type { CoinDetailTypes } from "src/type/crypto";

interface PropsTypes {
  coin: CoinDetailTypes | undefined;
  currency: string;
  symbol: string;
}

export const CoinDetailSidebar = ({ coin, currency, symbol }: PropsTypes) => {
  return (
    <div className="flex flex-col items-center px-6 mt-6 w-full md:w-[30%] md:border-r">
      <Image src={coin?.image?.large} alt={coin?.name} height={200} width={200} />
      <h2 className="mt-4 mb-2 text-3xl font-medium text-white">{coin?.name}</h2>
      <div className="space-y-2 text-left text-white">
        <p className="text-base font-normal ">{ReactHtmlParser(coin?.description?.en.split(". ")[0])}</p>
        <p className="text-lg font-medium ">Rank: {coin?.market_cap_rank}</p>
        <p className="text-lg font-medium ">
          Current Price: &nbsp;
          <NumberFormat
            value={coin?.market_data?.current_price[currency.toLowerCase()]}
            prefix={`${symbol} `}
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </p>
        <p className="text-lg font-medium ">
          Market Cap: &nbsp;
          <NumberFormat
            value={coin?.market_data?.market_cap[currency.toLowerCase()]}
            prefix={`${symbol} `}
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </p>
      </div>
    </div>
  );
};
