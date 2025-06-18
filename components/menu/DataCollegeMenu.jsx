import Link from "next/link"

export default function DataCollegeMenu({main, liW, ulID, index, color}) {
    const items = [
        {
            classes: false,
            value: 'Основные сведения',
            link: '/sveden/common'
        },
        {
            classes: true,
            value: 'Структура и органы управления образовательной организацией',
            link: '/sveden/struct'
        },
        {
            classes: false,
            value: 'Документы',
            link: '/sveden/document'
        },
        {
            classes: false,
            value: 'Образование',
            link: '/sveden/education'
        },
        {
            classes: false,
            value: 'Образовательные стандарты и требования',
            link: '/sveden/edustandarts'
        },
        {
            classes: true,
            value: 'Руководство',
            link: '/sveden/managers'
        },
        {
            classes: true,
            value: 'Педагогический состав',
            link: '/sveden/employees'
        },
        {
            classes: true,
            value: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            link: '/sveden/objects'
        },
        {
            classes: true,
            value: 'Стипендии и иные виды материальной поддержки',
            link: '/sveden/grants'
        },
        {
            classes: false,
            value: 'Платные образовательные услуги',
            link: '/sveden/paid_edu'
        },
        {
            classes: false,
            value: 'Финансово-хозяйственная деятельность',
            link: '/sveden/budget'
        },
        {
            classes: true,
            value: 'Вакантные места для приема (перевода) обучающихся',
            link: 'sveden/vacant'
        },
        {
            classes: false,
            value: 'Международное сотрудничество',
            link: '/sveden/inter'
        },
    ]

    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col gap-2.5 ${main}`}>
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
