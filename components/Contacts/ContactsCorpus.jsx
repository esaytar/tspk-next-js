import ContactStroke from './ContactStroke'
import phone from '@/img/icons/phone-border.svg'
import mail from '@/img/icons/email-border.svg'
import marker from '@/img/icons/marker-border.svg'

export default function ContactsCorpus({nameCorpus, id}) {
    const contactsInfo1 = [
        {
            text: '8 (8482) 24-65-92 - Приемная комиссия',
            icon: phone,
            link: 'tel:+78482246592'
        },
        {
            text: '8 (8482) 24-10-25 - Вахта 1 корпуса',
            icon: phone,
            link: 'tel:+78482241025'
        },
        {
            text: '8 (8482) 24-30-54 - Приемная директора',
            icon: phone,
            link: 'tel:+78482243054'
        },
        {
            text: 'so_tspk@samara.edu.ru',
            icon: mail,
            link: 'mailto:so_tspk@samara.edu.ru'
        },
        {
            text: '445012, Самарская область, г. Тольятти, ул. Мурысева, 84',
            icon: marker,
            link: 'https://yandex.ru/maps/-/CHaZeMIN'
        },
    ]

    const contactsInfo2 = [
        {
            text: '8 (8482) 48-20-93 - Вахта 2 корпуса (очное ФК, АФК и заочное отделение)',
            icon: phone,
            link: 'tel:+78482482093'
        },
        {
            text: '8 (8482) 28-36-44 - Секретарь учебной части ФК, АФК',
            icon: phone,
            link: 'tel:+78482283644'
        },
        {
            text: 'college.korpys2@yandex.ru - Секретарь учебной части ФК, АФК',
            icon: mail,
            link: 'mailto:college.korpys2@yandex.ru'
        },
        {
            text: '445012, Самарская область, г. Тольятти, ул. Мурысева, 84',
            icon: marker,
            link: 'https://yandex.ru/maps/-/CHaZiZ4Z'
        },
    ]

    let array = id === 0 ? contactsInfo1 : contactsInfo2

    return (
        <>
            <p className="lg:text-18 text-[1.14rem] font-medium">{nameCorpus}</p>
            <ul className="flex flex-col gap-[0.71rem] lg:gap-2.5">
                {array.map((item, index, array) => (
                    <ContactStroke 
                        key={index}
                        text={item.text}
                        imageSrc={item.icon}
                        link={item.link}
                        length={array.length}
                        id={index}
                    />
                ))}
            </ul>
        </>
    )
}
