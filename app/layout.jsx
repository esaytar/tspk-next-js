import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer'
import MarqueeBlock from "../components/marquee/MarqueeBlock";
import CheckRedirectFunc from "../components/CheckRedirectFunc";
import Script from "next/script";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ArrowLong from "../components/ui/ArrowLong";

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
      <body className={`${roboto.className} `}>
        <CheckRedirectFunc/>
        <div className="w-full flex flex-col lg:flex-row items-center overflow-hidden relative">
          <Header/>
          <div className="hidden lg:block">
            <Sidebar/>
          </div>
          <div className="min-w-[27%] min-h-screen hidden lg:block"></div>
          <div className="flex flex-col w-full gap-[1.42rem] lg:gap-14 lg:max-w-[73%]">
            <div className="px-5 lg:px-10 flex flex-col gap-10">
              {children}
            </div>
            <MarqueeBlock/>
            <Footer/>
          </div>
          <div className="size-[50px] rounded-4xl bg-white shadow-newShad px-6 py-4 absolute top-0 right-0">
            <ArrowLong style="stroke-mainBlue -rotate-90"/>
          </div>
        </div>
      </body>
    </html>
  );
}