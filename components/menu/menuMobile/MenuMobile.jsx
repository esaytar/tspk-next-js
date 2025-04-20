import './MenuMobile.css'

export default function MenuMobile({status, style, children}) {

    return (
        <div className={`${status} lg:!opacity-100 menuMobile absolute -translate-x-1/2 lg:translate-none left-1/2 w-screen lg:w-auto max-h-screen h-dvh flex flex-col justify-between bg-[#111] pt-[3.75rem] pb-[1rem] z-5`}>
            {children}
        </div>
    )
}
