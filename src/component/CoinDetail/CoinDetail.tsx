import { LinearProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { CryptoState } from "src/context/CryptoContex";
import { getCoinDetail } from "src/service/crypto";
import type { CoinDetailTypes } from "src/type/crypto";

import { CoinDetailSidebar } from "./CoinDetailSidebar";
import { CoinInfo } from "./CoinInfo";

export const CoinDetail = () => {
  const [coin, setCoin] = useState<CoinDetailTypes>();
  const [isLoading, setIsLoading] = useState(true);
  const { currency, symbol } = CryptoState();
  const router = useRouter();

  const fetchCoinDetail = useCallback(async () => {
    const res = await getCoinDetail(router.query.coinId);

    setCoin(res);
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    fetchCoinDetail();
  }, [fetchCoinDetail, currency]);

  if (isLoading) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="container flex flex-col md:flex-row md:space-x-6 min-h-screen">
      <CoinDetailSidebar coin={coin} symbol={symbol} currency={currency} />
      <CoinInfo coin={coin} />
    </div>
  );
};
