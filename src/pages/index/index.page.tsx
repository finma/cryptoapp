import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-white">Main Content</h1>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
