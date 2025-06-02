export const metadata = {
  title: "Статистика поданных заявлений 2024",
  description: "",
};
export default function page() {
    return (
        <>
            <div className='flex flex-col gap-5 mt-10'>
                <h3 className='text-[1.812rem] font-medium'>Статистика поданных заявлений 2024</h3>
                <p className='text-[1.25rem]'>Объём и структура контрольных цифр приёма граждан для обучения по образовательным программам среднего профессионального образования за счёт средств бюджета Самарской области, установленные образовательным организациям Самарской области на 2024 год</p>
            </div>
            <div id='grid-table-container' className='grid grid-cols-6 gap-1'>
                <div className='bg-main-blue/2 rounded-[5px] p-2.5 text-main-blue text-18 font-medium'>Код профессии, специальности в соответствии с перечнем, утвержденным приказом минобрнауки России от 29.10.2013 № 1199</div>
                <div className='bg-main-blue/2 rounded-[5px] p-2.5 text-main-blue text-18 font-medium'>Наименование профессии, специальности</div>
                <div className='flex flex-col gap-1' id='third-grid-column'>
                    <div className='bg-main-blue/2 rounded-[5px] p-2.5 text-main-blue text-18 font-medium min-h-34'>
                        Контрольные цифры приема граждан по образовательным программам среднего профессионального образования (не менее норматива по количеству человек в группе) по формам обучения
                    </div>
                    <div className='flex gap-1 w-full'>
                        <div className='p-2.5 flex flex-col shadow-main text-18 w-full bg-white'>
                            <span className='text-main-blue'>Очная</span> Кол-во бюджетных мест
                        </div>
                        <div className='shadow-main p-2.5 flex flex-col text-18 w-full bg-white'><p className='my-auto'>Подано заявлений</p></div>
                        <div className='p-2.5 flex flex-col shadow-main text-18 w-full bg-white'>
                            <span className='text-main-blue'>Заочная</span> Кол-во бюджетных мест
                        </div>
                        <div className='shadow-main p-2.5 flex flex-col text-18 w-full bg-white'><p className='my-auto'>Подано заявлений</p></div>
                    </div>
                </div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>09.01.03</p></div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>Оператор информационных систем и ресурсов</p></div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>25</p></div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>25</p></div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>25</p></div>
                <div className="p-2 shadow-main bg-white text-18"><p className='my-auto'>25</p></div>
            </div>
        </>
    )
}
