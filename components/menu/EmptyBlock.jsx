'use client'
import useOpenSidebar from "../../store/useOpenSidebar"

export default function EmptyBlock() {
    const sidebar = useOpenSidebar()
    return (
        
        <div className={`${sidebar.isOpen ? 'min-w-[511px]' : 'min-w-[90px]'} 
                self-stretch hidden h-screen bg-[#111] lg:block p-7.5 lg:px-5 lg:py-5 z-40
                transition-all duration-500 cubic-bezier(0.65,0,0.35,1)`}/>
        // className={`${sidebar.isOpen ? 'min-w-[511px]' : 'min-w-[90px]'} self-stretch bg-[#111] min-h-dvh hidden lg:block transition-[width] ease-in duration-200 z-40`}/>
    )
}
