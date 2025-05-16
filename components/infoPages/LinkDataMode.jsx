import Image from "next/image";

export default function LinkDataMode({link, text, image, alter, person}) {
    return (
        <p className='flex items-center gap-[5px]'>
            <Image src={image} alt={alter} className='w-[20px] h-[20px]' /> 
            <span>
                <a className='underline w-fit' href={link} target='_blank'> {text}</a>
                {person && ( <span className='text-grayMainText/50'>{person}</span> )}
            </span>
        </p>
    )
}