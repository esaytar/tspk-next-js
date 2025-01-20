import Image from "next/image";
import FormPart from "../../components/FormPart";
import ContactsCorpus from "../../components/Contacts/ContactsCorpus";
import Map from "../../components/ui/Map";

export default function Contacts() {
    const contactsFormInfo = [
        {
            label: 'ФИО',
            placeholder: 'Иванов Иван Иванович',
            for: 'fio',
            type: 'text'
        },
        {
            label: 'Электронная почта',
            placeholder: 'ivan_2004@mail.ru',
            for: 'e-mail',
            type: 'text'
        },
        {
            label: 'Номер телефона',
            placeholder: '+7 (900) 123-45-67',
            for: 'phone-number',
            type: 'tel'
        },
        {
            label: 'Сообщение',
            placeholder: 'Сообщение',
            for: 'your-message',
            type: ''
        },
    ]
    const corpNames = ['1 КОРПУС (Мурысева 84)', '2 КОРПУС (Ленинградская 28)']

    return (
        <>
            <div className="flex flex-col gap-[1.43rem] px-[2.14rem] w-full mt-[10.3rem]
            lg:max-w-[80rem] xl:p-0 md:gap-10 2xl:max-w-[73%] 2xl:min-w-[84.5rem]">
                <h1 className="text-[1.81rem] font-semibold leading-[33.98px]">Контакты</h1>
                <div className="flex gap-10 items-center">
                    <form action="" 
                    className="flex flex-col gap-2.5 bg-white shadow-newShad p-10 rounded-[1.25rem] w-1/2">
                        {contactsFormInfo.map((item, index) => (
                            <FormPart
                                key={index}
                                labelName={item.label} 
                                placeholderName={item.placeholder} 
                                nameFor={item.for} 
                                inputType={item.type}
                            />
                        ))}
                        <input type="submit" value="Отправить"
                        className="bg-mainBlue w-full text-white px-5 py-[1.125rem] rounded-[10px] mt-2.5" />
                    </form>
                    <div className="flex flex-col gap-5 w-1/2">
                        {corpNames.map((i, index) => <ContactsCorpus key={index} nameCorpus={i} id={index}/>)}
                        <p className="text-grayMainText leading-[18.75px]">Для соединения с остальными службами необходимо позвонить на Вахту и сообщить службу для соединения (например: соедините меня с кабинетом 104).
                        <br />Заочное отделение находится во 2 корпусе, Ленинградская 28 (позвонить на вахту и попросить соединить с методистом заочного отделения)</p>
                    </div>
                </div>
            </div>
            <Map styles='w-full min-h-[500px]'/>
        </>
    )
}
