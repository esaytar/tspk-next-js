import './MenuMobile.css'
import dynamic from 'next/dynamic'
import Sidebar from '../../Sidebar/Sidebar'

export default function MenuMobile({status, style}) {

    return (
        <div className={`${status} ${style} menuMobile absolute -translate-x-1/2 left-1/2 w-screen max-h-screen h-dvh flex flex-col justify-between bg-[#152441] pt-[3.75rem] pb-[1rem] z-[5]`}>
            <Sidebar/>
        </div>
    )
}
