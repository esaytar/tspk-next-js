import CollegeInfoCard from '../../components/CollegeInfoCard'
import temps from '@/img/college_images/templates-image.jpg'
import recoms from '@/img/college_images/recommendations-image.jpg'
import criteria from '@/img/college_images/criteria-image.jpg'
import CollegeHeroBlock from '../../components/CollegeHeroBlock/CollegeHeroBlock'
import bg from '@/img/main-teacher.jpg'

export const metadata = {
  title: "Преподавателям",
  description: "",
};

const pageCardsInfos = [
    {
        urlImage: temps,
        text: <>Шаблоны <br/> документов</>,
        link: '/teachers/documents-templates'
    },
    {
        urlImage: recoms,
        text: 'Методические рекомендации преподавателям',
        link: '/teachers/recommendations'
    },
    {
        urlImage: criteria,
        text: 'Критерии назначения стимулирующих выплат',
        link: '/teachers/plus-k-zp'
    },
]

export default function teachersPage() {
    return (
        <div className="flex flex-col gap-[1.43rem] w-full mt-[6.75rem]
            xl:p-0 md:gap-10 lg:mt-10 xl:w-[73%] 2xl:min-w-[84.5rem] lg:max-w-[80rem]">
            <CollegeHeroBlock
                heading="Уважаемые преподаватели!"
                desc="Добро пожаловать в раздел, предназначенный для преподавателей нашего колледжа. Здесь вы найдете всю необходимую информацию и ресурсы для организации эффективного учебного процесса. Мы стремимся предоставить вам удобный и функциональный инструментарий для вашей работы."
                vertical="Преподавателям"
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
