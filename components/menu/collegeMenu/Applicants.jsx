import ListComponent from './ListComponent'

export default function Applicants({styles, color}) {
    const list =  [
        {
            value: 'Абитуриентам',
            link: '/applicants/'
        },
        {
            value: 'Приемная комиссия',
            link: '/applicants/priemnaya-komissiya'
        },
        {
            value: 'Специальности',
            link: '/applicants/spisok'
        },
        {
            value: 'Общежитие',
            link: '/applicants/obshchaga'
        },
        {
            value: 'Пофамильный список подавших заявления',
            link: '/applicants/spisok'
        },
        {
            value: 'Профориентация школьников',
            link: '/applicants/prof'
        },
        {
            value: 'Статистика поданных заявлений 2023',
            link: '/applicants/statistika'
        },
    ]

    return (
        <ListComponent color={color} array={list} main={styles}/>
    )
}
