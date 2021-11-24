import type { CustomNextPage } from "next";
import { Banner } from "src/component/Banner";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
