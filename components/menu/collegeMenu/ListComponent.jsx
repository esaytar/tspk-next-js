import dynamic from "next/dynamic"
const Link = dynamic(() => import('next/link'))

export default function ListComponent({array, styles, main, color}) {
    if (!array) return

    return (
        <>
            <ul className={`flex flex-col ${styles ? styles : main} ${color}`}>
                {
                    array.map((i, index) => (
                        <li key={index}>
                            {i.isLink ? <Link href={i.link} 
                            className='text-white/60 hover:text-white'>{i.value}</Link> 
                                : <p>{i.value}</p>}
                        </li>  
                    ))
                }
            </ul>
        </>
    ) 
}
