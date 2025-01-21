import DemExamCard from '../../components/DemExamCard'
import childIMG from '@/img/dem-exam-images/children_w_teacher.jpg'
import commerce from '@/img/dem-exam-images/commerce.jpg'
import dopEduc from '@/img/dem-exam-images/dop_education.jpg'
import school from '@/img/dem-exam-images/school.jpg'
import socialWork from '@/img/dem-exam-images/social-work.jpg'
import specialChild from '@/img/dem-exam-images/special_children.jpg'
import sport from '@/img/dem-exam-images/sport.jpg'
import web from '@/img/dem-exam-images/web.jpg'

export default function DemExam() {
    const cards = [
        {
            head: 'Дошкольное образование',
            image: childIMG,
            links: ['ГИА ДЭ "Дошкольное воспитание"', 'ГИА ДЭ "Дошкольное воспитание"', 'ГИА ДЭ "Дошкольное воспитание"']
        },
        {
            head: 'Специальное дошкольное образование',
            image: specialChild,
            links: []
        },
        {
            head: 'Коммерция (по отраслям)',
            image: commerce,
            links: []
        },
        {
            head: 'Физическая культура, спорт и фитнес',
            image: sport,
            links: ['ГИА ДЭ "Физическая культура, спорт и фитнес"', 'ГИА ДЭ "Физическая культура, спорт и фитнес"', 'ГИА ДЭ "Физическая культура, спорт и фитнес"']
        },
        {
            head: 'Социальная работа',
            image: socialWork,
            links: ['ГИА ДЭ "Дошкольное воспитание"', 'ГИА ДЭ "Дошкольное воспитание"', 'ГИА ДЭ "Дошкольное воспитание"']
        },
        {
            head: 'Дополнительное образование детей и взрослых',
            image: dopEduc,
            links: ['ГИА ДЭ "Дополнительное образование детей и взрослых"', 'ГИА ДЭ "Дополнительное образование детей и взрослых"']
        },
        {
            head: 'Веб-технологии',
            image: web,
            links: ['ГИА ДЭ "Веб-технологии"', 'ГИА ДЭ "Веб-технологии"']
        },
        {
            head: 'Преподавание в младших классах',
            image: school,
            links: ['ГИА ДЭ "Преподавание в младших классах"', 'ГИА ДЭ "Преподавание в младших классах"', 'ГИА ДЭ "Преподавание в младших классах"']
        },
    ]

    return (
        <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[6.75rem]
            lg:max-w-[80rem] xl:p-0 md:gap-[3.75rem] 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:mt-[10.3rem]">
            <div className="flex flex-col gap-5">
                <h1 className="text-[1.29rem] lg:text-[1.81rem] font-semibold leading-[33.98px]">Демонcтрационный экзамен</h1>
                <p className="leading-[23.44px] text-[1.14rem] lg:text-[1.25rem]">Это форма аттестации по образовательным программам среднего профессионального образования, которая проводится преимущественно в форме практических заданий в условиях реальных или смоделированных производственных процессов, направленная на определение уровня освоения экзаменуемым образовательной программы и степени сформированности профессиональных знаний, умений и навыков.</p>
            </div>
            <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-2.5">
                {cards.map((item, index) => (
                    <DemExamCard
                        key={index}
                        name={item.head}
                        img={item.image}
                        txtLinks={item.links}
                    />
                ))}
            </div>
        </div>
    )
}
