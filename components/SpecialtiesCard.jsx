import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function SpecialtiesCard({formEdu, periodEdu, pic = '', title, qualificaion, optional}) {
    return (
        <div className='relative overflow-hidden rounded-[10px] p-5 flex flex-col justify-between w-full min-h-70'>
            <div style={{
                backgroundImage: `url(${pic.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(50%)'
            }} className='w-full h-full -z-10 absolute inset-0'></div>
            <div className='w-full min-h-60'>
                <div className='relative flex flex-col gap-2.5 lg:gap-5 text-white'>
                    <div className='flex flex-col gap-2.5'>
                        <div className='flex gap-[5px]'>
                            <span className='bg-main-blue p-[6px] rounded-[5px]'>{formEdu}</span>
                            <span className='bg-white text-main-blue rounded-[5px] p-[6px]'>{periodEdu}</span>
                        </div>
                        <p className={`text-[1.31rem] ${raleway.className} font-medium`}>{title}</p>
                    </div>
                    <div className='flex flex-col gap-2.5 mb-10'>
                        <p>Квалификация: {qualificaion}.</p>
                        {optional !== '' && (<p>{optional}</p>)}
                    </div>
                </div>
            </div>
            <button className='bg-main-blue rounded-[10px] w-full py-3 text-white cursor-pointer hover:bg-[#0949C2] duration-100'>Подробнее</button>
        </div>
    )
}
