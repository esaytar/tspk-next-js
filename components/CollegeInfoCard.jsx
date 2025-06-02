import Image from 'next/image'
import Link from 'next/link'

export default function CollegeInfoCard({urlImage, text, link}) {
    return (
        <div className='bg-white/5 rounded-[10px] p-5 shadow-main flex flex-col gap-5'>
            <Image src={urlImage} className='w-full rounded-[10px]' alt={text}/>
            <div className='h-full flex flex-col justify-between gap-5'>
                <p className='font-medium text-[1.31rem] leading-[1.54rem] text-main-gray text-center'>{text}</p>
                <Link href={link} 
                className='w-full text-main-blue p-[1.125rem] border border-main-blue rounded-[10px] text-center
                hover:bg-main-blue hover:text-white cursor-pointer'>Перейти</Link>
            </div>
        </div>
    )
}
