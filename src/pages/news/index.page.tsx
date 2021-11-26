/* eslint-disable import-access/jsdoc */
import { News } from "src/component/News";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

const Index = () => {
  return (
    <main className="min-h-screen dark:bg-black-custom">
      <Header />
      <News />
      <Footer />
    </main>
  );
};

export default Index;
