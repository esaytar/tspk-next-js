'use client'
import closeIcon from '@/img/icons/close-icon.svg'
import useOpenElement from '../store/useOpenElement'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function ChooseDocModal() {
    const setIsOpenedModalDoc = useOpenElement((state) => state.setIsOpenedModalDoc)
    const isModalDocOpen = useOpenElement((state) => state.isModalDocOpen)
    const modalRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) setIsOpenedModalDoc(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isModalDocOpen, setIsOpenedModalDoc]);

    return (
        <div ref={modalRef} className={`modal ${isModalDocOpen ? 'flex' : 'hidden'} fixed -translate-1/2 max-w-[81rem] w-full left-1/2 top-1/2 flex-col bg-white p-10 gap-10 rounded-2xl z-50`}>
            <div className='flex w-full justify-between'>
                <h3 className='font-medium text-[1.81rem]'>Заказ справки в учебной части</h3>
                <Image src={closeIcon} alt='закрыть окно' onClick={() => setIsOpenedModalDoc(false)} className='cursor-pointer'/>
            </div>
            <p className='text-[1.25rem]'>Теперь заказать справку в учебной части можно онлайн. Для этого нужно заполнить форму в YandexForms</p>
            <div className='flex w-full gap-10'>
                <div className='w-full bg-white rounded-[10px] flex flex-col justify-center items-center gap-5 shadow-main py-5'>
                    <p className='text-[1.25rem]'>Очная форма обучения</p>
                    <p className='text-18'>Для студентов, посещающих занятия ежедневно</p>
                    <a href='https://forms.yandex.ru/u/624426f8af261e15d298638a/' target='_blank' className='bg-main-blue rounded-[10px] py-3 px-8 text-white'>Заказать справку</a>
                </div>
                <div className='w-full bg-white rounded-[10px] flex flex-col justify-center items-center gap-5 shadow-main py-5'>
                    <p className='text-[1.25rem]'>Заочная форма обучения</p>
                    <p className='text-18'>Для студентов, обучающихся дистанционно или по выходным</p>
                    <a href='https://forms.yandex.ru/u/633e7171d6485bd49007150b/' target='_blank' className='bg-main-blue rounded-[10px] py-3 px-8 text-white'>Заказать справку</a>
                </div>
            </div>
        </div>
    )
}
