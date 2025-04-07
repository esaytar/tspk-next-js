import Link from "next/link"

export default function DataCollegeMenu({main, liW, ulID, index, color}) {
    const items = [
        {
            classes: false,
            value: 'Основные сведения',
            link: '/sveden/basic-data'
        },
        {
            classes: true,
            value: 'Структура и органы управления образовательной организацией',
            link: '/sveden/structure-college'
        },
        {
            classes: false,
            value: 'Документы',
            link: '/sveden/documents'
        },
        {
            classes: false,
            value: 'Образование',
            link: '/sveden/'
        },
        {
            classes: false,
            value: 'Образовательные стандарты и требования',
            link: '/sveden/standarts'
        },
        {
            classes: true,
            value: 'Руководство. Педагогический (научно-педагогический) состав',
            link: '/sveden/'
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            link: '/sveden/'
        },
        {
            classes: true,
            value: 'Стипендии и иные виды материальной поддержки',
            link: '/sveden/'
        },
        {
            classes: false,
            value: 'Платные образовательные услуги',
            link: '/sveden/paid-edu-services'
        },
        {
            classes: false,
            value: 'Финансово-хозяйственная деятельность',
            link: '/sveden/'
        },
        {
            classes: true,
            value: 'Вакантные места для приема (перевода) обучающихся',
            link: '/sveden/'
        },
        {
            classes: false,
            value: 'Доступная среда',
            link: '/sveden/'
        },
        {
            classes: false,
            value: 'Международное сотрудничество',
            link: '/sveden/international-cooperation'
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col ${main}`}>
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
