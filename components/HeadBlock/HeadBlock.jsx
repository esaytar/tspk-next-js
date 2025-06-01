'use client'
import { Raleway } from 'next/font/google';
import ArrowLong from '../ui/ArrowLong';
import useOpenSidebar from '../../store/useOpenElement';
import styles from './HeadBlock.module.css'
const raleway = Raleway({ subsets: ["latin"], weight: ['400', '700'] });

export default function HeadBlock() {
    const sidebar = useOpenSidebar()
    return (
        <div className='relative'>
            <div className={`pic w-full flex flex-col items-center lg:pt-10 lg:pb-[14rem] relative rounded-[1.25rem] overflow-hidden`}>
                <video loop autoPlay muted poster='/video/video-bg.webp' className='absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50'>
                    <source src='/video/video-main_page.mp4' type='video/mp4'/>
                </video>
                <div className={`text-white flex gap-[3.625rem] items-center w-full py-[9.7rem] px-[1.88rem] lg:pt-[15rem] lg:px-10
                    transition-all duration-700 justify-center`}>
                    <div className={`w-full flex flex-col gap-10 xl:w-[73%] md:gap-[3.75rem] xl:pl-[1.88rem] 2xl:min-w-328 lg:max-w-[80rem]
                        transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]`}>
                        <div className={`flex flex-col gap-5 ${raleway.className} `}>
                            <p className='text-base lg:text-18 '>Государственное автономное профессиональное образовательное <br /> учреждение Самарской области</p>
                            <p className='uppercase text-[2.14rem] leading-[120%] lg:text-[3rem] lg:leading-[3.52rem] font-bold'>Тольяттинский <br /> социально-педагогический колледж</p>
                        </div>
                        
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-[1.88rem] items-start leading-[1.32rem]'>
                            <button className="px-[1.86rem] py-4 lg:px-10 lg:py-[1.125rem] rounded-[1rem] gap-5 text-[1.14rem] cursor-pointer bg-main-blue flex items-center justify-center hover:bg-[#0949C2] duration-[.1s]">
                                <a href="http://x927215g.beget.tech/index.html" target="_blank" rel="noopener">Инвестируй в своё будущее</a>
                                <ArrowLong style='fill-white ml-2 hidden lg:block size-5'/>
                            </button>
                            <a href='#directions' className='border-white border-[1px] px-[1.86rem] py-4 lg:px-10 lg:py-[1.125rem] rounded-[1rem] gap-3 flex text-[1.14rem]'>
                                Направления
                                <ArrowLong style='fill-white ml-2 hidden rotate-90 lg:block size-5'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden '>
                    <div className={`${raleway.className} ${styles.marquee} flex absolute bottom-0 items-center p-5 whitespace-nowrap`}>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        <div className='inline-flex items-center gap-2.5 mx-2.5'>
                            <svg className='inline-block' width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6822 -0.00978088L15.0239 6.46366C15.2329 10.4241 18.4794 13.6003 22.4664 13.745L29.1735 13.9885L22.474 14.2321C18.4914 14.3768 15.3433 17.553 15.257 21.5134L15.1158 27.9869L14.7742 21.5134C14.5652 17.553 11.3187 14.3768 7.33163 14.2321L0.62452 13.9885L7.32409 13.745C11.3066 13.6003 14.4548 10.4241 14.5411 6.46366L14.6822 -0.00978088Z" fill="white"/>
                            </svg>
                            <p className='uppercase text-white text-[1.5rem] inline-block'>Думай иначе, будь первым</p>
                        </div>
                        
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}