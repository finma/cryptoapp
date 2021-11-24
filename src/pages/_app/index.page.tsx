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
        <title>nexst</title>
      </Head>
      <CryptoContext>{getLayout(<props.Component {...props.pageProps} />)}</CryptoContext>
    </>
  );
};

export default App;
