import Image from 'next/image'
import React from 'react'

export default function CollegeInfoCard({urlImage, text, link}) {
    return (
        <div className='bg-white/5 rounded-[10px] p-5 shadow-main flex flex-col gap-5'>
            <Image src={urlImage} className='w-full rounded-[10px] h-full' alt={text}/>
            <p className='font-medium text-[1.31rem] leading-[1.54rem] text-main-gray text-center'>{text}</p>
            <a href={link} 
            className='w-full text-main-blue p-[1.125rem] border border-main-blue rounded-[10px] text-center
            hover:bg-main-blue hover:text-white cursor-pointer'>Перейти</a>
        </div>
    )
}
