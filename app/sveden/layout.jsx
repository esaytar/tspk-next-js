import HeadingInfoPage from "@/components/infoPages/HeadingInfoPage";
import { getPageTitle } from "@/lib/config/page-titles";
import GetTitleFunction from "../../components/infoPages/GetTitleFunction";

export default async function SvedenLayout({ children  }) {
  return (
    <>
      <div className="flex flex-col gap-[1.43rem] px-[1.42rem] lg:pt-10 w-full xl:w-[73%] md:gap-[3.75rem] xl:px-0 2xl:min-w-328 lg:max-w-[80rem] relative">
        
        <GetTitleFunction/>
        <HeadingInfoPage 
          type="sveden"
          titlePage="Сведения об образовательной организации"/>
        {children}
      </div>
    </>
  );
}