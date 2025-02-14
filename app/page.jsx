import ContactsBlock from "../components/Contacts/ContactsBlock";
import DirectionEdBlock from "../components/DirectionEdBlock";
import HeadBlock from "../components/HeadBlock/HeadBlock";
import NewsBlock from "../components/news/NewsBlock";
import QuickAccessBlock from "../components/QuickAccessBlock";

export default function Home() {
  return (
    <>
      <div id="win-dark" className="hidden bg-grayText/50 top-0 left-0 z-[19] min-h-dvh w-full fixed"></div>
      <div className="m-5 px-5 w-full rounded-[1.25rem]">
        <HeadBlock/>
      </div>
      <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem] relative">
        <QuickAccessBlock/>
        <DirectionEdBlock/>
        <NewsBlock/>
        <ContactsBlock/>
      </div>
    </>
  );
}
