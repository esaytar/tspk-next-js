"use client"
import { useState, useRef } from "react";
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
    const phoneInputRef = useRef(null)

    const formatPhone = (value, prevValue) => {
        if (!value) return "";
        
        if (value.length < prevValue.length) {
            return value;
        }
        
        const cleaned = value.replace(/\D/g, "");
        const trimmed = cleaned.slice(0, 11);
        
        const match = trimmed.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (!match) return value;
        
        return [
            "+7",
            match[2] ? ` (${match[2]}` : " (",
            match[3] ? `) ${match[3]}` : match[2] ? ") " : "",
            match[4] ? `-${match[4]}` : "",
            match[5] ? `-${match[5]}` : "",
        ].join("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        
        if (name === "phone") {
            const formatted = formatPhone(value, formData.phone)
            setFormData({
                ...formData,
                [name]: formatted,
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus("Отправка...")
        
        const dataToSend = {
            ...formData,
            phone: formData.phone.replace(/\D/g, "")
        }
        
        emailjs
            .send(
                "service_emi1pt9", 
                "template_ql73v59",
                dataToSend,
                "FCWNVGwq0hjwiZBsr", 
            )
            .then(
                (result) => {
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
            placeholder: '+7 (___) ___-__-__',
            for: 'phone',
            type: 'tel',
            ref: phoneInputRef 
        },
        {
            label: 'Сообщение',
            placeholder: 'Сообщение',
            for: 'message',
            type: ''
        },
    ]

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2.5 bg-white shadow-main p-[1.43rem] rounded-[1.25rem] lg:w-[58%] order-2 lg:order-1 lg:p-10">
            {contactsFormInfo.map((item, index) => (
                <FormPart
                    toChange={handleChange}
                    key={index}
                    labelName={item.label} 
                    placeholderName={item.placeholder} 
                    nameFor={item.for} 
                    inputType={item.type}
                    value={formData[item.for]}
                    inputRef={item.ref} 
                />
            ))}
            <input type="submit" value="Отправить"
                className="bg-main-blue hover:bg-[#0949C2] transition-colors w-full cursor-pointer text-white text-18 px-5 py-[1.125rem] rounded-[10px] mt-2.5" />
            {status && <p className="text-center">{status}</p>}
        </form>
    )
}