import Link from "next/link"

export default function ListComponent({array, styles, main, color}) {
    if (!array) return

    return (
        <>
            <ul className={`flex flex-col ${styles ? styles : main} ${color}`}>
                {
                    array.map((i, index) => (
                        <li key={index}>
                            {i.isLink ? <Link href={i.link} className={`${color === undefined ? 'text-white/60 hover:text-white' : color}`}>{i.value}</Link> 
                                : <p className={`${color ? 'hidden' : ''}`}>{i.value}</p>}
                        </li>  
                    ))
                }
            </ul>
        </>
    ) 
}
