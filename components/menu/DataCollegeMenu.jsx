import Link from "next/link"

export default function DataCollegeMenu({main, liW, ulID, index, color}) {
    const items = [
        {
            classes: false,
            value: 'Основные сведения',
            link: '/infos/basic-data'
        },
        {
            classes: true,
            value: 'Структура и органы управления образовательной организацией',
            link: '/infos/structure-college'
        },
        {
            classes: false,
            value: 'Документы',
            link: '/infos/documents'
        },
        {
            classes: false,
            value: 'Образование',
            link: '/error'
        },
        {
            classes: false,
            value: 'Образовательные стандарты и требования',
            link: '/infos/standarts'
        },
        {
            classes: true,
            value: 'Руководство. Педагогический (научно-педагогический) состав',
            link: '/error'
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            link: '/error'
        },
        {
            classes: true,
            value: 'Стипендии и иные виды материальной поддержки',
            link: '/error'
        },
        {
            classes: false,
            value: 'Платные образовательные услуги',
            link: '/infos/paid-edu-services'
        },
        {
            classes: false,
            value: 'Финансово-хозяйственная деятельность',
            link: '/error'
        },
        {
            classes: true,
            value: 'Вакантные места для приема (перевода) обучающихся',
            link: '/error'
        },
        {
            classes: false,
            value: 'Доступная среда',
            link: '/error'
        },
        {
            classes: false,
            value: 'Международное сотрудничество',
            link: '/infos/international-cooperation'
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col ${main}`}>
            {
                items.map((item, index) => (
                    <li className={`${item.classes && liW ? liW : ''} w-fit`} key={index}>
                        <Link href={item.link} className={`${color === undefined ? 'text-white/60 hover:text-white' : color}`}>
                            {item.value}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
