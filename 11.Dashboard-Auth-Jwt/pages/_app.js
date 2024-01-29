import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import localFont from 'next/font/local'

const myFont = localFont({src: './IRANSansDN-Bold.ttf'})

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
    <Component {...pageProps} />
  </main>
    )
}
