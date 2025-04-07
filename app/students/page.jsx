import CollegeInfoCard from '../../components/CollegeInfoCard'
import CollegeHeroBlock from '../../components/CollegeHeroBlock/CollegeHeroBlock'
import ege from '@/img/college_images/ege-image.jpg'
import perevod from '@/img/college_images/mesta-dlya-perevoda.jpg'
import raspisanie from '@/img/college_images/raspisanie.jpg'
import rabota from '@/img/college_images/trudoustroistvo.jpg'
import bg from '@/img/main-students.jpg'

const pageCardsInfos = [
    {
        urlImage: rabota,
        text: 'Содействие трудоустройству выпускников',
        link: '/students/rabota'
    },
    {
        urlImage: perevod,
        text: 'Информация о вакантных местах для перевода',
        link: '/sveden/'
    },
    {
        urlImage: raspisanie,
        text: 'Расписание на каждый день',
        link: '/schedule'
    },
    {
        urlImage: ege,
        text: 'ЕГЭ 2025',
        link: '/students/ege'
    },
]

export default function studentsPage() {
    return (
        <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[6.75rem]
            lg:max-w-[80rem] xl:p-0 md:gap-10 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:mt-[10.3rem]">
            <CollegeHeroBlock
                heading="Дорогие студенты!"
                desc="Мы стремимся сделать вашу учебу максимально комфортной. Здесь вы найдете всю необходимую информацию: расписания, учебные материалы, новости и объявления"
                vertical="Студентам"
                nameStyle={bg}
            />
            <div className="grid lg:grid-cols-3 gap-2.5">
                {pageCardsInfos.map((item, index) => (
                    <CollegeInfoCard
                        key={index}
                        urlImage={item.urlImage}
                        text={item.text}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}
