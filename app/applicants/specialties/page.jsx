import SpecialtiesCard from '../../../components/SpecialtiesCard';
import specD from '@/img/applicants/pre-school_education.jpg'
import specSD from '@/img/applicants/special-pre-school.jpg'
import specNK from '@/img/applicants/teacher.png'
import specAFK from '@/img/applicants/adaptive-fizra.jpg'
import specKS from '@/img/applicants/computer-tehnik.png'
import specSR from '@/img/applicants/social-work.png'
import specPDO from '@/img/applicants/extra-edu-teacher.png'
import specISIP from '@/img/applicants/developers.jpg'
import specFK from '@/img/applicants/fizruki.png'
import specOIS from '@/img/applicants/operator-IS.png'
import specDOY from '@/img/applicants/documentoved.jpg'

export const metadata = {
  title: "Специальности",
  description: "",
}

const specialtiesArray = [
    {
        title: 'Дошкольное образование',
        period: '3 г. 10 мес.',
        qualif: 'воспитатель детей дошкольного возраста',
        form: 'очно/заочно',
        optional: 'Вступительные испытания: (дополнительные) профессиональная самопрезентация (устно), чтение художественного произведения',
        imageUrl: specD,
    },
    {
        title: 'Специальное дошкольное образование',
        period: '3 г. 10 мес.',
        qualif: 'воспитатель детей дошкольного возраста с отклонениями в развитии и с сохранным развитием',
        form: 'очно/заочно',
        optional: 'Вступительные испытания: (дополнительные) профессиональная самопрезентация (устно), чтение художественного произведения',
        imageUrl: specSD,
    },
    {
        title: 'Преподавание в начальных классах',
        period: '3 г. 10 мес.',
        qualif: 'учитель начальных классов',
        form: 'очно/заочно',
        optional: 'Вступительные испытания: (дополнительные) профессиональная самопрезентация (устно), чтение художественного произведения',
        imageUrl: specNK,
    },
    {
        title: 'Адаптивная физическая культура',
        period: '3 г. 10 мес.',
        qualif: 'учитель адаптивной физической культуры',
        form: 'очно',
        optional: 'Вступительные испытания: (дополнительные) Общая физическая подготовка (гимнастика, лёгкая атлетика)',
        imageUrl: specAFK,
    },
    {
        title: 'Компьютерные системы и комплексы',
        period: '3 г. 10 мес.',
        qualif: 'техник по компьютерным системам',
        form: 'очно',
        optional: '(В том числе для ОВЗ)',
        imageUrl: specKS,
    },
    {
        title: 'Социальная работа',
        period: '2 г. 10 мес.',
        qualif: 'специалист по социальной работе',
        form: 'заочно',
        optional: '',
        imageUrl: specSR,
    },
    {
        title: 'Педагогика дополнительного образования',
        period: '3 г. 10 мес.',
        qualif: 'педагог дополнительного образования',
        form: 'очно',
        optional: '',
        imageUrl: specPDO,
    },
    {
        title: 'Информационные системы и программирование',
        period: '3 г. 10 мес.',
        qualif: 'разработчик веб и мультимедийных приложений',
        form: 'очно',
        optional: '',
        imageUrl: specISIP,
    },
    {
        title: 'Физическая культура',
        period: '3 г. 10 мес.',
        qualif: 'педагог по физической культуре и спорту',
        form: 'очно/заочно',
        optional: 'Вступительные испытания: (дополнительные) Общая физическая подготовка (гимнастика, лёгкая атлетика).',
        imageUrl: specFK,
    },
    {
        title: 'Оператор информационных систем и ресурсов',
        period: '1 г. 10 мес.',
        qualif: 'оператор информационных систем и ресурсов',
        form: 'очно',
        optional: '(В том числе для ОВЗ)',
        imageUrl: specOIS,
    },
    {
        title: 'Документационное обеспечение управлениия и архивоведение',
        period: '2 г. 10 мес.',
        qualif: 'специалист по документационному обеспечению управления, архивист',
        form: 'очно',
        optional: '',
        imageUrl: specDOY,
    },
]

export default function Specialities() {
    return (
        <>
            <div className="flex flex-col gap-5 mt-[6.75rem] lg:mt-10">
                <h3 className="text-[1.812rem] font-medium">Перечень специальностей (профессий)</h3>
                <p className="text-[1.25rem]">
                    В 2024 учебном году колледж осуществляет подготовку высококвалифицированных, конкурентоспособных специалистов.
                    Прием на обучение по образовательным программам среднего профессионального образования в ГАПОУ Тольяттинский социально-педагогический колледж за счет бюджета является общедоступным (статья 68 главы 8 Федерального закона от 29 декабря 2012 № 273-ФЗ &quot;Об образовании в Российской Федерации&quot;).  
                    &nbsp;<a href="" className="underline">Перечень специальностей (профессий), по которым ОО объявляет прием</a>
                </p>
            </div>
            <div className='w-full grid lg:grid-cols-4 lg:gap-10 grid-cols-1 gap-[1.43rem]'>
                {specialtiesArray.map((item, index) => (
                    <SpecialtiesCard 
                        key={index}
                        title={item.title}
                        qualificaion={item.qualif}
                        formEdu={item.form}
                        periodEdu={item.period}
                        pic={item.imageUrl}
                        optional={item.optional}
                        />
                ))}
            </div>
        </>
    )
}
