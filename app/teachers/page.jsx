import './globals.css'
import CollegeInfoCard from '../../components/CollegeInfoCard'
import temps from '@/img/college_images/templates-image.jpg'
import recoms from '@/img/college_images/recommendations-image.jpg'
import criteria from '@/img/college_images/criteria-image.jpg'

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

export default function CollegePage() {
    return (
        <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[6.75rem]
            lg:max-w-[80rem] xl:p-0 md:gap-10 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:mt-[10.3rem]">
            <div className="teacher-pic w-full min-h-fit object-cover bg- flex justify-between p-10 items-center rounded-[10px]">
                <div className='flex flex-col gap-5 text-white'>
                    <h1 className='font-medium text-[3rem]'>Уважаемые преподаватели!</h1>
                    <p className='text-18 leading-[1.32rem] w-1/2'>Добро пожаловать в раздел, предназначенный для преподавателей нашего колледжа. Здесь вы найдете всю необходимую информацию и ресурсы для организации эффективного учебного процесса. Мы стремимся предоставить вам удобный и функциональный инструментарий для вашей работы.</p>
                </div>
                <p className='vertical-text'>Преподавателям</p>
            </div>
            <div className="flex gap-2.5">
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
