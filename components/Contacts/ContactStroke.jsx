import Image from "next/image";

export default function ContactStroke({imageSrc, text, link}) {
    return (
        <li className="flex gap-2.5">
            <Image src={imageSrc} alt='иконка контактов' width={15} height={22.5} style={{height: 'auto', width: 'auto'}}/>
            {link === '' ? (
                <p>{text}</p>
            ) : (
                <a href={link} className="underline">{text}</a>
            )}
        </li>
    )
}
