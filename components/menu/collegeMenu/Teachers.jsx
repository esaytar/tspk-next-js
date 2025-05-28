import ListComponent from './ListComponent'

export default function Teachers({styles, main, color}) {
    const list = [
        {
            value: 'Преподавателям',
            link: '/teachers/'
        },
        {
            value: 'Шаблоны документов',
            link: '/teachers/docs'
        },
        {
            value: 'Методические рекомендации преподавателям',
            link: '/teachers/instructions'
        },
        {
            value: 'Критерии назначения стимулирующих выплат',
            link: '/teachers/criteria-payments'
        },
    ]

    return (
        <ListComponent array={list} styles={styles} main={main} color={color}/>
    )
}
