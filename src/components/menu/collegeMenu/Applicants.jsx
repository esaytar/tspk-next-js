import React from 'react'
import ListComponent from './ListComponent'

export default function Applicants({styles}) {
    const list =  [
        {
            value: 'Абитуриентам',
            isLink: false,
            link: ''
        },
        {
            value: 'Приемная комиссия',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Специальности',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Общежитие',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Пофамильный список подавших заявления',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Профориентация школьников',
            isLink: true,
            link: '/error'
        },
        {
            value: 'Статистика поданных заявлений 2023',
            isLink: true,
            link: '/error'
        },
    ]

    return (
        <ListComponent array={list} main={styles}/>
    )
}
