import Image from 'next/image'
import ArrowSmall from '../ui/ArrowSmall'

export default function AccordionMenu({child, name, activeIndex, onAccordionClick, index, imageUrl, isSidebar}) { 
    const isActive = index === activeIndex

    return (
        <li className='flex flex-col gap-3 bg-[#111] !w-full'>
            <div onClick={() => onAccordionClick(index)} className='lg:max-h-12.5 cursor-pointer border-0 border-transparent bg-[#2B2B2B] sticky top-7.5 lg:top-0 flex w-full justify-between items-center gap-[2rem] leading-[135%] text-base rounded-[10px] p-3.75'>
                <p className={`flex items-center gap-2.5 transition-all text-white
                    duration-300 ${isSidebar.isOpen ? 'delay-300' : 'delay-0'}`}>
                    <Image src={imageUrl} alt={name} className='size-5 max-w-5 max-h-5 mr-0.5'/>
                    <span style={{transition: 'all 0.4s ease-out', transitionDelay: `${isSidebar.isOpen ? 1 * 50 + 200 : 0}ms`}}
                        className={`${isSidebar.isOpen ? 'opacity-100' : 'opacity-0'} w-full lg:absolute lg:left-7 transition-all duration-300 delay-75 ease-out whitespace-nowrap`}>
                        {name}
                    </span>
                </p>
                <ArrowSmall style={`${isActive ? '' : '-rotate-90'} ${isSidebar.isOpen ? 'lg:opacity-100 lg:visible' : 'lg:opacity-0 lg:pointer-events-none lg:invisible cursor-default'} stroke-white origin-center min-w-[19px] transition-opacity duration-300`}/>
            </div>
            {isActive && <>{child}</>}
        </li>
    )
}
