import ListComponent from './ListComponent'

export default function Students({styles, color}) {
    const list = [
        {
            value: 'Студентам',
            link: '/students/'
        },
        {
            value: 'Расписание на каждый день',
            link: '/schedule'
        },
        {
            value: 'Содействие трудоустройству выпускников',
            link: '/students/rabota'
        },
        {
            value: 'Информация о вакантных местах для перевода',
            link: '/sveden/'
        },
        {
            value: 'ЕГЭ 2024',
            link: '/ege'
        },
    ]
    
    return (
        <ListComponent color={color} array={list} styles={styles}/>
    )
}
