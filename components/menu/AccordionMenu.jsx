import Image from 'next/image'
import ArrowSmall from '../ui/ArrowSmall'

export default function AccordionMenu({child, name, activeIndex, onAccordionClick, index, imageUrl, isSidebar}) { 
    const isActive = index === activeIndex

    return (
        <li className='flex flex-col gap-3 bg-[#111]'>
            <div onClick={() => onAccordionClick(index)} className='max-h-12.5 cursor-pointer bg-[#2B2B2B] sticky top-0 flex w-full justify-between items-center gap-[2rem] leading-[135%] text-base rounded-[10px] p-4'>
                <p className='text-white flex items-center relative w-full'>
                    <Image src={imageUrl} alt={name} className='size-5 max-w-5 max-h-5 mr-0.5'/>
                    <span className={`${isSidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible cursor-default'} w-full absolute left-7 transition-opacity duration-300 `}>
                        {name}
                    </span>
                </p>
                <ArrowSmall style={`${isActive ? '' : '-rotate-90'} ${isSidebar.isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible w-85 cursor-default'} stroke-white origin-center min-w-[19px] transition-opacity duration-300`}/>
            </div>
            {isActive && <>{child}</>}
        </li>
    )
}
