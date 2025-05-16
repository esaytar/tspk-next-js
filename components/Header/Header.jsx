'use client'
import { usePathname } from "next/navigation"
import {useRef, useState, useEffect} from 'react'
import useDropdown from '../../store/useDropdown'
import styles from './Header.module.css'
import LogoTSPK from "../ui/icons/LogoTSPK"
import MenuMobile from "../menu/menuMobile/MenuMobile"

export default function Header({children}) {
    const dropdown = useDropdown()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [transparent, setTransparent] = useState(true)
    const [isMobile, setIsMobile] = useState(true)
    const menuRef = useRef()

    const isTransparence = transparent && isMobile && pathname === '/'
    
    useEffect(() => {
        pathname !== '/' ? setTransparent(true) : setTransparent(false)
    }, [pathname])

    useEffect(() => {
        if (pathname === '/') {
            function handleScroll() {
                const scrollY = window.scrollY
                const heightPic = document.querySelector('.pic') ? document.querySelector('.pic').offsetHeight : null
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
        const prevWidth = window.innerWidth;

        function handleResize() {
            const currentWidth = window.innerWidth;
            if (currentWidth === prevWidth) return;
            
            if (currentWidth > 1024) {
                dropdown.close();
            } else {
                dropdown.closeMobile();
            }
            setIsMobile(currentWidth <= 1024);
        }

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dropdown]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) dropdown.close()
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className='flex w-full lg:max-w-[90px] lg:h-dvh justify-center absolute left-0 lg:mt-10 z-50'>
            <header style={isTransparence ? {backgroundColor: "transparent"} : {backgroundColor: "white"}} 
                className={`${styles.header} ${isTransparence ? styles.light : styles.dark} ${dropdown.isMobileOpen ? styles.opened : ''} px-[1.88rem] py-[1.25rem] duration-[.2s] flex justify-between w-full lg:w-auto items-center fixed z-21 bg-none lg:rounded-[1rem] lg:px-0 lg:py-0`}>
                <LogoTSPK styles={`lg:hidden w-[3.2rem]`}/>
                <button className={`${styles.btnBurger} icon flex flex-col gap-[7px] lg:hidden z-10 cursor-pointer`} onClick={() => dropdown.reverseStatus()}>
                    <span className={styles.line}></span>
                </button>
                <MenuMobile status={dropdown.isMobileOpen ? 'active' : ''}>
                    {children}
                </MenuMobile>    
            </header>
        </div>
    )
}