import type { CustomNextPage } from "next";
import { CoinDetail } from "src/component/CoinDetail";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <>
      <CoinDetail />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
