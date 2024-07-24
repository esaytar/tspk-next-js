import Image from "next/image";
import Link from "next/link";

export default function LinkedImage({link, image, alt}) {
    return (
        <Link href={link} className='relative h-[50px] lg:h-[100px] inline-block' target='_blank' rel="noopener">
            <Image 
            // fill
                id='image-link' 
                // sizes="300px"
                src={image} 
                alt={alt} 
                className='rounded-[0.625rem] h-full mx-5' 
                style={{
                    boxShadow: '4px 4px 10px 0 rgba(69, 129, 246, 0.15)',
                    // objectFit: 'contain',
                }} 
            />
        </Link>
    ) 
}