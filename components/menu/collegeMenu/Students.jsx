import ListComponent from './ListComponent'

export default function Students({styles, color}) {
    const list = [
        {
            value: 'Студентам',
            isLink: false,
            link: ''
        },
        {
            value: 'Расписание на каждый день',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Содействие трудоустройству выпускников',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Информация о вакантных местах для перевода',
            isLink: true,
            link: '/error'
        },
        {
            value: 'ЕГЭ 2024',
            isLink: true,
            link: '/error'
        },
    ]
    
    return (
        <ListComponent color={color} array={list} styles={styles}/>
    )
}
