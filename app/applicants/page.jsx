import CollegeInfoCard from '../../components/CollegeInfoCard'
import CollegeHeroBlock from '../../components/CollegeHeroBlock/CollegeHeroBlock'
import obshchaga from '@/img/college_images/hostel-image.jpg'
import statistika from '@/img/college_images/statistika-image.jpg'
import komissiya from '@/img/college_images/priemnaya-komissiya-image.jpg'
import prof from '@/img/college_images/proforientaciya-image.jpg'
import specialties from '@/img/college_images/specialties-image.jpg'
import spisok from '@/img/college_images/spisok-zayavlenii-image.jpg'
import bg from '@/img/main-apps.jpg'

const pageCardsInfos = [
    {
        urlImage: komissiya,
        text: 'Приемная комиссия',
        link: '/applicants/priemnaya-komissiya'
    },
    {
        urlImage: spisok,
        text: 'Пофамильный список подавших заявления',
        link: '/applicants/spisok'
    },
    {
        urlImage: statistika,
        text: 'Статистика поданных заявлений 2024',
        link: '/applicants/statistika'
    },
    {
        urlImage: specialties,
        text: 'Специальности',
        link: '/applicants/specialties'
    },
    {
        urlImage: obshchaga,
        text: 'Общежитие',
        link: '/applicants/obshchaga'
    },
    {
        urlImage: prof,
        text: 'Профориентация школьников',
        link: '/applicants/prof'
    },
]

export default function applicantsPage() {
    return (
        <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[6.75rem]
            lg:max-w-[80rem] xl:p-0 md:gap-10 2xl:max-w-[73%] 2xl:min-w-[84.5rem] lg:mt-[10.3rem]">
            <CollegeHeroBlock
                heading="Добро пожаловать, абитуриент!"
                desc="Готов стать студентом нашего колледжа? В этом разделе ты найдёшь всё, что нужно знать о поступлении! Мы собрали для тебя самые интересные и полезные сведения о наших программах, условиях приёма и незабываемой студенческой жизни. Начни своё знакомство с колледжем прямо сейчас и открой для себя новые возможности!"
                vertical="Абитуриентам"
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