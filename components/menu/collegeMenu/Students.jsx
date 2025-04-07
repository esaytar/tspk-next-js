import ListComponent from './ListComponent'

export default function Students({styles, color}) {
    const list = [
        {
            value: 'Студентам',
            isLink: true,
            link: '/students/'
        },
        {
            value: 'Расписание на каждый день',
            isLink: true,
            link: '/schedule'
        },
        {
            value: 'Содействие трудоустройству выпускников',
            isLink: true,
            link: '/students/rabota'
        },
        {
            value: 'Информация о вакантных местах для перевода',
            isLink: true,
            link: '/sveden/'
        },
        {
            value: 'ЕГЭ 2024',
            isLink: true,
            link: '/ege'
        },
    ]
    
    return (
        <ListComponent color={color} array={list} styles={styles}/>
    )
}
