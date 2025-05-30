import Link from "next/link"

export default function LinkedCard({children, link}) {
    return (
        <Link href={link} target='_blank' className='tracking-wide rounded-[0.71rem] py-[1.43rem] px-[0.71rem] gap-5 flex flex-col items-center justify-center
            text-white/80 text-base font-medium duration-[.15s] bg-main-gray lg:max-h-[200px] lg:rounded-[1rem] lg:p-[1.875rem] lg:text-18 border border-transparent lg:hover:bg-main-blue'>
            {children}
        </Link>
    )
}