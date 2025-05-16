import React from 'react'
import LogoTSPK from '../../components/ui/icons/LogoTSPK'
import { basicInfo } from '../../content/collegeInfo';
import InfoString from '../../components/infoPages/InfoString';

const title = 'Основные сведения'

export const metadata = {
  title: title,
  description: "",
};

export default function Sveden() {

    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            <LogoTSPK styles='fill-gray-main-text w-[79px] h-[59px]'/>
            {basicInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}
                >
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5'>{contentItem}</div>
                        )
                    ) : (
                        <div>{item.content}</div>
                    )}
                </InfoString>
            ))}
            <p className='text-[12px] text-grayMainText text-center lg:text-left'>Вся представленная на данной странице информация полностью соответствует Приказу Федеральной службы по надзору в сфере образования и науки от 14.08.2020 № 831 "Об утверждении Требований к структуре официального сайта образовательной организации в информационно-телекоммуникационной сети "Интернет" и формату представления информации" (Зарегистрированному 12.11.2020 № 60867)</p>
        </div>
    )
}