/* eslint-disable import-access/jsdoc */
import type { CustomNextPage } from "next";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

const About: CustomNextPage = () => {
  return (
    <main className="dark:bg-black-custom ">
      <Header />
      <div className="w-full text-center flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-gold font-medium text-3xl">Cryptoverse</h1>
        <div className="w-full lg:md-1/2 px-6">
        <p className="text-base font-normal">
          <span className="text-gold">Cryptoverse</span> adalah sebuah sistem informasi yang menyajikan data tentang cryptocurrency secara realtime, agar dapat membantu para pengguna cryptocurrency dalam melakukan kegiatannya.
        </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
