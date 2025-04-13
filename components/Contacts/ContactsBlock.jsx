import phone from '@/img/icons/phone.svg'
import marker from '@/img/icons/marker.svg'
const Map = dynamic(() => import('../ui/Map'))
import Image from 'next/image'
import dynamic from 'next/dynamic'

export default function ContactsBlock() {
    const contactInfos1 = [
        {
            text: 'Самарская область, г. Тольятти, ул. Мурысева, 84',
            image: marker,
            link: '',
        },
        {
            text: '24-10-25 (вахта)',
            image: phone,
            link: 'tel:+78482241025',
        },
        {
            text: '24-10-54 (приемная)',
            image: phone,
            link: 'tel:+78482241054',
        },
    ]
    const contactInfos2 = [
        {
            text: 'Самарская область, г. Тольятти, ул. Ленинградская, 28',
            image: marker,
            link: '',
        },
        {
            text: '28-36-44',
            image: phone,
            link: 'tel:+78482283644',
        },
    ]

    return (
        <div className='flex flex-col gap-4 lg:gap-0'>
            <p className='lg:text-[1.82rem] text-[1.29rem] text-main-gray font-medium'>Контакты</p>
            <div className='flex w-full justify-between lg:items-center flex-col lg:flex-row gap-[1.4rem] lg:gap-0'>
                <div className="flex flex-col gap-5">
                    <div className='flex flex-col gap-4'>
                        <p className='text-main-blue lg:text-18 text-[1.14rem]'>Главный корпус</p>
                        <ul className="flex flex-col lg:gap-2.5 gap-[0.34rem] text-base">
                            {contactInfos1.map((item, index) => (
                                <li key={index} className='text-gray-main-text flex gap-[0.31rem]'>
                                    <Image src={item.image} alt="иконка контактов" width={16} height={16}/>
                                    {item.link === '' ? (
                                        <p>{item.text}</p>
                                    ) : ( 
                                        <a href={item.link}>{item.text}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-main-blue lg:text-18 text-[1.14rem]'>Второй корпус</p>
                        <ul className="flex flex-col lg:gap-2 gap-[0.34rem] text-base">
                            {contactInfos2.map((item, index) => (
                                <li key={index} className='text-gray-main-text flex gap-[0.31rem]'>
                                    <Image src={item.image} alt="иконка контактов" width={16} height={16}/>
                                    {item.link === '' ? (
                                        <p>{item.text}</p>
                                    ) : ( 
                                        <a href={item.link}>{item.text}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Map styles='w-full h-52 lg:w-212 lg:h-84 rounded-2xl'/>
            </div>
        </div>
    )
}