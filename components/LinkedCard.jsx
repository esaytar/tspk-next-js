import Link from "next/link"
import useOpenElement from '../store/useOpenElement.js'

export default function LinkedCard({children, link}) {
    const setIsOpenedModalDoc = useOpenElement((state) => state.setIsOpenedModalDoc)

    return (
        <div className='cursor-pointer tracking-wide rounded-[0.71rem] py-[1.43rem] px-[0.71rem]
            text-white/80 text-base font-medium duration-[.15s] bg-main-gray lg:max-h-[200px] lg:rounded-[1rem] lg:p-[1.875rem] lg:text-18 border border-transparent lg:hover:bg-main-blue'>
            {link == '' ? (<button onClick={() => setIsOpenedModalDoc(true)} className="w-full h-full cursor-pointer gap-5 flex flex-col items-center justify-center">{children}</button>) 
            : (<Link target='_blank' className="w-full h-full gap-5 flex flex-col items-center justify-center" href={link}>{children}</Link>)}
        </div>
    )
}