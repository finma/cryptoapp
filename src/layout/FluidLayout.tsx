import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-w-min min-h-screen dark:bg-black-custom">
      <Header />
      <div>
        <main className="container m-auto">
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </main>
      </div>
      <Footer />
    </div>
  );
};
