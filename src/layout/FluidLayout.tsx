import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="w-full min-h-screen dark:bg-black-custom ">
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
