import React from 'react'
import ArrowBottom from '../../assets/icons/components/ArrowBottom'

export default function AccordionMenu({child, name, activeIndex, onAccordionClick, index}) { 
    const isActive = index === activeIndex

    return (
        <li className='flex flex-col'>
            <span className='bg-mainGray sticky -top-[16px] flex w-full justify-between items-center gap-[2rem] leading-[135%] text-[1.14rem] pb-[1.43rem]' 
                onClick={() => onAccordionClick(index)}>
                {name}
                <ArrowBottom style={`${isActive ? '' : '-rotate-90'} origin-center min-w-[19px] duration-300`}/>
            </span>
            {isActive && <>{child}</>}
        </li>
    )
}
