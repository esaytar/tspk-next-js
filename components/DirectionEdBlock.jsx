import bpoo from '@/img/icons/dir-cards/bpoo.svg'
import dual from '@/img/icons/dir-cards/dual-ed.svg'
import quality from '@/img/icons/dir-cards/quality.svg'
import online from '@/img/icons/dir-cards/online.svg'
import DirectionEdCard from './DirectionEdCard'

export default function DirectionEdBlock() {
    const dirsArray = [
        {
            url: bpoo,
            head: 'БПОО',
            text: 'Базовая профессиональная образовательная организация'
        },
        {
            url: online,
            head: 'Онлайн',
            text: 'Возможность дистанционного обучения на базе moodle и BigBlueButton'
        },
        {
            url: dual,
            head: 'Дуальное направление',
            text: 'Внедрение элементов дуального обучения в образовательной организации СПО'
        },
        {
            url: quality,
            head: 'Качество',
            text: 'Качественное обучение совершенно бесплатно'
        },
    ]

    return (
        <div className="flex flex-col gap-10" id='directions'>
            <p className='text-grayText text-[1.29rem] lg:text-[1.81rem] font-medium '>Направления подготовки</p>
            <div className="flex gap-2 flex-col lg:flex-row">
                {dirsArray.map((item, index) => (
                    <DirectionEdCard
                        key={index}
                        url={item.url}
                        heading={item.head}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}
