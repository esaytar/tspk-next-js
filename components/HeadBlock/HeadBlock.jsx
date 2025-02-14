import styles from './HeadBlock.module.css'
import arrowLong from '@/img/icons/arrow-long.svg'
import Image from "next/image";
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ["latin"], weight: ['400', '700'] });

export default function HeadBlock() {
    return (
        <div className={` pic w-full flex flex-col items-center lg:pt-10 lg:pb-[16rem] relative`}>
            <video loop autoPlay muted poster='/video/video-bg.png' className='absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50'>
                <source src='/video/video-main_page.mp4' type='video/mp4'/>
            </video>
            <div className='text-white flex gap-[3.625rem] items-center w-full py-[9.7rem] px-[1.88rem]
            lg:max-w-[80rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:pt-[15rem] lg:px-0'>
                <div className='w-full flex flex-col gap-10 lg:max-w-[29rem]'>
                    <div className={`flex flex-col gap-5  ${raleway.className}`}>
                        <p className='text-base lg:text-18'>Государственное автономное профессиональное образовательное учреждение Самарской области</p>
                        <p className='uppercase text-[2.14rem] leading-[120%] lg:text-[3rem] lg:leading-[3.52rem] font-bold'>Тольяттинский социально-педагогический колледж</p>
                    </div>
                    <div className='flex flex-col gap-5 lg-gap-[1.88rem] items-start leading-[1.32rem]'>
                        <button className="px-[1.86rem] py-4 lg:px-10 lg:py-[1.125rem] rounded-[1rem] gap-5 text-[1.14rem] bg-mainBlue flex items-center justify-center hover:bg-[#0949C2] duration-[.1s]">
                            <a href="http://x927215g.beget.tech/index.html" target="_blank" rel="noopener">Инвестируй в своё будущее</a>
                            <Image src={arrowLong} className={styles.image} alt="стрелка вправо" />
                        </button>
                        <a href='#directions'
                        className='border-white border-[1px] px-[1.86rem] py-4 lg:px-10 lg:py-[1.125rem] rounded-[1rem] gap-3 flex text-[1.14rem]'>
                            Направления
                            <Image src={arrowLong} className={`rotate-90 ${styles.image}`} alt="стрелка вниз" />
                        </a>
                    </div>
                </div>
                {/* <div className='hidden lg:block w-full relative'>
                    <Image src="https://i.mycdn.me/getVideoPreview?id=2754291698396&idx=1&type=39&tkn=YoYKFIhtGVnCN82LSTsOni2ChYs&fn=vid_x&quot;" alt="картинка из видео" width={842} height={550}/>
                    <iframe className='absolute left-0 top-0 w-full h-full' src="https://vk.com/video_ext.php?oid=-174700694&id=456239521&hd=1" width="842" height="550" allow="encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
                </div> */}
            </div>
        </div>
    )
}