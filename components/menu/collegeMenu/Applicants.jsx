import ListComponent from './ListComponent'

export default function Applicants({styles, color}) {
    const list =  [
        {
            value: 'Абитуриентам',
            isLink: true,
            link: '/applicants/'
        },
        {
            value: 'Приемная комиссия',
            isLink: true,
            link: '/applicants/priemnaya-komissiya'
        },
        {
            value: 'Специальности',
            isLink: true,
            link: '/applicants/spisok'
        },
        {
            value: 'Общежитие',
            isLink: true,
            link: '/applicants/obshchaga'
        },
        {
            value: 'Пофамильный список подавших заявления',
            isLink: true,
            link: '/applicants/spisok'
        },
        {
            value: 'Профориентация школьников',
            isLink: true,
            link: '/applicants/prof'
        },
        {
            value: 'Статистика поданных заявлений 2023',
            isLink: true,
            link: '/applicants/statistika'
        },
    ]

    return (
        <ListComponent color={color} array={list} main={styles}/>
    )
}
