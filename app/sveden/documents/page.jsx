import { documentsInfo } from '../../../content/collegeInfo';
import InfoString from '../../../components/infoPages/InfoString';

const title = 'Документы'

export const metadata = {
  title: title,
  description: "",
};

export default function Documents() {
    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {documentsInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}>
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                        )
                    ) : (
                        <div key={index} className='px-2.5'>{item.content}</div>
                    )}
                </InfoString>
            ))}
            <InfoString 
                title="Предписание органов осуществляющих контроль (надзор) в сфере образования (до подтверждения органом, осуществляющим государственный контроль (надзор) в сфере образования, исполнения предписания или признания его недействительным в установленном законом порядке) (при наличии)">
                    <div className='w-full overflow-hidden'>
                        <div className='overflow-auto'>
                            <table className='border-spacing-2 table-fixed text-[1.14rem] lg:text-18'>
                                <thead>
                                    <tr className='text-mainBlue w-full'>
                                        <th className='bg-mainBlue/5 relative px-2.5 py-1 w-[24%]'>Проверяющая организация</th>
                                        <th className='bg-mainBlue/5 relative px-2.5 py-1 w-[20%]'>Тема проверки</th>
                                        <th className='bg-mainBlue/5 relative px-2.5 py-1 w-[13%]'>Дата проведения проверки</th>
                                        <th className='bg-mainBlue/5 relative px-2.5 py-1 w-[21%]'>Итоги проверки, предписания</th>
                                        <th className='bg-mainBlue/5 relative px-2.5 py-1 w-[21.5%]'>Устранения нарушений</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='lg:p-10 p-[1.43rem] bg-white relative text-left align-baseline'>ОТДЕЛЕНИЕ ФОНДА ПЕНСИОННОГО И СОЦИАЛЬНОГО СТРАХОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ПО САМАРСКОЙ ОБЛАСТИ</td>
                                        <td className='lg:p-10 p-[1.43rem] bg-white relative text-left align-baseline'>Плановая проверка полноты и достоверности предоставляемых страхователем или застрахованным лицом сведений и документов, необходимых для назначения и выплаты страхового обеспечения, а также для возмещения расходов страхователя на выплату социального пособия на погребение</td>
                                        <td className='lg:p-10 p-[1.43rem] bg-white relative text-left align-baseline'>02.03.2023 - 17.03.2023</td>
                                        <td className='lg:p-10 p-[1.43rem] bg-white relative text-left align-baseline'><a className='underline' href="">Акт выездной проверки</a></td>
                                        <td className='lg:p-10 p-[1.43rem] bg-white relative text-left align-baseline'>Нарушений не выявленно</td>
                                    </tr>
                                    <tr>
                                        <td className='p-10 bg-white relative align-baseline'>Прокуратора Комсомольского района г. Тольятти</td>
                                        <td className='p-10 bg-white relative align-baseline'>Защита прав и свобод граждан, охраняемых законом интересов общества и государства Проверка исполнения законодательства об образовании, охране здоровья граждан</td>
                                        <td className='p-10 bg-white relative align-baseline'>15.03.2023 - 20.03.2023</td>
                                        <td className='p-10 bg-white relative align-baseline'><a className='underline' href="">Решение о проведении проверки</a></td>
                                        <td className='p-10 bg-white relative align-baseline'><a className='underline' href="">Представление об устранении нарушений</a></td>
                                    </tr>
                                    <tr> 
                                        <td className='p-10 bg-white relative align-baseline'>Прокуратора Комсомольского района г. Тольятти</td>
                                        <td className='p-10 bg-white relative align-baseline'>Исполнение требований законодательства о противодействии терроризму</td>
                                        <td className='p-10 bg-white relative align-baseline'>29.03.2023 - 29.03.2023</td>
                                        <td className='p-10 bg-white relative align-baseline'><a className='underline' href="">Требование</a></td>
                                        <td className='p-10 bg-white relative align-baseline'>Нарушений не выявленно</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </InfoString>
        </div>
    )
}
