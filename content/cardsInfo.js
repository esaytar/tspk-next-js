import asurso from '@/img/icons/cards/asurso.svg'
import bag from '@/img/icons/cards/bag.svg'
import courses from '@/img/icons/cards/courses.svg'
import docs from '@/img/icons/cards/docs.svg'
import fire from '@/img/icons/cards/fire.svg'
import info from '@/img/icons/cards/info-college.svg'
import moodle from '@/img/icons/cards/moodle.svg'
import people from '@/img/icons/cards/people.svg'
import puzzle from '@/img/icons/cards/puzzle.svg'
import timetable from '@/img/icons/cards/timetable.svg'
import way from '@/img/icons/cards/way.svg'
import wsr from '@/img/icons/cards/wsr.svg'

const cardsInfo = [
    {
        name: 'Сведения об образовательной организации',
        image: info,
        link: '/sveden/common'
    },
    {
        name: 'Расписание занятий',
        image: timetable,
        link: '/students/lessons-schedule'
    },
    {
        name: 'Приемная комиссия',
        image: people,
        link: '/applicants/priemnaya-comissiya'
    },
    {
        name: 'Наши специальности',
        image: bag,
        link: '/applicants/specialties'
    },
    {
        name: 'Дополнительное профессиональное образование',
        image: fire,
        link: 'http://x927215g.beget.tech/index.html'
    },
    {
        name: 'Проф. мастерство Профессионалы',
        image: wsr,
        link: '/professionals'
    },
    {
        name: 'Дуальное обучение',
        image: puzzle,
        link: '/dual-education'
    },
    {
        name: 'Содействие трудойстройству выпускников',
        image: way,
        link: '/students/rabota'
    },
    {
        name: 'Система дистанционного обучения Moodle',
        image: moodle,
        link: 'https://new-moodle.tspk.org/login/index.php'
    },
    {
        name: 'Перечень онлайн курсов',
        image: courses,
        link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl0KPCK0w3Hmd_iuqzj3sGd0LoQTBNsjNPhS5l5XyK_TiiL-06GUDqQ8ehaZIm_3Ulry-D-2_BJtBL/pubhtml?gid=0&single=true'
    },
    {
        name: 'Электронная система СПО АСУ РСО',
        image: asurso,
        link: 'https://spo.asurso.ru/security/#/login'
    },
    {
        name: 'Заказать справку',
        image: docs,
        link: ''
    }
]

export default cardsInfo