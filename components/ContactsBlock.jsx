import phone from '@/img/icons/phone.svg'
import marker from '@/img/icons/marker.svg'
import Map from './ui/Map'
import Image from 'next/image'

export default function ContactsBlock() {
    return (
        <div className='flex flex-col gap-4 lg:gap-0'>
            <p className='lg:text-[1.82rem] text-[1.29rem] text-grayText font-semibold'>Контакты</p>
            <div className='flex w-full justify-between lg:items-center flex-col lg:flex-row gap-[1.4rem] lg:gap-0'>
                <div className="flex flex-col gap-5">
                    <div className='flex flex-col gap-4'>
                        <p className='text-mainBlue lg:text-[1.25rem] text-[1.31rem]'>Главный корпус</p>
                        <div className="flex flex-col lg:gap-2.5 gap-[0.34rem] text-18">
                            <p className='text-grayMainText flex gap-[0.31rem]'>
                                <Image src={marker} alt="местоположение" width={16} height={16}/>
                                Самарская область, г. Тольятти, ул. Мурысева, 84
                            </p>
                            <p className='text-grayMainText flex gap-[0.31rem]'>
                                <Image src={phone} alt="номер телефона" />
                                <a href="tel:241025">24-10-25</a> (вахта)
                            </p>
                            <p className='text-grayMainText flex gap-[0.31rem]'>
                                <Image src={phone} alt="номер телефона" />
                                <a href="tel:241054">24-10-54</a> (приемная)
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-mainBlue lg:text-[1.25rem] text-[1.31rem]'>Второй корпус</p>
                        <div className="flex flex-col lg:gap-2.5 gap-[0.34rem] text-18">
                            <p className='text-grayMainText flex gap-[0.31rem]'>
                                <Image src={marker} alt="местоположение" />
                                Самарская область, г. Тольятти, ул. Ленинградская, 28
                            </p>
                            <p className='text-grayMainText flex gap-[0.31rem]'>
                                <Image src={phone} alt="номер телефона" />
                                <a href="tel:283644">28-36-44</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Map styles='w-full h-[15rem] lg:w-[44rem] lg:h-[25.3rem]'/>
            </div>
        </div>
    )
}