import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer'
import MarqueeBlock from "../components/marquee/MarqueeBlock";
import CheckRedirectFunc from "../components/CheckRedirectFunc";
import Script from "next/script";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import UpButton from "../components/ui/UpButton";
import EmptyBlock from "../components/menu/emptyBlock";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500'] });

export const metadata = {
  title: "Тольяттинский социально-педагогический колледж",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="block!">
      <head>
        <link rel="icon" href="/images/logo-favicon.png"/>
        <Script src="https://lidrekon.ru/slep/js/jquery.js" strategy="afterInteractive" />
        <Script src="https://lidrekon.ru/slep/js/uhpv-full.min.js" strategy="afterInteractive" />
      </head>
      <body className={`${roboto.className} `}>
        <CheckRedirectFunc/>
        <div className="w-full flex flex-col lg:flex-row items-center overflow-hidden relative">
          <Header>
            <Sidebar/>
          </Header>
          <EmptyBlock/>
          <div className="flex flex-col w-full gap-[1.42rem] lg:gap-14 md:gap-[3.75rem] xl:p-0 2xl:min-w-328 lg:max-w-full transition-[width] duration-500 ease-in">
            <div className="px-5 lg:px-10 flex flex-col gap-10 items-center">
              {children}
            </div>
            <MarqueeBlock/>
            <Footer/>
          </div>
          <UpButton/>
        </div>
      </body>
    </html>
  );
}