import HeadingInfoPage from "@/components/infoPages/HeadingInfoPage";
import { getPageTitle } from "@/lib/config/page-titles";
import mainImg from '@/img/bpoo/main.jpg'
import Image from "next/image";

export default function BPOOMainPage({params, children}) {
    const path = `/sveden${params.slug ? `/${params.slug.join('/')}` : ''}`;
    const title = getPageTitle(path, params);
    return (
        <div className="flex flex-col gap-[1.43rem] mt-[6.75rem] lg:mt-0 px-[1.42rem] lg:pt-10 w-full xl:w-[73%] md:gap-10 xl:px-0 2xl:min-w-328 lg:max-w-[80rem] relative">
            <div className='w-full lg:rounded-[1.25rem] rounded-[0.71rem] overflow-hidden'>
                <Image src={mainImg} className='w-full' alt="БПОО ТСПК" />
            </div>
            <div className="flex flex-col gap-5">
                <HeadingInfoPage 
                    type="bpoo"
                    titlePage="Базовая профессиональная образовательная организация (БПОО)"
                    title={title}/>
                <p className='text-[1.25rem]'>
                    Это профессиональная образовательная организация, обеспечивающая поддержку функционирования региональной системы профессионального образования инвалидов и лиц с ОВЗ в Самарской области. БПОО осуществляет методическое сопровождение организации и реализации профессионального образования в профессиональных образовательных организациях Самарской области.
                </p>
            </div>
            {children}
        </div>
    )
}
