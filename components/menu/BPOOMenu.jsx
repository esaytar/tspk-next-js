import Link from "next/link"

export default function BPOOMenu({ulID, index, main, liW, color}) {
    const items = [
        {
            classes: false,
            value: 'Документы',
            link: '/bpoo/documents'
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение обучающихся с ограниченными возможностями здоровья и инвалидностью',
            link: '/bpoo/material-provision'
        },
        {
            classes: true,
            value: 'Учебно-методическое обеспечение инклюзивного образования',
            link: '/bpoo/education-provision'
        },
        {
            classes: false,
            value: 'Конференции',
            link: '/bpoo/conferences'
        },
        {
            classes: false,
            value: 'Полезные ссылки',
            link: '/bpoo/useful-links'
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col text-[0.875rem] gap-2.5 ${main}`}>
            {items.map((item, index) => (
                <li className={`${item.classes && liW ? liW : ''} w-fit`} key={index}>
                    <Link href={item.link} className={`${color === undefined ? 'text-white/60 hover:text-white' : color}`}>
                        {item.value}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
