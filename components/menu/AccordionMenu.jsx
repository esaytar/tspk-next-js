import Image from 'next/image'
import ArrowSmall from '../ui/ArrowSmall'

export default function AccordionMenu({child, name, activeIndex, onAccordionClick, index, imageUrl, isSidebar}) { 
    const isActive = index === activeIndex

    return (
        <li className='flex flex-col gap-3 bg-[#111] !w-full'>
            <div onClick={() => onAccordionClick(index)} className='lg:max-h-12.5 cursor-pointer border-0 border-transparent bg-[#2B2B2B] sticky top-7.5 lg:top-0 flex w-full justify-between items-center gap-[2rem] leading-[135%] text-base rounded-[10px] p-3.5'>
                <p className='text-white flex items-center relative w-full gap-2.5'>
                    <Image src={imageUrl} alt={name} className='size-5 max-w-5 max-h-5 mr-0.5'/>
                    <span className={`${isSidebar.isOpen ? 'lg:opacity-100 lg:visible' : 'lg:opacity-0 lg:pointer-events-none lg:invisible cursor-default'} w-full lg:absolute lg:left-7 transition-opacity duration-300 `}>
                        {name}
                    </span>
                </p>
                <ArrowSmall style={`${isActive ? '' : '-rotate-90'} ${isSidebar.isOpen ? 'lg:opacity-100 lg:visible' : 'lg:opacity-0 lg:pointer-events-none lg:invisible cursor-default'} stroke-white origin-center min-w-[19px] transition-opacity duration-300`}/>
            </div>
            {isActive && <>{child}</>}
        </li>
    )
}
