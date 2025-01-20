import React from 'react'
import ContactStroke from './ContactStroke'
import phone from '@/img/icons/phone-border.svg'
import mail from '@/img/icons/email-border.svg'
import marker from '@/img/icons/marker-border.svg'

export default function ContactsCorpus({nameCorpus, id}) {
    const contactsInfo1 = [
        {
            text: '8 (8482) 24-65-92 - Приемная комиссия',
            icon: phone,
            link: ''
        },
        {
            text: '8 (8482) 24-10-25 - Вахта 1 корпуса',
            icon: phone,
            link: ''
        },
        {
            text: '8 (8482) 24-30-54 - Приемная директора',
            icon: phone,
            link: ''
        },
        {
            text: 'so_tspk@samara.edu.ru',
            icon: mail,
            link: ''
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
            link: ''
        },
        {
            text: '8 (8482) 28-36-44 - Секретарь учебной части ФК, АФК',
            icon: phone,
            link: ''
        },
        {
            text: 'college.korpys2@yandex.ru - Секретарь учебной части ФК, АФК',
            icon: mail,
            link: ''
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
            <p className="text-18 font-semibold">{nameCorpus}</p>
            <ul className="flex flex-col gap-2.5">
                {array.map((item, index) => (
                    <ContactStroke 
                        key={index}
                        text={item.text}
                        imageSrc={item.icon}
                        link={item.link}
                    />
                ))}
            </ul>
        </>
    )
}
