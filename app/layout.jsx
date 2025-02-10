import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from '../components/Footer'
import MarqueeBlock from "../components/marquee/MarqueeBlock";
import CheckRedirectFunc from "../components/CheckRedirectFunc";
import Script from "next/script";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500'] });

export const metadata = {
  title: "Тольяттинский социально-педагогический колледж",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="!block">
      <head>
        <link rel="icon" href="/images/logo-blue.png"/>
        <Script src="https://lidrekon.ru/slep/js/jquery.js" strategy="afterInteractive" />
        <Script src="https://lidrekon.ru/slep/js/uhpv-full.min.js" strategy="afterInteractive" />
      </head>
      <body className={roboto.className}>
        <CheckRedirectFunc/>
        <div className="w-full flex flex-col items-center gap-[1.43rem] overflow-hidden md:gap-[3.75rem]">
          <Header/>
          {children}
          <MarqueeBlock/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
