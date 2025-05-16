'use client'
import { useEffect, useRef, useState } from 'react'
import ArrowSmall from '../ui/ArrowSmall'
import DataCollegeMenu from '../menu/DataCollegeMenu'
import BPOOMenu from '../menu/BPOOMenu'
import Teachers from '../menu/collegeMenu/Teachers'
import { usePathname } from 'next/navigation'

export default function HeadingInfoPage({titlePage, type}) {
    const [isOpened, setIsOpened] = useState(false)
    const pathname = usePathname()
    const listRef = useRef()

    useEffect(() => {
        setIsOpened(false)
    }, [pathname])

    useEffect(() => {
        function handleClickOutside(event) {
            if (listRef.current && !listRef.current.contains(event.target)) {
                setIsOpened(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, []);

    let listStyles = `${isOpened ? 'flex' : 'hidden'} absolute flex-col w-full p-[1.43rem] bg-white gap-5 rounded-[1.43rem]
    lg:px-10 lg:py-5 lg:rounded-[2.5rem] z-[15] mt-2.5 shadow-main !text-base`

    return (
        <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-[1.43rem]'>
            <h1 className='lg:text-[1.81rem] text-main-gray font-medium lg:w-10/12 text-[1.28rem]'>{titlePage}</h1>
            <div ref={listRef} className='w-full relative text-18'>
                <div className='flex w-full justify-between border-main-blue/50 border-[2px] rounded-[40px] px-[1.71rem] py-[0.86rem] items-center 
                    lg:px-10 lg:py-5 cursor-pointer' onClick={() => {setIsOpened(!isOpened)}}>
                    <p className='text-main-blue'>{document.title}</p>
                    <ArrowSmall style='stroke-main-blue w-[23px] h-[12px]'/> 
                </div>
                {type === 'bpoo' && <BPOOMenu color="text-main-blue" main={listStyles}/>}
                {type === 'sveden' && <DataCollegeMenu color="text-main-blue" main={listStyles}/>}
                {type === 'teachers' && <Teachers color="!text-main-blue" main={listStyles}/>}
            </div>
        </div>
    )
}
