import dynamic from 'next/dynamic'
import Image from 'next/image'
const Link = dynamic(() => import('next/link'))

export default function DemExamCard({img, name, txtLinks}) {
    return (
        <div className="group w-full rounded-[10px] relative overflow-hidden flex justify-center items-center cursor-pointer">
            <p className='text-white text-18 font-medium text-center absolute z-10 w-11/12 
            group-hover:rotate-180 group-hover:-z-0 perspective-normal'>{name}</p>
            <ul className='z-0 absolute w-full h-full text-center backface-hidden bg-main-blue/50 flex flex-col justify-center 
            group-hover:rotate-0 group-hover:z-10 perspective-normal transition-transform transition-500 gap-2.5 text-white'>
                {txtLinks.length > 0 ? (
                    txtLinks.map((item, index) => (
                        <li key={index} className=' underline'>
                            <Link href='#'>{item}</Link>
                        </li>
                    ))
                ) : (
                    <p className='text-18 font-medium'>Экзамен ещё не начался</p>
                )}
            </ul>
            <Image src={img} 
                className='brightness-50 w-full h-full object-cover'
                alt={name + ', демонстрационный экзамен'} />
        </div>
    )
}
