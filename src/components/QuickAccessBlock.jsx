import cardsInfo from '@/data/cardsInfo.js'
import LinkedCard from './LinkedCard.jsx'
import Image from 'next/image.js'

export default function QuickAccessBlock() {
    return (
        <div className='lg:gap-10 gap-[1.43rem] flex flex-col w-full'>
            <p className='text-[1.29rem] lg:text-[1.82rem] text-grayText font-semibold'>Быстрый доступ</p>
            <div className='grid lg:grid-cols-4 lg:grid-rows-3 grid-cols-2 grid-rows-6 gap-[1.1rem] lg:gap-4'>
                {
                    cardsInfo.map((card, index) => (
                        <LinkedCard key={index} link={card.link}> 
                            <Image src={card.image} alt="" className='lg:w-[50px]' width={30} height={50} />
                            <p className='text-center text-white/80 h-[3.42rem] lg:h-auto flex items-center'>{card.name}</p>
                        </LinkedCard>
                    ))
                }
            </div>
        </div>
    )
}