import ContactsBlock from "../components/Contacts/ContactsBlock";
import DirectionEdBlock from "../components/DirectionEdBlock";
import HeadBlock from "../components/HeadBlock/HeadBlock";
import NewsBlock from "../components/news/NewsBlock";
import QuickAccessBlock from "../components/QuickAccessBlock";

export default function Home() {
  return (
    <>
      <div id="win-dark" className="hidden bg-main-gray/50 top-0 left-0 z-19 min-h-dvh w-full fixed"></div>
      <div className="mt-5 mb-16 w-full rounded-[1.25rem]">
        <HeadBlock/>
      </div>
      <div className="flex flex-col gap-[1.43rem] px-[1.42rem] w-full xl:w-[73%] md:gap-[3.75rem] xl:p-0 2xl:min-w-328 lg:max-w-[80rem] relative">
        <QuickAccessBlock/>
        <DirectionEdBlock/>
        <NewsBlock/>
        <ContactsBlock/>
      </div>
    </>
  );
}