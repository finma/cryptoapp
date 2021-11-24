import "tailwindcss/tailwind.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { CryptoContext } from "src/context/CryptoContex";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>nexst</title>
      </Head>
      <CryptoContext>{getLayout(<props.Component {...props.pageProps} />)}</CryptoContext>
    </>
  );
};

export default App;
