"use client"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import FormPart from '../FormPart'

export default function ContactsForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    })
    const [status, setStatus] = useState("")

    const contactsFormInfo = [
        {
            label: 'ФИО',
            placeholder: 'Иванов Иван Иванович',
            for: 'fullName',
            type: 'text'
        },
        {
            label: 'Электронная почта',
            placeholder: 'ivan_2004@mail.ru',
            for: 'email',
            type: 'email'
        },
        {
            label: 'Номер телефона',
            placeholder: '+7 (900) 123-45-67',
            for: 'phone',
            type: 'tel'
        },
        {
            label: 'Сообщение',
            placeholder: 'Сообщение',
            for: 'message',
            type: ''
        },
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus("Отправка...")
        emailjs
            .send(
                "service_emi1pt9", 
                "template_ql73v59",
                formData,
                "FCWNVGwq0hjwiZBsr", 
            )
            .then(
                (result) => {
                    const res = result.text
                    setStatus("Сообщение успешно отправлено!")
                    setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        message: "",
                })
            },
                (error) => {
                    console.error("Ошибка:", error.text)
                    setStatus("Ошибка при отправке. Попробуйте снова.")
            },
        );
    };

    return (
        <form onSubmit={handleSubmit} action="" 
            className="flex flex-col w-full gap-2.5 bg-white shadow-main p-[1.43rem] rounded-[1.25rem] lg:w-[58%] order-2 
            lg:order-1 lg:p-10">
            {contactsFormInfo.map((item, index) => (
                <FormPart
                    toChange={handleChange}
                    key={index}
                    labelName={item.label} 
                    placeholderName={item.placeholder} 
                    nameFor={item.for} 
                    inputType={item.type}
                    value={formData[item.for]}
                />
            ))}
            <input type="submit" value="Отправить"
                className="bg-main-blue hover:bg-[#0949C2] transition-colors w-full cursor-pointer text-white text-18 px-5 py-[1.125rem] rounded-[10px] mt-2.5" />
            {status && <p className="text-center">{status}</p>}
        </form>
    )
}
