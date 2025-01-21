'use client'
import { usePathname } from "next/navigation"
import {useRef, useState, useEffect} from 'react'
import useDropdown from '../../store/useDropdown'
import dynamic from "next/dynamic"
import Link from "next/link"
import eye from '@/img/icons/eye.svg'
import Image from "next/image";
import styles from './Header.module.css'
import LogoTSPK from "../ui/icons/LogoTSPK"
import ArrowSmall from '.././ui/ArrowSmall'
const DropDownMenu = dynamic(() => import('../menu/DropDownMenu'))
const MenuMobile = dynamic(() => import('../menu/menuMobile/MenuMobile'))

export default function Header() {
    const dropdown = useDropdown()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [resultMenu, setResultMenu] = useState()
    const [counter, setCounter] = useState(0)
    const [transparent, setTransparent] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const menuRef = useRef()

    const linkArray = ['Сведения об образовательной организации', 'Колледж', 'БПОО']

    useEffect(() => {
        pathname !== '/' ? setTransparent(true) : setTransparent(false)
    }, [pathname])

    useEffect(() => {
        if (pathname === '/') {
            function handleScroll() {
                const scrollY = window.scrollY
                const heightPic = document.querySelector('.pic').offsetHeight
                const headerHeight = document.querySelector('header').offsetHeight
                
                if (isMobile) {
                    if (scrollY >= heightPic) {
                        setIsScrolled(true); 
                        setTransparent(false); 
                    } else if (scrollY > headerHeight) {
                        setIsScrolled(false); 
                        setTransparent(false);
                    } else {
                        setIsScrolled(false); 
                        setTransparent(true); 
                    }
                } else {
                    if (scrollY >= heightPic) {
                        setIsScrolled(true); 
                        setTransparent(false); 
                    } else {
                        setIsScrolled(false); 
                        setTransparent(false); 
                    }
                }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname, isMobile])

    useEffect(() => {
        function resize() {
            if (window.innerWidth > 1024) dropdown.close()
            else dropdown.closeMobile()
            setIsMobile(window.innerWidth <= 1024)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) dropdown.close()
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    const openDropDownMenu = (e) => {
        setCounter((counter) => counter + 1)
        dropdown.open()
        setResultMenu(e.target.textContent)
        if (counter >= 1 && e.target.textContent === resultMenu) {
            setCounter(0)
            dropdown.close()
        }
    }

    return (
        <div ref={menuRef} className='flex w-full justify-center absolute left-0 lg:mt-10'>
            <header style={transparent && isMobile && pathname === '/' ? {backgroundColor: "transparent"} : {}} 
                className={`${styles.header} ${isScrolled || pathname !== '/' ? styles.light : styles.dark} ${dropdown.isMobileOpen ? styles.opened : ''}
                px-[1.88rem] py-[1.25rem] duration-[.2s] w-full flex justify-between items-center fixed z-[21] 
                lg:max-w-[80rem] lg:rounded-[1rem] lg:px-10 lg:py-5 2xl:max-w-[73%] 2xl:min-w-[84.5rem]`}>
                <LogoTSPK/>
                <ul className='text-white gap-5 lg:gap-10 items-center hidden lg:flex '>
                    {linkArray.map((link, index) => (
                        <li key={index} className='flex gap-[0.32rem] items-center cursor-pointer' onClick={openDropDownMenu}>
                            {link}
                            <ArrowSmall style={`${styles.arrowBottom} ${dropdown.isOpen && resultMenu === link ? 'rotate-180' : ''}`}/>
                        </li>
                    ))}
                    <li><Link href='/dem-exam'>Демонcтрационный экзамен</Link></li>
                    <li><Link href='/contacts'>Контакты</Link></li>
                </ul>
                <button className={`${styles.btnBurger} flex flex-col gap-[7px] lg:hidden z-10 pointer`} onClick={() => dropdown.reverseStatus()}>
                    <span className={styles.line}></span>
                </button>
                <MenuMobile status={dropdown.isMobileOpen ? 'active' : ''} style={styles.menuMobile}/>
                <button className='rounded-[0.32rem] lg:flex hidden bg-mainBlue items-center justify-center hover:bg-[#0949C2] duration-[.1s]'>
                    <Image src={eye} 
                    alt="версия для слабовидящих" 
                    width={40} height={40} 
                    style={{height: 'auto', width: 'auto'}} />
                </button>
            </header>
            <DropDownMenu 
                styles={`${isScrolled || pathname !== '/' ? styles.light : styles.dark} ${dropdown.isOpen ? 'block' : 'hidden'}`} 
                main='gap-5'
                content={resultMenu}
                linkValue={linkArray}
            />
        </div>
    )
}
