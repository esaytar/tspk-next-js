"use client"
import Image from 'next/image'
import Link from 'next/link';
import { Raleway } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from "next/navigation"
import eye from '@/img/icons/eye.svg'
import LogoTSPK from '../ui/icons/LogoTSPK'
import AccordionMenu from '../menu/AccordionMenu';
import DataCollegeMenu from '../menu/DataCollegeMenu';
import CollegeMenu from '../menu/CollegeMenu';
import BPOOMenu from '../menu/BPOOMenu';
import infoImg from '@/img/icons/info-icon.svg'
import collegeImg from '@/img/icons/college-icon.svg'
import bpooImg from '@/img/icons/bpoo-icon.svg'
import calendImg from '@/img/icons/calendar-icon.svg'
import demExamImg from '@/img/icons/pause-icon.svg'
import contactsImg from '@/img/icons/contacts-icon.svg'
import useOpenSidebar from '../../store/useOpenSidebar';
const raleway = Raleway({ subsets: ["latin"], weight: ['400', '700'] });

export default function Sidebar() { 
    const sidebar = useOpenSidebar()
    const menuRef = useRef()
    const pathname = usePathname()
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index)
    }

    useEffect(() => {
        setActiveIndex(-1)
    }, [pathname])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && sidebar) {
                sidebar.close()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const menuAccArray = [
        { name: 'Сведения об образовательной организации', child: <DataCollegeMenu color='text-white/60!' main='pl-11 pt-5'/>, img: infoImg },
        { name: 'Колледж', child: <CollegeMenu color='text-white/60!' main='pl-11 pt-5'/>, img: collegeImg },
        { name: 'БПОО', child: <BPOOMenu color='text-white/60!'  main='pl-11 pt-5'/>, img: bpooImg }
    ]
    const menuArray = [
        {name: 'Расписание', imgUrl: calendImg, link: '/raspisanie'},
        {name: 'Демонcтрационный экзамен ', imgUrl: demExamImg, link: '/dem-exam'},
        {name: 'Контакты', imgUrl: contactsImg, link: '/contacts'},
    ]

    return (
        <div ref={menuRef} className={`menu ${sidebar.isOpen ? 'lg:w-[511px]' : 'lg:w-[90px]'} fixed top-0 left-0 h-screen bg-[#111] flex justify-between flex-col px-5 py-5 z-50 w-full transition-menu-open ease-in duration-300`}
        onClick={() => sidebar.open()}>
            <div className='flex flex-col gap-10 w-full'>
                <div className={`${raleway.className} flex gap-5 items-center max-h-16 relative`}>
                    <LogoTSPK styles='fill-white hidden lg:block w-[50px] h-16'/>
                    <p className={`${sidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible'} absolute left-17 max-h-16 lg:text-[0.875rem] font-medium text-white`}>Государственное автономное профессиональное образовательное учреждение Самарской области &quot;Тольяттинский социально-педагогический колледж&quot;</p>
                </div>
                <div className='bg-white/5 rounded-[10px] p-4 flex items-center gap-2.5 mt-[50px] lg:mt-0 max-h-12.5'>
                    <svg className='max-w-5 max-h-5 min-w-5 min-h-5' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8247 13.9417L11.0971 10.2141C12.1129 8.97176 12.6124 7.38649 12.4921 5.78623C12.3719 4.18596 11.6412 2.69312 10.4512 1.6165C9.26112 0.539881 7.7028 -0.0381557 6.09852 0.00195626C4.49424 0.0420682 2.96676 0.697259 1.83201 1.83201C0.697259 2.96676 0.0420682 4.49424 0.00195626 6.09852C-0.0381557 7.7028 0.539881 9.26112 1.6165 10.4512C2.69312 11.6412 4.18596 12.3719 5.78623 12.4921C7.38649 12.6124 8.97176 12.1129 10.2141 11.0971L13.9417 14.8247C14.0595 14.9385 14.2172 15.0014 14.3809 15C14.5447 14.9986 14.7013 14.9329 14.8171 14.8171C14.9329 14.7013 14.9986 14.5447 15 14.3809C15.0014 14.2172 14.9385 14.0595 14.8247 13.9417ZM6.26486 11.2608C5.27676 11.2608 4.31086 10.9677 3.48929 10.4188C2.66772 9.86984 2.02738 9.08958 1.64925 8.1767C1.27112 7.26382 1.17219 6.25932 1.36496 5.29021C1.55772 4.3211 2.03354 3.43091 2.73223 2.73223C3.43091 2.03354 4.3211 1.55772 5.29021 1.36496C6.25932 1.17219 7.26382 1.27112 8.1767 1.64925C9.08958 2.02738 9.86984 2.66772 10.4188 3.48929C10.9677 4.31086 11.2608 5.27676 11.2608 6.26486C11.2593 7.58939 10.7324 8.85926 9.79585 9.79585C8.85926 10.7324 7.58939 11.2593 6.26486 11.2608Z" fill="white" fillOpacity="0.5"/>
                    </svg>
                    <input type="text" placeholder='Поиск' className={`${sidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible'} transition-opacity duration-300  bg-transparent text-base text-white w-full`} />
                </div>
                <div className='h-[630px] overflow-hidden'>
                    <nav className={`h-full ${sidebar.isOpen && activeIndex >= 0 ? 'overflow-y-scroll' : ''} transition-[scroll] duration-300`}>
                        <ul className='flex flex-col gap-5'>
                            {menuAccArray.map((item, index) => (
                                <AccordionMenu
                                    key={index}
                                    child={item.child}
                                    name={item.name}
                                    index={index}
                                    activeIndex={activeIndex}
                                    onAccordionClick={handleAccordionClick}
                                    imageUrl={item.img}
                                    isSidebar={sidebar}
                                />
                            ))}
                            {menuArray.map((item, index) => (
                                <li key={index}>
                                    <div className="cursor-pointer bg-white/10 leading-[135%] max-h-12.5 text-base rounded-[10px] p-4">
                                        <Link className="text-white flex items-center gap-2.5 w-64 " href={item.link}>
                                            <Image src={item.imgUrl} alt={item.name} className='max-w-5 max-h-5 size-5' />
                                            <p className={`${sidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible cursor-default'} transition-opacity duration-300 `}>{item.name}</p>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='sticky bottom-0 py-5 z-10 bg-[#111] w-full'>
                <button
                    id="specialButton"
                    title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" 
                    className='rounded-[10px] min-h-12.5 max-h-12.5 p-4 flex gap-2.5 cursor-pointer bg-white/10 items-center w-full duration-100'>
                    <Image src={eye} 
                        width={20} height={15} 
                        alt="версия для слабовидящих" 
                        style={{height: 'auto', width: 'auto'}}
                        className='size-5 max-w-5 max-h-5' />
                    <p className={`text-white transition-opacity duration-300 ${sidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>Версия для слабовидящих</p>
                </button>
            </div>
        </div>
    )
}