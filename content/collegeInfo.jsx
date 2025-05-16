import doc from '@/img/icons/info-pages-icons/doc_icon.svg'
import docPDF from '@/img/icons/info-pages-icons/doc_pdf.svg'
import LinkDataMode from '../components/infoPages/LinkDataMode'
import MoreLinksMode from '../components/infoPages/MoreLinksMode'
import UsualDataMode from '../components/infoPages/UsualDataMode'
import Image from 'next/image'

export const basicInfo = [
    {
        title: 'Полное и сокращенное (при наличии) наименование образовательной организации',
        content: [
            <p><span className="opacity-50">Полное название</span> государственное автономное профессиональное образовательное учреждение Самарской области "Тольяттинский социально-педагогический колледж"</p>,
            <p><span className="opacity-50">Сокращенное название</span> ГАПОУ ТСПК</p>
        ]
    },
    {
        title: 'Дата создания образовательной организации',
        content: [
            'Учредителем образовательной организации является Самарская область',
            'Функции и полномочия учредителя осуществляются министерством образования и науки Самарской области',
            <span>Руководитель: <a className="underline" href="https://www.samregion.ru/persons/akopyan-viktor-albertovich/?ysclid=lgerd4x6y5605787804">Акопьян Виктор Альбертович</a>, министр образования и науки Самарской области</span>,
            'Юридический адрес: Самарская область, 443099, г. Самара, ул. А. Толстого, д. 38/16',
            'Контактный телефон: 8 (846) 332-11-07',
            <span>Адрес сайта в сети Интернет: <a className="underline" href="http://www.educat.samregion.ru/">http://www.educat.samregion.ru/</a></span>,
            <span>Адрес электронной почты: <a className="underline" href="mailto:main@samara.edu.ru">main@samara.edu.ru</a></span>
        ]
    },
    {
        title: 'Представительства и филиалы образовательной организации (при наличии) (в том числе, находящихся за пределами Российской Федерации)',
        content: <span className="px-2.5">Представительств и филиалов у образовательной организации нет</span>
    },
    {
        title: 'Место нахождения образовательной организации, её представительств и филиалов (при наличии)',
        content: [
            'Российская Федерация, 445012, г. Тольятти, ул. Мурысева, 84',
            'Место осуществления образовательной деятельности организации',
            'Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1).',
            'Российская Федерация, 445010, Самарская область, г. Тольятти, ул. Ленинградская, 28 (учебный корпус № 2)',
            'Российская Федерация, 445020, Самарская область, г. Тольятти, ул. Ушакова, 64 (общежитие ГАПОУ ТСПК, 6 и 7 этажи)'
        ]
    },
    {
        title: 'Режим и график работы образовательной организации, её представительств и филиалов (при наличии)',
        content: [
            <span>Образовательный процесс осуществляется по шестидневной рабочей неделе, согласно <a href="#" className="underline">расписанию учебных занятий</a>.</span>,
            'Воскресенье - выходной день.',
            'Административно-управленческий и вспомогательный персонал - пятидневная рабочая неделя.',
            'Понедельник - четверг с 8-30 до 17-00',
            'Пятница с 8-30 до 16-00',
            'Суббота, воскресенье - выходные дни.',
            'Педагогический персонал - шестидневная рабочая неделя.',
            'Воскресенье - выходной день.'
        ]
    },
    {
        title: 'Контактные телефоны образовательной организации, её представительств и филиалов (при наличии)',
        content: [
            'Учебный корпус №1: 8-(8482) 24-30-54, 8-(8482) 24-10-25',
            'Учебный корпус №2: 8-(8482) 28-36-44, 8-(8482) 48-20-93',
            'Общежитие: 8-(8482) 48-02-70'
        ]
    },
    {
        title: 'Адреса электронной почты образовательной организации, её представительств и филиалов (при наличии)',
        content: <span className="px-2.5">so_tspk@samara.edu.ru</span>
    },
    {
        title: 'Адрес официального сайта представительств, и филиалов образовательной организации (при наличии), или страницы в информационно-телекоммуникационной сети «Интернет»',
        content: [
            <a href="https://tspk.org">https://tspk.org</a>,
            <a href="https://t.me/tspktlt">https://t.me/tspktlt</a>,
            <a href="https://vk.com/tspk63">https://vk.com/tspk63</a>
        ]
    },
    {
        title: 'Информация о местах осуществления образовательной деятельности, включая места, не указываемые в соответствии с Федеральным законом «Об образовании в Российской Федерации» в приложении к лицензии на осуществление образовательной деятельности',
        content: [ 
            [
                <UsualDataMode title='Место осуществления образовательной деятельности'>
                    <span>Здание ГАПОУ ТСПК, расположенное по адресу:</span>  
                    <span>Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1).</span> 
                    <span>Российская Федерация, 445010, Самарская область, г. Тольятти, ул. Ленинградская, 28 (учебный корпус № 2)</span>
                </UsualDataMode>
            ],
            [
                <UsualDataMode title='Места осуществления образовательной деятельности по дополнительным профессиональным программам'>
                    <span>Здание ГАПОУ ТСПК, расположенное по адресу:</span>  
                    <span>Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1).</span> 
                    <span>Российская Федерация, 445010, Самарская область, г. Тольятти, ул. Ленинградская, 28 (учебный корпус № 2)</span>
                </UsualDataMode>
            ],
            [
                <UsualDataMode title='Места осуществления образовательной деятельности по основным программам профессионального обучения'>
                    <span>Здание ГАПОУ ТСПК, расположенное по адресу:</span>  
                    <span>Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1).</span> 
                    <span>Российская Федерация, 445010, Самарская область, г. Тольятти, ул. Ленинградская, 28 (учебный корпус № 2)</span>
                </UsualDataMode>
            ],
            [
                <UsualDataMode title='Места осуществления образовательной деятельности при использовании сетевой формы реализации образовательных программ'>
                    <a href='https://tspk.org/images/Local_act/Polozenie_o_setevoy_forme.pdf' className='flex gap-1 items-center underline'><Image src={doc} alt="документ" />Положение сетевой форме реализации образовательных программ в ГАПОУ ТСПК</a>  
                    <a href='https://tspk.org/images/veduziykollege/reglamnt_setevogo_vzaim.pdf' className='flex gap-1 items-center underline'><Image src={doc} alt="документ" />Регламент сетевого взаимодействия ведущего колледжа с профильными профессиональными образовательными организациями</a>  
                    <a href='https://tspk.org/images/Local_act/Polozenie_o_setevoy_forme.pdf' className='flex gap-1 items-center underline'><Image src={doc} alt="документ" />Положение о центре сетевого взаимодействия ГАПОУ ТСПК</a>  
                </UsualDataMode>
            ],
            [
                <UsualDataMode title='Места проведения практики'>
                    <a href='' className='flex gap-1 items-center underline'><Image src={doc} alt="документ" />Места проведения практики</a>  
                </UsualDataMode>
            ],
            [
                <UsualDataMode title='Места проведения практической подготовки обучающихся'>
                    <span>Здание ГАПОУ ТСПК, расположенное по адресу:</span>  
                    <span>Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1).</span> 
                    <span>Российская Федерация, 445010, Самарская область, г. Тольятти, ул. Ленинградская, 28 (учебный корпус № 2)</span>
                </UsualDataMode>
            ],
        ]
    }
]

export const structureInfo = [
    {
        title: 'Информация о структуре и об органах управления образовательной организации',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2016/struktura.pdf' text='Просмотр' /> 
    },
    {
        title: 'Наименование структурных подразделений (органов управления) при наличии',
        content: [
            'Наименование структурного подразделения: Учебно-производственный комплекс (УПК)',
            'Информация о руководителях структурных подразделений: Михайловская Татьяна Александровна',
            <p>Должность: Зав. отделением специальности преподавание в начальных классах к.п.н.тел.: 8 (8482) 24-10-25e-mail: <a className='underline' href="mailto:so_tspk@samara.edu.ru">so_tspk@samara.edu.ru</a></p>,
            'Местонахождение структурных подразделений: Российская Федерация, 445012, Самарская область, г. Тольятти, ул. Мурысева, 84 (учебный корпус № 1)',
            <p>Адрес официального сайта в информационно-телекоммуникационной сети "Интернет" структурных подразделений (органов управления) образовательной организации: <a className='underline' href='https://tspk.org'>https://tspk.org</a></p>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_strukturnom_podrazdelenii.pdf' text='Положение о структурном подразделении' /> 
        ]
    }, 
    {
        title: 'Наблюдательный совет',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_nabludatelnom_sovete.pdf' text='Положение о Наблюдательном совете' />,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Prikaz_o_nabl_sovete.pdf' text='Приказ об утверждении состава о Наблюдательном совете' />,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_nabludatelnom_sovete_dopolnenie.pdf' text='Дополнение к положению о наблюдательном совете' />,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/izmenenia_nabl_sovet_705-od.pdf' text='Приказ № 322-од от 20.05.2024 о внесении изменений в приказ МО и Н СО от 20.09.2019 № 300-од' />,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Ob_izm_v_sostav_nab_soveta_13-od.pdf' text='Приказ 670-од от 04.04.2023 о внесении изменений в отдельные приказы МО и Н СО' />
        ]
    }, 
    {
        title: 'Конференция работников и обучающихся образовательной организации',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_konf.pdf' text='Положение о Конференции работников и обучающихся образовательной организацииложение о Конференции работников и обучающихся образовательной организации' /> 
    }, 
    {
        title: 'Совет колледжа образовательной организации',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_sovete_uchrezdenia.pdf' text='Положение о Совете колледжа образовательной организации' />
    },
    {
        title: 'Педагогический совет образовательной организации',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_pedagogicheskom_sovete.pdf' text='Положение о педагогическом совете образовательной организации' />  
    },
]

export const documentsInfo = [
    {
        title: 'Устав образовательной организации',
        content: <MoreLinksMode>
                    <img src={docPDF} alt="" /> 
                    <span className='flex flex-col sm:flex-row gap-1'>
                        <span className='flex gap-1 flex-wrap'>
                            <a className='underline' href="https://tspk.org/images/oficial_dokument_2016/struktura.pdf">Просмотр</a> 
                            | Изменения:
                        </span>
                        <span className='flex gap-1 flex-wrap'>
                            <a className='underline' href="https://tspk.org/images/oficial_dokument_2019/Ystav_GAPOY_TSPK_2019_edit.pdf">05.02.2019</a> |
                            <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2023/Ystav_GAPOY_TSPK_2023_edit.pdf">22.06.2023</a> |
                            <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2023/Ystav_GAPOY_TSPK_2023_edit_2.pdf">04.10.2023</a>
                        </span>
                    </span>
                </MoreLinksMode>
    }, 
    {
        title: 'Лицензия на осуществление образовательной деятельности (с приложениями)',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2022/LicenziaTSPK.pdf' text='Просмотр'/>
    },
    {
        title: 'Свидетельство о государственной аккредитации (с приложениями) при наличии',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/oficial_dokument_2015/Svidetelstvo_akreditaciya_2015.pdf' text='Просмотр'/>
    },
    {
        title: 'Правила внутреннего распорядка обучающихся',
        content: <MoreLinksMode>
                    <img src={docPDF} alt="PDF-файл" /> 
                    <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2021/el_podpiska/EP_Pravila_vnutrennego_rasporyadka_studentov.pdf">Электронная подпись</a> | 
                    <a className='underline' href="https://tspk.org/images/SvediniaObOrg/Pravila_vnutrennego_rasporyadka_studentov_dopolnenia.pdf">Изменения</a>
                </MoreLinksMode>
    }, 
    {
        title: 'Положение о режиме занятий обучающихся',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2021/Polozenie_o_rezime_zanyatiy_obuch.pdf' text='Просмотр'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2017/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia2017.pdf' text='Изменения и дополнения (30.03.2017)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2017/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia2.pdf' text='Изменения и дополнения (28.05.2018)'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia_2019.pdf' text='Изменения и дополнения (05.06.2019)'/>
        ]
    }, 
    {
        title: 'Коллективный договор',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2023/Kol_dofovor_2023-26.pdf' text='Коллективный договор 2023-2026'/>
    },
    {
        title: 'Отчет о результатах самообследования',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/Samoobsledovanie/Otchet_o_rezultatax_samoobsledovania_2023.pdf' text='Отчет о результатах самообследования на 2023г.'/>
    },
    {
        title: 'Локальные нормативные акты:',
        content: [
            [
                <UsualDataMode title='Программа модернизации ГАПОУ ТСПК'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/Programma_modern_2018_TSPK2.pdf">Просмотр</a> + 
                        <a className='underline' href="https://tspk.org/images/Programma_modern_2018_TSPK2_dop.pdf">Дополнения к программе</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Правила приема обучающихся в ГАПОУ ТСПК'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/abitureint/2023/Pravila_priema.pdf">Электронная подпись</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Формы, периодичности и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся'>
                     <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2021/el_podpiska/Polozenie_ob_org_tekuz_kontrol_el.pdf">Электронная подпись</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Порядок и основания перевода, отчисления и восстановления обучающихся'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2021/el_podpiska/EP_Poryadok%20i%20osnovaniya%20perevoda%20otchisleniya%20i%20vosstanovleniya%20obuchayushchihsya.pdf">Электронная подпись</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Порядок оформления, возникновения, прекращения отношений между ГАПОУ ТСПК и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2021/el_podpiska/EP_Poriadok_oformlenia_vozniknovenia_otnoshenii_obuchausimisia.pdf">Электронная подпись</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Правила внутреннего распорядка обучающихся'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/Pravila_vnutrennego_rasporyadka_studentov.pdf">Просмотр</a>
                    </span>
                </UsualDataMode>
            ], 
            [
                <UsualDataMode title='Правила внутреннего трудового распорядка'>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2017/Pravila_vnutrennego_trudovogo_rasporiadka_ep.pdf">Электронная подпись</a>
                    </span>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2017/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia2017_ep.pdf">Электронная подпись (изменения) (30.03.17)</a>
                    </span>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/SvediniaObOrg/2017/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia2018_ep.pdf">Электронная подпись (изменения) (28.05.18)</a>
                    </span>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/Local_act/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia_2020_ep.pdf">Электронная подпись (изменения) (10.11.20)</a>
                    </span>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/Local_act/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia_2021.pdf">Изменения и дополнения (27.08.2021)</a>
                    </span>
                    <span className='flex items-center gap-1'> 
                        <img src={docPDF} alt="PDF-файл" /> 
                        <a className='underline' href="https://tspk.org/images/Local_act/Pravila_vnutrennego_trudovogo_rasporiadka_izmenenia_2023.pdf">Изменения и дополнения (27.08.2023)</a>
                    </span>
                </UsualDataMode>
            ], 
        ]
    }
]

export const standartsInfo = [
    {
        title: 'УГС 09.00.00 "Информатика и вычислительная техника',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.01.01_OISiR.pdf' text='09.01.03 "Оператор информационных систем и ресурсов" № 974 от 19 декабря 2022 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.01.03%20MCI.pdf' text='09.01.03 "Мастер по обработке цифровой информации" № 854 от 2 августа 2013 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.02.01_KSiK_2.pdf' text='09.02.01 "Компьютерные системы и комплексы" № 849 от 28 июля 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.02.01_KSiK.pdf' text='09.02.01 "Компьютерные системы и комплексы" № 362 от 25 мая 2022 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.02.04%20IS.pdf' text='09.02.04 "Информационные системы" (по отраслям) № 525 от 14 мая 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/09.02.07%20ISIP.pdf' text='09.02.07 "Информационные системы и программирование" № 1547 от 9 декабря 2016 г.'/>,
        ]
    }, 
    {
        title: 'УГС 39.00.00 Социология и социальная работа',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/39.02.01%20SR.pdf' text='39.02.01 "Социальная работа" № 506 от 12 мая 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/39.02.01_SR_2.pdf' text='39.02.01 "Социальная работа" № 773 от 26 авуста 2022 г.'/>,
        ]
    },
    {
        title: 'УГС 44.00.00 Образование и педагогические науки',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.01_DO_1.pdf' text='44.02.01 "Дошкольное образование" № 743 от 1351 октября 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.01%20DO.pdf' text='44.02.01 "Дошкольное образование" № 743 от 17 августа 2022 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.02%20NK.pdf' text='44.02.02 "Преподавание в начальных классах" № 1353 от 27 октября 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.02_NK_2.pdf' text='44.02.02 "Преподавание в начальных классах" № 742 от 17 августа 2022 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.03%20PDO.pdf' text='44.02.03 "Педагогика дополнительного образования" № 998 от 13 августа 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.04%20SDO.pdf' text='44.02.04 "Специальное дошкольное образование" № 1354 от 27 октября 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/44.02.04_SDO_2.pdf' text='44.02.04 "Специальное дошкольное образование" № 687 от 14 сентября 2023 г.'/>,
        ]
    },
    {
        title: 'УГС 46.00.00 История и археология',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/46.02.01%20DOYA.pdf' text='46.02.01 "Документационное обеспечение управления и архивоведение" № 975 от 11 августа 2014 г.'/>
    },
    {
        title: 'УГС 49.00.00 Физическая культура и спорт',
        content: [
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/49.02.01%20FK.pdf' text='49.02.01 "Физическая культура" № 976 от 11 августа 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/49.02.01%20FK.pdf' text='49.02.01 "Физическая культура" № 968 от 11 ноября 2022 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/49.02.02%20AFK.pdf' text='49.02.02 "Адаптивная физическая культура" № 994 от 13 августа 2014 г.'/>,
            <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2019/standarty/49.02.02_AFK_2.pdf' text='49.02.02 "Адаптивная физическая культура" № 640 от 28 августа 2023 г.'/>,
        ]
    },
    {
        title: 'Об утвержденных образовательных стандартах, самостоятельно устанавливаемых требованиях с приложением образовательных стандартов, самостоятельно устанавливаемых требований в форме электронного документа или в виде активных ссылок, непосредственный переход по которым позволяет получить доступ к образовательному стандарту, самостоятельно устанавливаемым требованиям в форме электронного документа',
        content: 'Подпункт не требуется'
    }
]

export const paidServInfo = [
    {
        title: 'Документ о порядке оказания платных образовательных услуг, в том числе образец договора об оказании платных образовательных услуг, документ об утверждении стоимости обучения по каждой образовательной программе',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/Local_act/Polozenie_o_predostavlenie_platnix_obr_uslug.pdf' text='Просмотр положения'/>,
    }, 
    {
        title: 'Об утверждении стоимости обучения по каждой образовательной программе',
        content: <LinkDataMode image={docPDF} link='https://tspk.org/images/SvediniaObOrg/2022/Pereceni_platnix_uslug.pdf' text='Перечень на платные образовательные услуги'/>,
    }, 
    {
        title: 'Об установлении размера платы, взимаемой с родителей (законных представителей) за присмотр и уход за детьми, осваивающими образовательные программы дошкольного образования в организациях, осуществляющих образовательную деятельность, за содержание детей в образовательной организации, реализующей образовательные программы начального общего, основного общего или среднего общего образования, если в такой образовательной организации созданы условия для проживания обучающихся в интернате, либо за осуществление присмотра и ухода за детьми в группах продленного дня в образовательной организации, реализующей образовательные программы начального общего, основного общего или среднего общего образования.',
        content: 'Услуга отсутствует в образовательном учреждении'
    }
]

export const intersInfo = [
    {
        title: 'О заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки (при наличии)',
        content: 'Заключенных и планируемых к заключению договора с иностранными и международными организациями по вопросам образования и науки у ОУ нет'
    },
    {
        title: 'О международной аккредитации образовательных программ (при наличии)',
        content: 'Международной аккредитации образовательных программ у ОУ нет'
    }
]