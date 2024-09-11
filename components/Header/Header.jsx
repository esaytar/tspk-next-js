'use client'
import Link from "next/link"
import eye from '@/img/icons/eye.svg'
import Image from "next/image";
import { usePathname } from "next/navigation"
import {useRef, useState, useEffect} from 'react'
import './Header.css'
import LogoTSPK from "../ui/icons/LogoTSPK"
import ArrowSmall from '.././ui/ArrowSmall'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [resultMenu, setResultMenu] = useState()
    const [counter, setCounter] = useState(0)
    const menuRef = useRef()
    // const {isActiveMenu, changeStatusMenu, changeStatusDropdown, isOpened, setFalseStatus} = useContext(MyContext)
    const [transparent, setTransparent] = useState(false)
    const pathname = usePathname()

    const linkArray = ['Сведения об образовательной организации', 'Колледж', 'БПОО']

    useEffect(() => {
        pathname !== '/' ? setTransparent(true) : setTransparent(false)
    }, [pathname])  

    useEffect(() => {
        if (location.pathname === '/') {
            function handleScroll() {
                const scrollY = window.scrollY
                let heightPic = document.querySelector('.picture').offsetHeight
                let headerHeight = document.querySelector('header').offsetHeight
                if (scrollY >= heightPic) { 
                    setIsScrolled(true)
                    setTransparent(true)
                } else if (headerHeight < scrollY) {
                    setIsScrolled(false)
                    setTransparent(true)
                } else {
                    setIsScrolled(false)
                    setTransparent(false)
                }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) changeStatusDropdown(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    const openDropDownMenu = (e) => {
        setCounter((counter) => counter + 1)
        changeStatusDropdown(true)
        setResultMenu(e.target.textContent)
        if (counter >= 1 && e.target.textContent === resultMenu) {
            setCounter(0)
            changeStatusDropdown(false)
        }
    }

    // useEffect(() => {
    //     function resize() {
    //         if (window.innerWidth > 1024) setFalseStatus(false)
    //     }

    //     window.addEventListener('resize', resize)
    //     return () => window.removeEventListener('resize', resize)
    // }, [])

    return (
        <div ref={menuRef} className='flex w-full justify-center absolute left-0 lg:mt-10'>
            <header
                className={`dark px-[1.88rem] py-[1.25rem] duration-[.2s] w-full flex justify-between items-center fixed z-20 
                lg:max-w-[80rem] lg:rounded-[1.06rem] lg:px-10 lg:py-5 2xl:max-w-[73%] 2xl:min-w-[84.5rem]`}>
                <LogoTSPK/>
                <ul className='text-white gap-5 lg:gap-10 items-center hidden lg:flex '>
                    {
                        linkArray.map((link, index) => (
                            <li key={index} className='flex gap-[0.32rem] items-center cursor-pointer' onClick={openDropDownMenu}>
                                {link}
                                <ArrowSmall style={`${ resultMenu === link ? 'rotate-180' : ''}`}/>
                                {/* <ArrowSmall style={`${isOpened && resultMenu === link ? 'rotate-180' : ''}`}/> */}
                            </li>
                        ))
                    }
                    <li><Link href='/dem-exam'>Демонcтрационный экзамен</Link></li>
                    <li><Link href='/contacts'>Контакты</Link></li>
                </ul>
                <button className='btnBurger flex flex-col gap-[7px] lg:hidden z-10 pointer'>
                    <span className="line"></span>
                </button>
                {/* <MenuMobile status={isActiveMenu ? 'active ' : ''}/> */}
                <button className='rounded-[0.32rem] lg:flex hidden bg-mainBlue items-center justify-center hover:bg-[#0949C2] duration-[.1s]'>
                    <Image src={eye} alt="версия для слабовидящих" width={40} height={40}/>
                </button>
            </header>
            {/* <DropDownMenu 
                styles={`${isScrolled || location.pathname !== '/' ? `light` : `dark`} ${isOpened ? 'block' : 'hidden'}`} 
                main='gap-5'
                content={resultMenu}
                linkValue={linkArray}
                >
            </DropDownMenu> */}
        </div>
    )
}
