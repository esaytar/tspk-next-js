'use client'
import useOpenSidebar from "../../store/useOpenSidebar"

export default function EmptyBlock() {
    const sidebar = useOpenSidebar()
    return (
        <>
            <div className={`${sidebar.isOpen ? 'min-w-[511px]' : 'min-w-[90px]'} bg-[#111] min-h-dvh self-start hidden lg:block transition-[width] ease-in duration-200`}/>
        </>
    )
}
