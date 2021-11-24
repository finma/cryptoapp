/* eslint-disable @typescript-eslint/no-empty-function */
import type { ReactNode } from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

type CryptoContextType = {
  currency: string;
  symbol: string;
  setCurrency: (value: string) => void;
};

const CryptoDefaultValues: CryptoContextType = {
  currency: "IDR",
  symbol: "Rp.",
  setCurrency: () => {},
};

const Crypto = createContext<CryptoContextType>(CryptoDefaultValues);

export const CryptoContext = (props: { children: ReactNode }) => {
  const { children } = props;

  const [currency, setCurrency] = useState("IDR");
  const [symbol, setSymbol] = useState("Rp.");

  useEffect(() => {
    if (currency === "IDR") setSymbol("Rp.");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return <Crypto.Provider value={{ currency, setCurrency, symbol }}>{children}</Crypto.Provider>;
};

export const CryptoState = () => {
  return useContext(Crypto);
};
