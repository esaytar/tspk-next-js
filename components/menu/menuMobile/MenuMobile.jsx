import React, { useState } from 'react'
import './MenuMobile.css'
import Telegram from '../../ui/icons/Telegram'
import Vk from '../../ui/icons/Vk'
import eye from '@/img/icons/eye.svg'
import DataCollegeMenu from '../DataCollegeMenu'
import CollegeMenu from '../CollegeMenu'
import BPOOMenu from '../BPOOMenu'
import AccordionMenu from '../AccordionMenu'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuMobile({status, style}) {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const menuArray = [
        { name: 'Сведения об образовательной организации', child: <DataCollegeMenu color='!text-white/60' main='gap-[0.71rem] pb-[1.43rem]'/> },
        { name: 'Колледж', child: <CollegeMenu color='!text-white/60' main='flex-col gap-[0.71rem] pb-[1.43rem]'/> },
        { name: 'БПОО', child: <BPOOMenu color='!text-white/60'  main='gap-[0.71rem] pb-[1.43rem]'/> }
    ]

    return (
        <div className={`${status} ${style} dark menuMobile absolute -translate-x-1/2 left-1/2 w-screen max-h-screen h-dvh flex flex-col justify-between bg-mainGray px-[1.88rem] pt-[6.75rem] pb-[1rem] z-[5]`}>
            <nav>
                <ul className='flex flex-col'>
                    {menuArray.map((item, index) => (
                        <AccordionMenu
                            key={index}
                            child={item.child}
                            name={item.name}
                            index={index}
                            activeIndex={activeIndex}
                            onAccordionClick={handleAccordionClick}
                        />
                    ))}
                    <li className='text-[1.14rem] pb-[1.43rem]'><span></span><Link className="!text-white" href="/dem-exam">Демонcтрационный экзамен</Link></li>
                    <li className='text-[1.14rem] pb-[1.43rem]'><span></span><Link className="!text-white" href="/contacts">Контакты</Link></li>
                </ul>
            </nav>
            <div className='flex w-full justify-between mt-6'>
                <button>
                    <Image src={eye} alt="" />
                </button>
                <div className='mob-social flex gap-[1.43rem] items-center'>
                    <Vk/>
                    <Telegram/>
                </div>
            </div>
        </div>
    )
}
