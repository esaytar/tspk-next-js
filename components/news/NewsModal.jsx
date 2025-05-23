'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import useHandleNews from '../../store/useHandleNews'
import closeIcon from '@/img/icons/close-icon.svg'

export default function NewsModal() {
    const textNews = useHandleNews((state) => state.textNews)
    const dateNews = useHandleNews((state) => state.dateNews)
    const imageNews = useHandleNews((state) => state.imageNews)
    const setIsOpened = useHandleNews((state) => state.setIsOpened)
    const isOpened = useHandleNews((state) => state.isOpened)

    const modalRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) setIsOpened(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isOpened, setIsOpened]);
    if (!isOpened) return null;

    return (
        <div ref={modalRef} 
        className={`modal ${isOpened ? 'flex' : 'hidden'} ${imageNews.length >= 2 ? 'flex-col gap-5' : 'lg:flex-row gap-5 lg:gap-10 flex-col'} 
        lg:w-full p-4 lg:p-10 rounded-[1rem] absolute -translate-y-1/6 top-0 lg:left-0 z-20 bg-white border border-transparent`}>
            <div className='flex flex-col gap-5 text-base lg:text-[1.25rem]'>
                <div className='flex gap-10 items-start'>
                    <p>{textNews}</p>
                    <Image src={closeIcon} alt='закрыть окно' onClick={() => setIsOpened(false)} className='cursor-pointer'/>
                </div>
                <p className='text-main-blue self-end'>{dateNews}</p>
            </div>
            <div className={`${imageNews.length >= 2 ? 'order-2 grid' : 'lg:-order-1 w-full'} lg:grid-cols-2 gap-2.5`}>
                {imageNews.map((img, index) => (
                    <div className='w-full aspect-square' key={index}>
                        <img src={img} alt='картинка новости' className='rounded-[1rem] w-full aspect-square object-cover'/>
                    </div>
                ))}
            </div>
        </div>
    )
}
