'use client'
import {useEffect, useState} from 'react'
import ArrowLong from './ArrowLong';

export default function UpButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const onTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

        document.getElementById('up').addEventListener('click', onTop)
        
        return () => buttonToUp.removeEventListener('click', onTop)
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight / 3)
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <button id='up' className={`${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10 size-[50px] transition-opacity rounded-full 
        bg-white shadow-main fixed bottom-5 right-5 cursor-pointer flex items-center justify-center`}>
            <ArrowLong style="stroke-main-blue -rotate-90"/>
        </button>
    )
}
