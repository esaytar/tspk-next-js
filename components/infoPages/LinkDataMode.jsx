import Image from "next/image";

export default function LinkDataMode({link, text, image, alter, person}) {
    return (
        <p className='flex items-center gap-2'>
            <Image src={image} alt={alter} className='w-5 h-5' /> 
            <span>
                <a className='underline w-fit' href={link} target='_blank'> {text}</a>
                {person && ( <span className='text-gray-main-text/50'>{person}</span> )}
            </span>
        </p>
    )
}