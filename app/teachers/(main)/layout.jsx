import HeadingInfoPage from "@/components/infoPages/HeadingInfoPage";
import { getPageTitle } from "@/lib/config/page-titles";

export default function TeachersLayout({ children, params  }) {
  const path = `/sveden${params.slug ? `/${params.slug.join('/')}` : ''}`;
  const title = getPageTitle(path, params);
  return (
    <>
      <div className="flex flex-col gap-[1.43rem] px-[1.42rem] lg:pt-10 w-full xl:w-[73%] md:gap-[3.75rem] xl:px-0 2xl:min-w-328 lg:max-w-[80rem] relative">
        <HeadingInfoPage 
          type="teachers"
          titlePage="Преподавателям"
          title={title}/>

        {children}
      </div>
    </>
  );
}