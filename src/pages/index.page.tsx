import type { CustomNextPage } from "next";
import { Banner } from "src/component/Banner";
import { CoinsTable } from "src/component/CoinsTable";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
