import React from 'react'
import ListComponent from './ListComponent'

export default function Teachers({styles, main, color}) {
    const list = [
        {
            value: 'Преподавателям',
            isLink: false,
            link: ''
        },
        {
            value: 'Шаблоны документов',
            isLink: true,
            link: '/teachers/docs'
        },
        {
            value: 'Методические рекомендации преподавателям',
            isLink: true,
            link: '/teachers/instructions'
        },
        {
            value: 'Критерии назначения стимулирующих выплат',
            isLink: true,
            link: '/teachers/criteria-payments'
        },
    ]

    return (
        <ListComponent array={list} styles={styles} main={main} color={color}/>
    )
}
