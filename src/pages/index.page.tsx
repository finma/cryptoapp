/* eslint-disable import-access/jsdoc */
import type { CustomNextPage } from "next";
import { Banner } from "src/component/Banner";
import { CoinsTable } from "src/component/CoinsTable";
// import { FluidLayout } from "src/layout";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

const Index: CustomNextPage = () => {
  return (
    <main className="dark:bg-black-custom ">
      <Header />
      <Banner />
      <CoinsTable />
      <Footer />
    </main>
  );
};

// Index.getLayout = FluidLayout;

export default Index;
