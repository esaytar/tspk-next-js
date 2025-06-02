import ListComponent from './ListComponent'

export default function Teachers({styles, main, color}) {
    const list = [
        {
            value: 'Преподавателям',
            link: '/teachers/'
        },
        {
            value: 'Шаблоны документов',
            link: '/teachers/documents-templates'
        },
        {
            value: 'Методические рекомендации преподавателям',
            link: '/teachers/teachers-recommendations'
        },
        {
            value: 'Критерии назначения стимулирующих выплат',
            link: '/teachers/criteria-incentive-payments'
        },
    ]

    return (
        <ListComponent array={list} styles={styles} main={main} color={color}/>
    )
}
