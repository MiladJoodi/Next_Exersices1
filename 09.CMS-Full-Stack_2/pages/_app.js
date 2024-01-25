import "@/styles/globals.css";
import Sidebar from "@/components/modules/sidebar/Sidebar";
import Navbar from "@/components/modules/navbar/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
