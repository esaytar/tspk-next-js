import ContactsBlock from "@/components/ContactsBlock";
import HeadBlock from "@/components/HeadBlock/HeadBlock";
import QuickAccessBlock from "@/components/QuickAccessBlock";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeadBlock/>
      <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full
        lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem]">
        <QuickAccessBlock/>
        <ContactsBlock/>
      </div>
    </>
  );
}
