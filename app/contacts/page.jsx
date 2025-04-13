import ContactsCorpus from "../../components/Contacts/ContactsCorpus";
import dynamic from "next/dynamic";
import ContactsForm from "../../components/Contacts/ContactsForm";
const Map = dynamic(() => import('../../components/ui/Map'))

export default function Contacts() {
    const corpNames = ['1 КОРПУС (Мурысева 84)', '2 КОРПУС (Ленинградская 28)']

    return (
        <>
            <div className="flex flex-col gap-[1.43rem] w-full mt-[6.75rem]
            md:gap-10 lg:mt-10 lg:p-0">
                <h1 className="text-[1.29rem] lg:text-[1.81rem] font-medium leading-[33.98px]">Контакты</h1>
                <div className="flex gap-10 items-center flex-col lg:flex-row">
                    <ContactsForm/>
                    <div className="flex flex-col gap-5 w-full lg:w-1/2 lg:order-2">
                        {corpNames.map((i, index) => <ContactsCorpus key={index} nameCorpus={i} id={index}/>)}
                        <p className="text-gray-main-text leading-[16.41px] lg:leading-[18.75px]">Для соединения с остальными службами необходимо позвонить на Вахту и сообщить службу для соединения (например: соедините меня с кабинетом 104).
                        <br />Заочное отделение находится во 2 корпусе, Ленинградская 28 (позвонить на вахту и попросить соединить с методистом заочного отделения)</p>
                    </div>
                </div>
            </div>
            <Map styles='w-full lg:min-h-[500px] rounded-[1.25rem]'/>
        </>
    )
}
