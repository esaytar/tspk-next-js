import doc from '@/img/icons/info-pages-icons/doc_icon.svg'
import LinkDataMode from '@/components/infoPages/LinkDataMode'
import playIco from '@/img/icons/info-pages-icons/play_icon.svg'
import pic1 from '@/img/bpoo/001.jpg'
import pic2 from '@/img/bpoo/002.jpg'
import pic3 from '@/img/bpoo/003.jpg'
import pic4 from '@/img/bpoo/004.jpg'
import pic5 from '@/img/bpoo/005.jpg'
import pic6 from '@/img/bpoo/006.jpg'
import picture1 from '@/img/bpoo/008.jpg'
import picture2 from '@/img/bpoo/009.jpg'
import picture3 from '@/img/bpoo/010.jpg'
import picture4 from '@/img/bpoo/011.jpg'

export const docsInfo = [
    {
        title: 'Региональные документы',
        content: [
            <LinkDataMode image={doc} alter='документ' link='' text='Распоряжение Губернатора Самарской области от 05 ноября 2015 года № 644-р «Об утверждении Межведомственного комплексного плана мероприятий по организации инклюзивного образования и созданию специальных условий для получения профессионального образования инвалидами и лицами с ограниченными возможностями здоровья в Самарской области на 2015 - 2020 годы»'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Распоряжение министерства образования и науки Самарской области от 05 июня 2013 года № 306-р «Об утверждении Порядка передачи детям-инвалидам и инвалидам, обучавшимся на дому с использованием дистанционных образовательных технологий в образовательных учреждениях Самарской области, компьютерного оборудования для получения профессионального образования»'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Распоряжение министерства образования и науки Самарской области от 11 ноября 2015 года № 736-р «О создании ресурсных учебно-методических центров по обучению лиц с ограниченными возможностями здоровья и инвалидов на базе государственных профессиональных образовательных организаций Самарской области»'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Письмо министерства образования и науки Самарской области от 24 марта 2016 года № МО-16-09-01/289-ту (О работе Портала информационной и методической поддержки инклюзивного среднего профессионального образования инвалидов и лиц с ограниченными возможностями здоровья http://spo.wil.ru/ )'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Распоряжение министерства образования и науки Самарской области от 30 мая 2018 года № 403-р «Об определении ГАПОУ СО «Тольяттинский социально-педагогический колледж» базовой профессиональной образовательной организацией, обеспечивающей поддержку региональной системы инклюзивного профессионального образования инвалидов»'/>
        ]
    },
    {
        title: 'Локальные документы',
        content: [
            <LinkDataMode image={doc} alter='документ' link='' text='Положение о БПОО'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='План работы БПОО'/>,
        ]
    }
]

export const provInfo = [
    {
        title: 'Документы',
        content: [
            <LinkDataMode image={doc} alter='документ' link='' text='Наличие специальных технических средств обучения студентов с инвалидностью и ОВЗ коллективного и индивидуального пользования'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Справка о наличии специальных условий для получения образования обучающимися с ограниченными возможностями здоровья'/>,
        ]
    }
]

export const eduProvInfo = [
    {
        title: 'Документы',
        content: [
            <LinkDataMode image={doc} alter='документ' link='' text='Адаптированные образовательные программы'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Информационные материалы'/>,
            <LinkDataMode image={doc} alter='документ' link='' text='Повышение квалификации'/>,
        ]
    }
]

export const linksInfo = [
    {
        title: 'Ссылки',
        content: [
            <LinkDataMode image={doc} alter='ссылки на дополнительные ресурсы' link='' text='Портал информационной и методической поддержки инклюзивного среднего профессионального образования инвалидов и лиц с ограниченными возможностями здоровья'/>,
            <LinkDataMode image={doc} alter='ссылки на дополнительные ресурсы' link='' text='Федеральный методический центр СПО и ПО лиц с инвалидностью и ОВЗ'/>,
            <LinkDataMode image={doc} alter='ссылки на дополнительные ресурсы' link='' text='Национальный чемпионат по профессиональному мастерству среди инвалидов и лиц с ограниченными возможностями здоровья «Абилимпикс»'/>,
            <LinkDataMode image={doc} alter='ссылки на дополнительные ресурсы' link='' text='Экспертно-консультационное сопровождение деятельности профессиональных образовательных организаций, реализующих образовательные программы СПО и профессионального обучения для инвалидов и обучающихся с ОВЗ'/>,
            <LinkDataMode image={doc} alter='ссылки на дополнительные ресурсы' link='' text='ЦПО Самарской области "Профессиональное образование для лиц с инвалидностью и ОВЗ"'/>,
        ]
    }
]

export const confInfo = [
    {
        text: 'Смотреть положение о конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Polozenie_konfere_2noyabry_2018.pdf',
        img: doc
    },
    {
        text: 'Пост релиз',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Post_reliz_2018.pdf',
        img: doc
    },
    {
        text: 'Программа конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Programma_konferencii_2018.pdf',
        img: doc
    },
    {
        text: 'Сборник конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Sbornik_2018.PDF',
        img: doc
    },
    {
        text: 'Проведение занятия по учебной практике по ПМ01 «Ввод и обработка цифровой информации» по профессии 09.01.03 «Мастер по обработке цифровой информации» с применением специальных технических средств в обучении студентов с инвалидностью и с ОВЗ.',
        person: ' Преподаватель: Кондратьева И.С.',
        link: 'https://youtu.be/Lg-yidC8XS0?si=0CJVcr8ogbgW7izb',
        img: playIco
    },
    {
        text: 'Проведение занятия по дисциплине «Физическая культура» с применением средств и методов коррекции и компенсации недостатков в физическом и психическом развитии студентов с инвалидностью и с ОВЗ.',
        person: ' Преподаватель: Малашенко А.В.',
        link: 'https://youtu.be/7khvlMrcCjk?si=oAusnqNCi0LHP0jV',
        img: playIco
    },
    {
        text: 'Мастер-класс «Использование элементов арт-терапии в психолого-педагогическом сопровождении студентов с инвалидностью и с ОВЗ (на примере песочной терапии)».',
        person: ' Оплачко Н.Н.. педагог-психолог',
        link: 'https://youtu.be/zINNImo76OA?si=CsINlkM1AcnicT6d',
        img: playIco
    },
    {
        text: 'Проведение фрагмента занятия по дисциплине «Основы проектирования баз данных» по специальности 09.02.04 «Информационные системы (по отраслям)» с применением дистанционных образовательных технологий в обучении студентов с ОВЗ для создания условий удаленного доступа.',
        person: ' Преподаватель: Кондурар Н.Н.',
        link: 'https://youtu.be/HnLhZj3Ryd0?si=Z8ysolw2HF77y34M',
        img: playIco
    }
]

export const confInfo2 = [
    {
        text: 'Смотреть программу конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Programma_konferencii.pdf',
        img: doc
    },
    {
        text: 'Смотреть положение о конференции',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Polozenie_konferencyi.pdf',
        img: doc
    },
    {
        text: 'Пост-релиз',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/Post_reliz_konf.pdf',
        img: doc
    },
    {
        text: 'Дьякова. Опыт организации обучения ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/01_Diakova.pdf',
        img: doc
    },
    {
        text: 'Устименко. Индивидуальный образовательный маршрут как средство индивидуализации и дифференциации в профессиональной подготовке студентов с нарушениями ОДА',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/02_Ystimenko.pdf',
        img: doc
    },
    {
        text: 'Емельянова. Особенности разработки учебно-методического обеспечения образовательной программы с учетом индивидуальных особенностей обучающихся с ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/03_Emelyanova.pdf',
        img: doc
    },
    {
        text: 'Морозова. Особенности организации лекционно-семинарских занятий со студентами с нарушением слуха в процессе изучения дисциплин профессионального цикла',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/04_Morozova.pdf',
        img: doc
    },
    {
        text: 'Старикова. Особенности организации и реализации учебной и производственной практики',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/05_Starikova.pdf',
        img: doc
    },
    {
        text: 'Горбунова. Предпрофильная подготовка обучающихся 9-х классов – детей-инвалидов и детей с ОВЗ',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/06_Gorbunova.pdf',
        img: doc
    },
    {
        text: 'Назарова. Проблемы социализации студентов-инвалидов и пути их решения',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/07_Nazarova.pdf',
        img: doc
    },
    {
        text: 'Печерских. Содействие в трудоустройстве: от участия - до практического исполнения',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/08_Pecherskix.pdf',
        img: doc
    },
    {
        text: 'Горолатова. Организация образовательного пространства для инвалидов и лиц с ограниченными возможностями здоровья для получения профессионального образования в ГБПОУ «Тольяттинский социально-экономический колледж»',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/09_Gorolatova.pdf',
        img: doc
    },
    {
        text: 'Центр занятости. Рынок труда и программы центра занятости населения, применяемые для сопровождения граждан с ограниченными возможностями для успешного их трудоустройства',
        link: 'https://tspk.org/images/Resursn_centr_OVZ/10_Centr_zanyatosti.pdf',
        img: doc
    },
    {
        text: 'СБОРНИК КОНФЕРЕНЦИИ',
        link: 'https://tspk.org/images/Sbornik_konf_2017.pdf',
        img: doc
    },
]

export const confPic = [pic1, pic2, pic3, pic4, pic5, pic6]

export const confPic2 = [
    {
        img: picture1,
        text: 'Пленарная часть'
    },
    {
        img: picture2,
        text: 'Круглый стол'
    },
    {
        img: picture3,
        text: 'Семинар практикум'
    },
    {
        img: picture4,
        text: 'Выставка'
    },
]