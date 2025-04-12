import Image from 'next/image'
import ArrowSmall from '../ui/ArrowSmall'

export default function AccordionMenu({child, name, activeIndex, onAccordionClick, index, imageUrl}) { 
    const isActive = index === activeIndex

    return (
        <li className='flex flex-col '>
            <p onClick={() => onAccordionClick(index)} className='cursor-pointer bg-[#2C3A54] sticky top-[30px] flex w-full justify-between items-center gap-[2rem] leading-[135%] text-base rounded-[10px] p-4'>
                <span className='text-white flex gap-2.5'>
                    <Image src={imageUrl} alt={name} />
                    {name}
                </span>
                <ArrowSmall style={`${isActive ? '' : '-rotate-90'} stroke-white origin-center min-w-[19px] duration-300`}/>
            </p>
            {isActive && <>{child}</>}
        </li>
    )
}
