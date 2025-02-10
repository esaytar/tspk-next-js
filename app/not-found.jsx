import Link from 'next/link'
import Image from 'next/image'
import girl from '@/img/girl-404.png'
import ArrowSmall from '../components/ui/ArrowSmall'

export default function notFound() {
    return (
        <div className='flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[6.5rem] 
            lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:mt-[10rem]'>
            <div className='w-full flex justify-between flex-col lg:flex-row'>
                <Image src={girl} alt='Страница недоступна' style={{width: 'auto', height: 'auto'}}/>
                <div className='flex flex-col lg:gap-10 gap-[1.42rem] lg:p-10 py-[1.42rem]'>
                    <h1 className='text-mainBlue font-medium text-[7.14rem] lg:text-[6.25rem] '>404</h1>
                    <div className='flex flex-col lg:gap-5 gap-[0.71rem]'>
                        <p className='font-medium lg:text-[1.88rem] text-[1.93rem]'>Страница не найдена</p>
                        <p className='lg:text-[1.5rem] text-[1.36rem] leading-7 text-grayMainText'>Кажется, вы заблудились! Пожалуйста, проверьте правильность введенного адреса или вернитесь на главную страницу. Надеемся, что вы скоро найдете то, что ищете.</p>
                    </div>
                    <Link href="/" className='text-mainBlue flex gap-2.5 text-[1.5rem] items-center'>На главную <ArrowSmall style='stroke-mainBlue -rotate-90 h-[10px] w-[15px]'/></Link>
                </div>
            </div>
        </div>
    )
}