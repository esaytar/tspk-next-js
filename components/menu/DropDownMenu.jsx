import React, { useEffect, useState, useRef } from 'react'
import DataCollegeMenu from './DataCollegeMenu'
import CollegeMenu from './CollegeMenu'
import BPOOMenu from './BPOOMenu'

export default function DropDownMenu({styles, main, content, linkValue, menuRef}) {
    const [indexMenu, setIndexMenu] = useState(0)

    useEffect(() => {
        linkValue.map((link, index) => {
            if (link === content) {
                setIndexMenu(index)
            }
        })
    }, [content])
    
    return (
        <div ref={menuRef} className={`drop lg:max-w-[80rem] 2xl:max-w-[87.5rem] w-full rounded-[1rem] px-10 py-5 fixed mt-[105px] ${styles} duration-[.1s] z-20`}>
            <DataCollegeMenu ulID={0} index={indexMenu} main={main}></DataCollegeMenu>
            <CollegeMenu ulID={1} index={indexMenu} main={main} gap='!gap-12'></CollegeMenu>
            <BPOOMenu ulID={2} index={indexMenu} main={main}></BPOOMenu>
        </div>
    )
}
