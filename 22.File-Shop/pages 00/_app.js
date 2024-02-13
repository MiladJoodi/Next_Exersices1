import "@/styles/globals.css";
import Header from "@/components/header";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>فروشگاه فایل</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
