import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer";
import MarqueeBlock from "@/components/marquee/MarqueeBlock";

const roboto = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Тольяттинский социально-педагогический колледж",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-blue.png"/>
      </head>
      <body className={roboto.className}>
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
