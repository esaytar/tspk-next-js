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
import useOpenElement from '../../store/useOpenElement';
import useDropdown from '../../store/useDropdown';
import Search from '../Search';
import useSetSearchResults from '../../store/useSetSearchResults';
const raleway = Raleway({ subsets: ["latin"], weight: ['400', '700'] });

export default function Sidebar() { 
    const element = useOpenElement()
    const dropdown = useDropdown()
    const menuRef = useRef()
    const pathname = usePathname()
    const searchResults = useSetSearchResults((state) => state.searchResults)
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index)
    }

    useEffect(() => {
        setActiveIndex(-1)
    }, [pathname, element.isOpenSidebar])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && element) {
                element.closeSidebar()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const menuAccArray = [
        { name: 'Сведения об образовательной организации', child: <DataCollegeMenu main='pl-11 pt-5 !text-[0.875rem]'/>, img: infoImg },
        { name: 'Колледж', child: <CollegeMenu main='pl-11 pt-5 !text-[0.875rem]'/>, img: collegeImg },
        { name: 'БПОО', child: <BPOOMenu main='pl-11 pt-5 !text-[0.875rem]'/>, img: bpooImg }
    ]
    const menuArray = [
        {name: 'Расписание', imgUrl: calendImg, link: '/raspisanie'},
        {name: 'Демонcтрационный экзамен ', imgUrl: demExamImg, link: '/dem-exam'},
        {name: 'Контакты', imgUrl: contactsImg, link: '/contacts'},
    ]

    return (
        <div ref={menuRef} onClick={(e) => {if (e.target === e.currentTarget) element.openSidebar()}}
            className={`menu ${element.isOpenSidebar || dropdown.isMobileOpen ? 'lg:w-[511px]' : 'lg:w-[90px]'} border-black border-0
                fixed top-0 left-0 h-screen bg-[#111] flex flex-col justify-between p-7.5 lg:px-5 lg:py-5 z-50 w-full
                transition-all duration-500 cubic-bezier(0.65,0,0.35,1)`}>
            <div className='flex flex-col gap-6 lg:gap-10 w-full'>
                <div className={`${raleway.className} flex items-center gap-5 transition-all text-white
                duration-300 ${element.isOpenSidebar || dropdown.isMobileOpen ? 'delay-300' : 'delay-0'} relative max-h-16`}>
                    <LogoTSPK styles='fill-white hidden lg:block w-[50px] h-16' click={e => e.stopPropagation()}/>
                    <p style={{
                        transition: 'all 0.4s ease-out', 
                        transitionDelay: `${element.isOpenSidebar || dropdown.isMobileOpen ? 1 * 50 + 200 : 0}ms`,
                    }}
                        className={`${element.isOpenSidebar || dropdown.isMobileOpen ? 'opacity-100' : 'opacity-0'} 
                        hidden lg:block lg:absolute lg:left-17 lg:text-[0.875rem] 
                        transition-[opacity,max-width] duration-300 delay-75 ease-out
                        whitespace-normal overflow-hidden w-[400px]`}>
                        Государственное автономное профессиональное образовательное учреждение Самарской области &quot;Тольяттинский социально-педагогический колледж&quot;
                    </p>
                </div>
                <div className={`bg-white/5 rounded-[10px] p-4 flex items-center gap-2.5 mt-10 lg:mt-0 relative z-30 
                    transition-all duration-500 ${element.isOpenSidebar || dropdown.isMobileOpen ? 'delay-100' : 'delay-0'}`}>
                    <svg className='max-w-5 max-h-5 min-w-5 min-h-5 fill-[#D0D0D0] opacity-50' width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8247 13.9417L11.0971 10.2141C12.1129 8.97176 12.6124 7.38649 12.4921 5.78623C12.3719 4.18596 11.6412 2.69312 10.4512 1.6165C9.26112 0.539881 7.7028 -0.0381557 6.09852 0.00195626C4.49424 0.0420682 2.96676 0.697259 1.83201 1.83201C0.697259 2.96676 0.0420682 4.49424 0.00195626 6.09852C-0.0381557 7.7028 0.539881 9.26112 1.6165 10.4512C2.69312 11.6412 4.18596 12.3719 5.78623 12.4921C7.38649 12.6124 8.97176 12.1129 10.2141 11.0971L13.9417 14.8247C14.0595 14.9385 14.2172 15.0014 14.3809 15C14.5447 14.9986 14.7013 14.9329 14.8171 14.8171C14.9329 14.7013 14.9986 14.5447 15 14.3809C15.0014 14.2172 14.9385 14.0595 14.8247 13.9417ZM6.26486 11.2608C5.27676 11.2608 4.31086 10.9677 3.48929 10.4188C2.66772 9.86984 2.02738 9.08958 1.64925 8.1767C1.27112 7.26382 1.17219 6.25932 1.36496 5.29021C1.55772 4.3211 2.03354 3.43091 2.73223 2.73223C3.43091 2.03354 4.3211 1.55772 5.29021 1.36496C6.25932 1.17219 7.26382 1.27112 8.1767 1.64925C9.08958 2.02738 9.86984 2.66772 10.4188 3.48929C10.9677 4.31086 11.2608 5.27676 11.2608 6.26486C11.2593 7.58939 10.7324 8.85926 9.79585 9.79585C8.85926 10.7324 7.58939 11.2593 6.26486 11.2608Z"/>
                    </svg>
                    <Search 
                        style={element.isOpenSidebar || dropdown.isMobileOpen ? 'delay-200' : 'delay-0'}
                    />
                </div>
                <div className={`lg:h-[630px] lg:overflow-hidden transition-opacity ${searchResults.length ? 'opacity-20 ' : 'opacity-100'}`}>
                    <nav className={`h-full ${element.isOpenSidebar && activeIndex >= 0 ? 'lg:overflow-y-scroll' : ''} transition-[scroll] duration-300`}>
                        <ul className='flex flex-col gap-3 lg:gap-5'>
                            {menuAccArray.map((item, index) => (
                                <AccordionMenu
                                    key={index}
                                    child={item.child}
                                    name={item.name}
                                    index={index}
                                    activeIndex={activeIndex}
                                    onAccordionClick={handleAccordionClick}
                                    imageUrl={item.img}
                                    isSidebar={element}
                                />
                            ))}
                            {menuArray.map((item, index) => (
                                <li key={index} className='min-w-full'>
                                    <div className="border-0 border-transparent cursor-pointer bg-white/10 leading-[135%] flex w-full items-center lg:max-h-12.5 text-base rounded-[10px] p-3.75">
                                        <Link className={`flex items-center gap-2.5 transition-all text-white
                                            duration-300 ${element.isOpenSidebar || dropdown.isMobileOpen ? 'delay-300' : 'delay-0'}`} href={item.link} onClick={e => e.stopPropagation()}>
                                            <Image src={item.imgUrl} alt={item.name} className='size-5 max-w-5 max-h-5 mr-0.5'/>
                                            <p style={{transition: 'all 0.4s ease-out', transitionDelay: `${element.isOpenSidebar || dropdown.isMobileOpen ? 1 * 50 + 200 : 0}ms`}}
                                                className={`${element.isOpenSidebar || dropdown.isMobileOpen ? 'opacity-100' : 'opacity-0'} w-full lg:absolute lg:left-7 transition-all duration-300 delay-75 ease-out whitespace-nowrap`}>
                                                {item.name}
                                            </p>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='sticky -bottom-4 -mb-5 lg:mb-0 lg:bottom-0 py-5 z-10 bg-[#111] w-full'>
                <button className={`flex items-center gap-2.5 transition-all text-white bg-white/10 
                    border-0 border-transparent rounded-[10px] cursor-pointer w-full p-3.75
                    duration-300 ${element.isOpenSidebar || dropdown.isMobileOpen ? 'delay-300' : 'delay-0'}`} onClick={e => e.stopPropagation()}
                    id="specialButton"
                    title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ">
                    <Image src={eye} 
                        width={20} height={15} 
                        alt="версия для слабовидящих" 
                        style={{height: 'auto', width: 'auto'}}
                        className='size-5 max-w-5 max-h-5' />
                    <p style={{transition: 'all 0.4s ease-out', transitionDelay: `${element.isOpenSidebar || dropdown.isMobileOpen ? 1 * 50 + 200 : 0}ms`}}
                        className={`${element.isOpenSidebar || dropdown.isMobileOpen ? 'opacity-100' : 'opacity-0'}  lg:left-7 transition-all duration-300 delay-75 ease-out whitespace-nowrap`}>
                        Версия для слабовидящих
                    </p>
                </button>
            </div>
        </div>
    )
}