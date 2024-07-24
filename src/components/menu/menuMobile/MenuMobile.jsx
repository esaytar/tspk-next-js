import React, { useState } from 'react'
import './MenuMobile.css'
import Telegram from '../../../assets/icons/components/Telegram'
import Vk from '../../../assets/icons/components/Vk'
import eye from '../../../assets/icons/eye.svg'
import DataCollegeMenu from '../DataCollegeMenu'
import CollegeMenu from '../CollegeMenu'
import BPOOMenu from '../BPOOMenu'
import AccordionMenu from '../AccordionMenu'
import { Link } from 'react-router-dom'

export default function MenuMobile({status}) {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const menuArray = [
        {
            name: 'Сведения об образовательной организации',
            child: <DataCollegeMenu main='gap-[0.71rem] pb-[1.43rem]'/>
        },
        {
            name: 'Колледж',
            child: <CollegeMenu main='flex-col gap-[0.71rem] pb-[1.43rem]'/>
        },
        {
            name: 'БПОО',
            child: <BPOOMenu main='gap-[0.71rem] pb-[1.43rem]'/>
        }
    ]

    return (
        <div className={`${status}menuMobile absolute -translate-x-1/2 left-1/2 w-screen max-h-screen h-dvh flex flex-col justify-between bg-mainGray px-[1.88rem] pt-[6.75rem] pb-[1rem] z-[5]`}>
            <nav>
                <ul className='flex flex-col'>
                    {
                        menuArray.map((item, index) => (
                            <AccordionMenu
                                key={index}
                                child={item.child}
                                name={item.name}
                                index={index}
                                activeIndex={activeIndex}
                                onAccordionClick={handleAccordionClick}
                            />
                        ))
                    }
                    <li className='text-[1.14rem] pb-[1.43rem]'><span></span><Link className="!text-white" to="/dem-exam">Демонcтрационный экзамен</Link></li>
                    <li className='text-[1.14rem] pb-[1.43rem]'><span></span><Link className="!text-white" to="/contacts">Контакты</Link></li>
                </ul>
            </nav>
            <div className='flex w-full justify-between mt-6'>
                <button>
                    <img src={eye} alt="" />
                </button>
                <div className='mob-social flex gap-[1.43rem] items-center'>
                    <Vk/>
                    <Telegram/>
                </div>
            </div>
        </div>
    )
}
