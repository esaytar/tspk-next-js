import Image from "next/image";

export default function ContactStroke({imageSrc, text, link, length, id}) {
    return (
        <li className="flex gap-[0.36rem] lg:gap-2.5 leading-[16.41px] lg:leading-[18.75px]">
            <Image src={imageSrc} alt='иконка контактов' width={15} height={22.5} style={{height: 'auto', width: 'auto'}}/>
            {link === '' ? (
                <p>{text}</p>
            ) : (
                <a href={link} className={id === length - 1 ? 'underline' : ''}>{text}</a>
            )}
        </li>
    )
}
