import Image from 'next/image'
import React from 'react'
import Bucycin from '@/img/employees-images/Bucycin.png'

export default function EmployeeCard() { 
    return (
        <div className='flex flex-col gap-3 lg:gap-5'>
            <div className='relative before:size-[302px] before:bg-main-blue before:absolute before:-z-10 before:rounded-[20px] before:bottom-0'>
                <Image src={Bucycin} alt='аватар' />
            </div>
            <p className='text-[1.312rem] font-medium'>Фамилия Имя Отчество</p>
            <ul className='flex flex-col gap-[0.36rem] lg:gap-2.5 text-18 text-main-gray/50'>
                <li>должность</li>
                <li>номер телефона</li>
                <li>электронная почта</li>
                <li>график приема 1</li>
                <li>график приема 2</li>
            </ul>
        </div>
    )
}
