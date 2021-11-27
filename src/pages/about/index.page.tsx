/* eslint-disable import-access/jsdoc */
import type { CustomNextPage } from "next";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

const About: CustomNextPage = () => {
  return (
    <main className="dark:bg-black-custom ">
      <Header />
      <div className="flex flex-col items-center mt-5 w-full min-h-[calc(100vh-130px)] text-center">
        <h1 className="text-5xl font-medium text-gold">Cryptoverse</h1>
        <div className="px-6 mt-4 w-full lg:w-1/2">
          <p className="text-base font-normal text-white">
            <span className="font-medium text-gold">Cryptoverse</span> adalah sebuah sistem informasi yang menyajikan
            data tentang cryptocurrency secara realtime, agar dapat membantu para pengguna cryptocurrency dalam
            melakukan kegiatannya.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
