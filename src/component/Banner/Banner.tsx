import { ReactCarousel } from "src/component/Banner/Carousel";

export const Banner = () => {
  return (
    <div className="bg-banner ">
      <div className="flex flex-col justify-around pt-6 h-[400px] ">
        <div className="flex flex-col justify-center h-[40%] text-center">
          <h1 className="mb-4 text-6xl font-bold text-white">Cryptoverse</h1>
          <p className="font-light text-white capitalize">Get all the Info regarding your favorite Crypto Currency</p>
        </div>
        <ReactCarousel />
      </div>
    </div>
  );
};
