import Image from "next/image";

export default function ContactStroke({imageSrc, text, link}) {
    return (
        <li className="flex gap-2.5">
            <Image src={imageSrc}/>
            {link === '' ? (
                <p>{text}</p>
            ) : (
                <a href={link} className="underline">{text}</a>
            )}
        </li>
    )
}
